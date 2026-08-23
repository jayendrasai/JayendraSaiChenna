"use client";

import { useEffect } from "react";
import { RecoveryExperience } from "@/components/common/recovery-experience";

export default function GlobalError({ error }: { error: Error & { digest?: string } }) {
  useEffect(() => {
    console.error("Portfolio global failure", error);
  }, [error]);

  return <html lang="en"><body style={{ margin: 0, background: "#fffdf8", color: "#1a1a1a" }}><RecoveryExperience kind="error" error={error} onRetry={() => window.location.reload()} /></body></html>;
}
