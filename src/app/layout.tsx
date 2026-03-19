import type { Metadata } from 'next';
import { Inspector } from 'react-dev-inspector';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: '鑫钢不锈钢 | 专业不锈钢管生产厂家',
    template: '%s | 鑫钢不锈钢',
  },
  description:
    '鑫钢不锈钢是一家集不锈钢管研发、生产、销售于一体的现代化企业，产品涵盖无缝管、焊管、装饰管、管件等全系列，广泛应用于石油化工、食品卫生、医疗器械、建筑装饰等领域。',
  keywords: [
    '不锈钢管',
    '不锈钢无缝管',
    '不锈钢焊管',
    '不锈钢装饰管',
    '不锈钢管件',
    '不锈钢管厂家',
    '不锈钢管价格',
  ],
  authors: [{ name: '鑫钢不锈钢', url: 'https://xingangbxg.com' }],
  generator: 'Next.js',
  // icons: {
  //   icon: '',
  // },
  openGraph: {
    title: '鑫钢不锈钢 | 专业不锈钢管生产厂家',
    description:
      '集研发、生产、销售于一体的不锈钢管专业制造商，产品涵盖无缝管、焊管、装饰管、管件等全系列',
    url: 'https://xingangbxg.com',
    siteName: '鑫钢不锈钢',
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
