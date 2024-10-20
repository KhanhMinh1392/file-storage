'use client';
import PrivateLayout from '@/components/layouts/private-layout';
import PublicLayout from '@/components/layouts/public-layout';
import { getCookie } from 'cookies-next';
import { PropsWithChildren } from 'react';

export default function AuthLayout({ children }: PropsWithChildren) {
  const token = getCookie('accessToken');
  const LayoutCpn = token ? PrivateLayout : PublicLayout;

  return <LayoutCpn>{children}</LayoutCpn>;
}
