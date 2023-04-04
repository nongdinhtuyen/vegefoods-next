'use client';

import { useStyledComponentsRegistry } from '@/lib/styling';
import { useServerInsertedHTML } from 'next/navigation';
import { ReactNode } from 'react';

export function StyledRegistry({ children }: { children: ReactNode }) {
  const [StyledComponentsRegistry, styledComponentsFlushEffect] = useStyledComponentsRegistry();

  useServerInsertedHTML(() => {
    return <>{styledComponentsFlushEffect()}</>;
  });

  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
}
