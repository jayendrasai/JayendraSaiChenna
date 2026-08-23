"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { siteContent } from "@/constants/site";

type Point = { x: number; y: number };
type Direction = Point;

const GRID_SIZE = 16;
const STARTING_SNAKE: Point[] = [{ x: 7, y: 8 }, { x: 6, y: 8 }, { x: 5, y: 8 }];
const DIRECTIONS: Record<string, Direction> = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 },
  w: { x: 0, y: -1 },
  a: { x: -1, y: 0 },
  s: { x: 0, y: 1 },
  d: { x: 1, y: 0 }
};

function samePoint(a: Point, b: Point) {
  return a.x === b.x && a.y === b.y;
}

function randomFood(snake: Point[]): Point {
  const available = [];
  for (let y = 0; y < GRID_SIZE; y += 1) {
    for (let x = 0; x < GRID_SIZE; x += 1) {
      if (!snake.some((point) => point.x === x && point.y === y)) available.push({ x, y });
    }
  }
  return available[Math.floor(Math.random() * available.length)] ?? { x: 1, y: 1 };
}

export function ErrorSnake() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const directionRef = useRef<Direction>({ x: 1, y: 0 });
  const queuedDirectionRef = useRef<Direction>({ x: 1, y: 0 });
  const snakeRef = useRef<Point[]>(STARTING_SNAKE);
  const foodRef = useRef<Point>(randomFood(STARTING_SNAKE));
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    const cellSize = canvas.width / GRID_SIZE;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "#f3ebdd";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.strokeStyle = "rgba(26, 26, 26, 0.08)";
    context.lineWidth = 1;
    for (let index = 1; index < GRID_SIZE; index += 1) {
      context.beginPath();
      context.moveTo(index * cellSize, 0);
      context.lineTo(index * cellSize, canvas.height);
      context.moveTo(0, index * cellSize);
      context.lineTo(canvas.width, index * cellSize);
      context.stroke();
    }

    context.fillStyle = "#ff8c42";
    context.fillRect(foodRef.current.x * cellSize + 3, foodRef.current.y * cellSize + 3, cellSize - 6, cellSize - 6);
    snakeRef.current.forEach((point, index) => {
      context.fillStyle = index === 0 ? "#1a1a1a" : "#d85d1e";
      context.fillRect(point.x * cellSize + 2, point.y * cellSize + 2, cellSize - 4, cellSize - 4);
    });
  }, []);

  const restart = useCallback(() => {
    snakeRef.current = STARTING_SNAKE.map((point) => ({ ...point }));
    foodRef.current = randomFood(snakeRef.current);
    directionRef.current = { x: 1, y: 0 };
    queuedDirectionRef.current = { x: 1, y: 0 };
    setScore(0);
    setGameOver(false);
    requestAnimationFrame(draw);
  }, [draw]);

  const changeDirection = useCallback((nextDirection: Direction) => {
    const current = directionRef.current;
    if (current.x + nextDirection.x === 0 && current.y + nextDirection.y === 0) return;
    queuedDirectionRef.current = nextDirection;
  }, []);

  useEffect(() => {
    try {
      setHighScore(Number(window.localStorage.getItem("portfolio-snake-high-score") ?? 0));
    } catch {
      setHighScore(0);
    }
    const canvas = canvasRef.current;
    if (canvas) canvas.width = 320;
    draw();

    const handleKeyDown = (event: KeyboardEvent) => {
      const direction = DIRECTIONS[event.key] ?? DIRECTIONS[event.key.toLowerCase()];
      if (!direction) return;
      event.preventDefault();
      changeDirection(direction);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [changeDirection, draw]);

  useEffect(() => {
    if (gameOver) return;
    const timer = window.setInterval(() => {
      directionRef.current = queuedDirectionRef.current;
      const head = snakeRef.current[0];
      const nextHead = { x: head.x + directionRef.current.x, y: head.y + directionRef.current.y };
      const hitWall = nextHead.x < 0 || nextHead.x >= GRID_SIZE || nextHead.y < 0 || nextHead.y >= GRID_SIZE;
      const hitSelf = snakeRef.current.some((point) => samePoint(point, nextHead));
      if (hitWall || hitSelf) {
        setGameOver(true);
        return;
      }

      const nextSnake = [nextHead, ...snakeRef.current];
      if (samePoint(nextHead, foodRef.current)) {
        const nextScore = score + 1;
        setScore(nextScore);
        setHighScore((currentHighScore) => {
          const nextHighScore = Math.max(currentHighScore, nextScore);
          try { window.localStorage.setItem("portfolio-snake-high-score", String(nextHighScore)); } catch { /* storage is optional */ }
          return nextHighScore;
        });
        foodRef.current = randomFood(nextSnake);
      } else {
        nextSnake.pop();
      }
      snakeRef.current = nextSnake;
      draw();
    }, 140);
    return () => window.clearInterval(timer);
  }, [draw, gameOver, score]);

  return <div className="border-t border-border pt-5" aria-label={siteContent.recovery.snake.ariaLabel}>
    <div className="flex items-end justify-between gap-4">
      <div><p className="font-mono text-[.625rem] uppercase tracking-[.15em] text-black/45">{siteContent.recovery.snake.protocol}</p><p className="mt-2 text-lg font-semibold tracking-[-.03em]">{siteContent.recovery.snake.heading}</p></div>
      <div className="text-right font-mono text-[.625rem] uppercase tracking-[.12em] text-black/45"><span className="text-accent">{score}</span> score · <span className="text-foreground">{highScore}</span> best</div>
    </div>
    <div className="mt-4 overflow-hidden border border-border bg-surface"><canvas ref={canvasRef} width={320} height={320} className="block h-auto w-full" aria-label={`${siteContent.recovery.snake.heading} Score ${score}. Use arrow keys or WASD to move.`} /></div>
    <div className="mt-3 grid grid-cols-3 gap-2 sm:hidden" aria-label="Snake touch controls">
      <span />
      <button type="button" onClick={() => changeDirection(DIRECTIONS.ArrowUp)} className="border border-border py-2 font-mono text-xs" aria-label="Move up">↑</button>
      <span />
      <button type="button" onClick={() => changeDirection(DIRECTIONS.ArrowLeft)} className="border border-border py-2 font-mono text-xs" aria-label="Move left">←</button>
      <button type="button" onClick={() => changeDirection(DIRECTIONS.ArrowDown)} className="border border-border py-2 font-mono text-xs" aria-label="Move down">↓</button>
      <button type="button" onClick={() => changeDirection(DIRECTIONS.ArrowRight)} className="border border-border py-2 font-mono text-xs" aria-label="Move right">→</button>
    </div>
    <div className="mt-3 flex flex-wrap items-center justify-between gap-3"><p className="font-mono text-[.625rem] uppercase tracking-[.12em] text-black/45">{siteContent.recovery.snake.controls}</p><button type="button" onClick={restart} className="border border-foreground px-3 py-2 text-xs font-semibold transition-colors hover:bg-foreground hover:text-white">{gameOver ? siteContent.recovery.snake.tryAgain : siteContent.recovery.snake.restart}</button></div>
  </div>;
}
