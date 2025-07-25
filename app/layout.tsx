import React from 'react';
import { MainProvider } from '@/app/providers';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Los Angeles | NextWeather',
  description: 'NextWeather is current weather and forecast of Los Angeles',
  openGraph: {
    title: 'NextWeather',
    description: 'NextWeather is current weather and forecast of Los Angeles',
    type: 'website',
    locale: 'en_US',
    siteName: 'NextWeather',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <MainProvider>{children}</MainProvider>;
}
