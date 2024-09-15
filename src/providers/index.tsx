'use client';

import { NextUIProvider } from '@nextui-org/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  const hour = new Date().getHours();

  return (
    <NextUIProvider>
      <QueryClientProvider client={queryClient}>
        <NextThemesProvider attribute="class" defaultTheme={hour >= 18 ? 'dark' : 'light'}>
          {children}
        </NextThemesProvider>
      </QueryClientProvider>
    </NextUIProvider>
  );
}
