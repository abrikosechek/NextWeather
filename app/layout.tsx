import React from 'react';
import { MainProvider } from '@/app/providers';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NextWeather',
  description: 'NextWeather is very cool!',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <MainProvider>{children}</MainProvider>;
}
