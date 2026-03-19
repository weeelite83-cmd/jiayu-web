import Link from 'next/link';
import { Factory } from 'lucide-react';

const footerLinks = {
  quickLinks: [
    { name: '首页', href: '/' },
    { name: '关于我们', href: '/about' },
    { name: '产品中心', href: '/products' },
    { name: '应用领域', href: '/applications' },
    { name: '联系我们', href: '/contact' },
  ],
  products: [
    { name: '不锈钢无缝管', href: '/products#seamless' },
    { name: '不锈钢焊管', href: '/products#welded' },
    { name: '不锈钢装饰管', href: '/products#decorative' },
    { name: '不锈钢管件', href: '/products#fittings' },
  ],
  applications: [
    { name: '石油化工', href: '/applications#petrochemical' },
    { name: '食品卫生', href: '/applications#food' },
    { name: '医疗器械', href: '/applications#medical' },
    { name: '建筑装饰', href: '/applications#construction' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                <Factory className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">嘉钰不锈钢</span>
            </Link>
            <p className="text-slate-400 text-sm mb-4">
              专业不锈钢管生产厂家，品质值得信赖
            </p>
            <div className="text-slate-400 text-sm space-y-1">
              <p>电话：400-888-6688</p>
              <p>邮箱：sales@jiayubxg.com</p>
              <p>地址：广东佛山顺德</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">快速链接</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">产品分类</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">应用领域</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              {footerLinks.applications.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 text-sm">
          <p>© 2024 嘉钰不锈钢 版权所有 | 粤ICP备XXXXXXXX号</p>
        </div>
      </div>
    </footer>
  );
}
