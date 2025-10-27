"use client";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Suspense } from "react";

const LazySection = ({ children, fallback, className = "" }) => {
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver();

  return (
    <div ref={ref} className={className}>
      {hasIntersected ? (
        <Suspense fallback={fallback}>{children}</Suspense>
      ) : (
        fallback
      )}
    </div>
  );
};

export default LazySection;
