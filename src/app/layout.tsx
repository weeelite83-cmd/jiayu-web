import type { Metadata } from 'next';
import { Inspector } from 'react-dev-inspector';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'TechEdge | 科技驱动未来',
    template: '%s | TechEdge',
  },
  description:
    'TechEdge是一家专注于企业数字化转型的科技公司，提供全方位的数字化解决方案，助力企业在数字经济时代实现跨越式发展。',
  keywords: [
    '数字化转型',
    '企业服务',
    '科技创新',
    '战略咨询',
    '数据分析',
    '系统集成',
  ],
  authors: [{ name: 'TechEdge Team', url: 'https://techedge.com' }],
  generator: 'Next.js',
  // icons: {
  //   icon: '',
  // },
  openGraph: {
    title: 'TechEdge | 科技驱动未来',
    description:
      '专注企业数字化转型，提供全方位数字化解决方案',
    url: 'https://techedge.com',
    siteName: 'TechEdge',
    locale: 'zh_CN',
    type: 'website',
  },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'Coze Code | Your AI Engineer is Here',
  //   description:
  //     'Build and deploy full-stack applications through AI conversation. No env setup, just flow.',
  //   // images: [''],
  // },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.COZE_PROJECT_ENV === 'DEV';

  return (
    <html lang="en">
      <body className={`antialiased`}>
        {isDev && <Inspector />}
        {children}
      </body>
    </html>
  );
}
