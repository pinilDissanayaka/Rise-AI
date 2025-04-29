"use client";

import React, { useState, useEffect } from "react";

// Client-side only wrapper to prevent hydration errors
export default function ClientOnly({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!isMounted) {
    return null;
  }
  
  return <>{children}</>;
}
