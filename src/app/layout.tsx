import MonitoringInitializer from '@/components/MonitoringInitializer';
import { GoogleSearchEngineMetaTag, NaverSearchEngineMetaTag } from '@/components/SearchEngineMetaTags';
import GlobalLayout from '@/components/layout/Layout/GlobalLayout';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import type { Metadata } from 'next';
import '../styles/globals.css';

dayjs.locale('ko');

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={'ko'}>
      <head></head>
      <GoogleSearchEngineMetaTag />
      <NaverSearchEngineMetaTag />
      <body>
        <MonitoringInitializer />
        <GlobalLayout>{children}</GlobalLayout>
      </body>
    </html>
  );
}
