'use client';

import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode }) {
  const hour = new Date().getHours();

  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme={hour >= 18 ? 'dark' : 'light'}>
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}
