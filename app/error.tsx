"use client";

import { useEffect } from "react";
import { RecoveryExperience } from "@/components/common/recovery-experience";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error("Portfolio route failure", error);
  }, [error]);

  return <RecoveryExperience kind="error" error={error} onRetry={reset} />;
}
