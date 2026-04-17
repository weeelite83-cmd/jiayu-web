import Link from 'next/link';
import { Factory } from 'lucide-react';
import { Locale } from '@/i18n/config';

const footerLinks = {
  quickLinks: [
    { key: 'home', href: '/' },
    { key: 'about', href: '/about' },
    { key: 'products', href: '/products' },
    { key: 'applications', href: '/applications' },
    { key: 'contact', href: '/contact' },
  ],
  products: [
    { key: 'seamless', href: '/products#seamless' },
    { key: 'welded', href: '/products#welded' },
    { key: 'decorative', href: '/products#decorative' },
    { key: 'fittings', href: '/products#fittings' },
  ],
  applications: [
    { key: 'petrochemical', href: '/applications#petrochemical' },
    { key: 'food', href: '/applications#food' },
    { key: 'medical', href: '/applications#medical' },
    { key: 'construction', href: '/applications#construction' },
  ],
};

interface FooterProps {
  locale: Locale;
}

export function Footer({ locale }: FooterProps) {
  const brandName = locale === 'zh' ? '嘉钰不锈钢' : 'Jiayu Stainless Steel';
  
  const getLabel = (section: string, key: string): string => {
    if (locale === 'zh') {
      const labels: Record<string, Record<string, string>> = {
        quickLinks: { home: '首页', about: '关于我们', products: '产品中心', applications: '应用领域', contact: '联系我们' },
        products: { seamless: '不锈钢无缝管', welded: '不锈钢焊管', decorative: '不锈钢装饰管', fittings: '不锈钢管件' },
        applications: { petrochemical: '石油化工', food: '食品卫生', medical: '医疗器械', construction: '建筑装饰' },
      };
      return labels[section]?.[key] || key;
    } else {
      const labels: Record<string, Record<string, string>> = {
        quickLinks: { home: 'Home', about: 'About Us', products: 'Products', applications: 'Applications', contact: 'Contact' },
        products: { seamless: 'Seamless Pipes', welded: 'Welded Pipes', decorative: 'Decorative Pipes', fittings: 'Pipe Fittings' },
        applications: { petrochemical: 'Petrochemical', food: 'Food & Hygiene', medical: 'Medical Devices', construction: 'Construction' },
      };
      return labels[section]?.[key] || key;
    }
  };

  const translations = {
    brand: locale === 'zh' ? '专业不锈钢管生产厂家，品质值得信赖' : 'Professional stainless steel pipe manufacturer, quality you can trust.',
    phone: locale === 'zh' ? '电话：400-888-6688' : 'Tel: 400-888-6688',
    email: locale === 'zh' ? '邮箱：sales@jiayubxg.com' : 'Email: sales@jiayubxg.com',
    address: locale === 'zh' ? '地址：广东佛山顺德' : 'Address: Shunde, Foshan, Guangdong',
    quickLinks: locale === 'zh' ? '快速链接' : 'Quick Links',
    productCategories: locale === 'zh' ? '产品分类' : 'Product Categories',
    applicationAreas: locale === 'zh' ? '应用领域' : 'Application Areas',
    copyright: locale === 'zh' ? '© 2024 嘉钰不锈钢 版权所有' : '© 2024 Jiayu Stainless Steel. All Rights Reserved.',
    icp: '粤ICP备XXXXXXXX号',
  };

  return (
    <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href={`/${locale}`} className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                <Factory className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">{brandName}</span>
            </Link>
            <p className="text-slate-400 text-sm mb-4">
              {translations.brand}
            </p>
            <div className="text-slate-400 text-sm space-y-1">
              <p>{translations.phone}</p>
              <p>{translations.email}</p>
              <p>{translations.address}</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">{translations.quickLinks}</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.key}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {getLabel('quickLinks', link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">{translations.productCategories}</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              {footerLinks.products.map((link) => (
                <li key={link.key}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {getLabel('products', link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">{translations.applicationAreas}</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              {footerLinks.applications.map((link) => (
                <li key={link.key}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {getLabel('applications', link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 text-sm">
          <p>{translations.copyright} | {translations.icp}</p>
        </div>
      </div>
    </footer>
  );
}
