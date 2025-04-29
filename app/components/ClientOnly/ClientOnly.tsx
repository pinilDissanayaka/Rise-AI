"use client";
import React, { ReactNode } from 'react';

interface ClientOnlyProps {
  children: ReactNode;
  fallback?: ReactNode;
}

const ClientOnly = ({ children, fallback = null }: ClientOnlyProps): JSX.Element | null => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return fallback as JSX.Element | null;
  }

  return <>{children}</>;
}

export default ClientOnly;