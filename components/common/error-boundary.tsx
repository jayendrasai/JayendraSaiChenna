"use client";

import { Component, type ErrorInfo, type ReactNode } from "react";
import { RecoveryExperience } from "@/components/common/recovery-experience";

type ErrorBoundaryProps = { children: ReactNode };
type ErrorBoundaryState = { error: Error | null };

export class AppErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { error: null };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Portfolio render failure", error, info.componentStack);
  }

  render() {
    if (this.state.error) {
      return <RecoveryExperience kind="error" error={this.state.error} onRetry={() => this.setState({ error: null })} />;
    }
    return this.props.children;
  }
}
