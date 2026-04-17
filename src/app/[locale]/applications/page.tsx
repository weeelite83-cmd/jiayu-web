import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import {
  Factory,
  CheckCircle,
  Shield,
  Globe,
  Cog,
  Droplets,
  ArrowRight,
  Building2,
  FlaskConical,
  UtensilsCrossed,
  Zap,
  Car,
} from 'lucide-react';
import { getLocale } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'Applications',
  description: 'Jiayu Stainless Steel products are widely used in petrochemical, food hygiene, medical devices, construction, and other fields.',
};

export default async function ApplicationsPage() {
  const locale = await getLocale();
  const isZh = locale === 'zh';

  const translations = {
    nav: {
      home: isZh ? '首页' : 'Home',
      about: isZh ? '关于我们' : 'About Us',
      products: isZh ? '产品中心' : 'Products',
      applications: isZh ? '应用领域' : 'Applications',
      contact: isZh ? '联系我们' : 'Contact',
      getQuote: isZh ? '获取报价' : 'Get Quote',
    },
    footer: {
      brand: isZh ? '专业不锈钢管生产厂家' : 'Professional manufacturer',
    },
    hero: {
      badge: isZh ? '应用领域' : 'Applications',
      title: isZh ? '多行业应用解决方案' : 'Multi-Industry Application Solutions',
      description: isZh 
        ? '产品广泛应用于石油化工、食品卫生、医疗器械、建筑装饰等多个领域'
        : 'Products widely used in petrochemical, food hygiene, medical devices, construction, and other fields.',
    },
  };

  const applications = [
    {
      id: 'petrochemical',
      icon: <Factory className="w-8 h-8" />,
      title: isZh ? '石油化工' : 'Petrochemical',
      description: isZh 
        ? '为石油化工行业提供耐腐蚀、耐高压的不锈钢管道系统'
        : 'Providing corrosion-resistant, high-pressure stainless steel pipe systems for the petrochemical industry.',
      image: 'https://coze-coding-project.tos.coze.site/coze_storage_7618776839309328426/image/generate_image_0c3d6eab-3eb8-40dd-b390-1a66bc7c4491.jpeg?sign=1805437136-d380c26440-0-1ab4433755f687381b2eeda2d9faa4defa060cda08a61c5b82a255b2137bbca2',
      features: isZh 
        ? ['耐腐蚀性能优异，适应酸性环境', '高压承受能力，安全可靠', '使用寿命长，维护成本低', '符合API、ANSI等国际标准']
        : ['Excellent corrosion resistance for acidic environments', 'High pressure resistance, safe and reliable', 'Long service life, low maintenance', 'Complies with API, ANSI standards'],
      products: isZh ? ['不锈钢无缝管', '不锈钢焊管', '不锈钢管件', '特种不锈钢管'] : ['Seamless Pipes', 'Welded Pipes', 'Pipe Fittings', 'Special Pipes'],
      cases: isZh 
        ? ['中石油某分公司高压无缝管供应项目', '中海油海上平台管道系统', '某大型炼化企业改造工程']
        : ['PetroChina high-pressure seamless pipe supply', 'CNOOC offshore platform pipeline system', 'Large refining enterprise renovation project'],
    },
    {
      id: 'food',
      icon: <UtensilsCrossed className="w-8 h-8" />,
      title: isZh ? '食品卫生' : 'Food & Hygiene',
      description: isZh 
        ? '符合食品级标准的不锈钢管，确保食品安全'
        : 'Food-grade stainless steel pipes ensuring food safety.',
      image: 'https://coze-coding-project.tos.coze.site/coze_storage_7618776839309328426/image/generate_image_a7a578dc-90da-42b0-8ee6-2dedab6cfa7d.jpeg?sign=1805431347-10063013f6-0-060e9451af37ef4246aa505e73d80d00e0eb49bb6f046703480581c253f3d7e9',
      features: isZh 
        ? ['符合FDA、GB食品级标准', '表面光洁度高，易清洁', '无毒无害，不污染食品', '抗菌防腐蚀']
        : ['Complies with FDA, GB food-grade standards', 'High surface finish, easy to clean', 'Non-toxic, non-polluting', 'Antibacterial and corrosion-resistant'],
      products: isZh ? ['食品级不锈钢管', '不锈钢流体管', '不锈钢管件'] : ['Food-grade Pipes', 'Fluid Pipes', 'Pipe Fittings'],
      cases: isZh 
        ? ['知名乳制品企业生产线', '大型饮料厂输送管道', '食品加工厂不锈钢管道系统']
        : ['Well-known dairy production line', 'Large beverage plant conveying pipeline', 'Food processing plant pipeline system'],
    },
    {
      id: 'medical',
      icon: <Shield className="w-8 h-8" />,
      title: isZh ? '医疗器械' : 'Medical Devices',
      description: isZh 
        ? '为医疗器械行业提供高精度、高品质的不锈钢管材'
        : 'Providing high-precision, high-quality stainless steel tubes for the medical device industry.',
      image: 'https://coze-coding-project.tos.coze.site/coze_storage_7618776839309328426/image/generate_image_8461ef6a-2441-4151-8599-a5a049986d97.jpeg?sign=1805431345-3a08eb6544-0-96632c85f4b1ccd64b9f4b0a0f111e69c3eb24e548ec26aff85ec9cb580e1948',
      features: isZh 
        ? ['医疗级标准，安全可靠', '高精度尺寸控制', '表面光洁度高', '生物相容性好']
        : ['Medical-grade standards, safe and reliable', 'High-precision dimension control', 'High surface finish', 'Good biocompatibility'],
      products: isZh ? ['精密不锈钢管', '医疗级不锈钢管', '不锈钢毛细管'] : ['Precision Pipes', 'Medical-grade Pipes', 'Capillary Tubes'],
      cases: isZh 
        ? ['医疗器械制造商精密管材供应', '医院不锈钢病床、推车配套', '牙科设备专用管材']
        : ['Precision tube supply for medical device manufacturers', 'Hospital bed and cart accessories', 'Dental equipment specialized tubes'],
    },
    {
      id: 'construction',
      icon: <Building2 className="w-8 h-8" />,
      title: isZh ? '建筑装饰' : 'Architecture & Decoration',
      description: isZh 
        ? '美观耐用的不锈钢装饰管，提升建筑品质'
        : 'Beautiful and durable stainless steel decorative pipes to enhance building quality.',
      image: 'https://coze-coding-project.tos.coze.site/coze_storage_7618776839309328426/image/generate_image_b3389da5-9463-4e39-918e-f92228bed75e.jpeg?sign=1805431347-69e64edad1-0-c493d7b060b0282c7b75da129536b8900eb9a1aeae0bbb993bb843b3f739ca15',
      features: isZh 
        ? ['表面光亮美观', '多种表面处理可选', '规格型号齐全', '安装便捷']
        : ['Bright and beautiful surface', 'Multiple surface treatments available', 'Complete specifications', 'Easy installation'],
      products: isZh ? ['不锈钢装饰管', '不锈钢方管', '不锈钢矩形管', '不锈钢管件'] : ['Decorative Pipes', 'Square Pipes', 'Rectangle Pipes', 'Pipe Fittings'],
      cases: isZh 
        ? ['大型商场不锈钢护栏工程', '高端酒店装饰项目', '机场航站楼不锈钢工程']
        : ['Large shopping mall stainless steel railing project', 'High-end hotel decoration project', 'Airport terminal stainless steel project'],
    },
    {
      id: 'automotive',
      icon: <Car className="w-8 h-8" />,
      title: isZh ? '汽车配件' : 'Automotive',
      description: isZh 
        ? '为汽车制造提供高品质不锈钢管材'
        : 'Providing high-quality stainless steel pipes for automotive manufacturing.',
      image: 'https://coze-coding-project.tos.coze.site/coze_storage_7618776839309328426/image/generate_image_c399a943-eab0-440e-b387-fd4ce0a700bf.jpeg?sign=1805437626-f5a10fe650-0-615f1e55884fb77854105006649a17d994c78aef8d8f0fe8fb916740286ac5a5',
      features: isZh 
        ? ['耐高温性能优异', '抗疲劳强度高', '重量轻，强度高', '符合汽车行业标准']
        : ['Excellent high-temperature resistance', 'High fatigue strength', 'Lightweight, high strength', 'Complies with automotive standards'],
      products: isZh ? ['不锈钢排气管', '不锈钢结构管', '不锈钢油管'] : ['Exhaust Pipes', 'Structural Pipes', 'Oil Pipes'],
      cases: isZh 
        ? ['知名汽车品牌排气管供应', '汽车零部件制造商合作', '新能源汽车冷却系统']
        : ['Well-known automotive brand exhaust supply', 'Auto parts manufacturer cooperation', 'New energy vehicle cooling system'],
    },
    {
      id: 'heat-exchange',
      icon: <Droplets className="w-8 h-8" />,
      title: isZh ? '换热器' : 'Heat Exchanger',
      description: isZh 
        ? '高效换热管，耐腐蚀传热性能优异'
        : 'High-efficiency heat exchange tubes with excellent corrosion resistance.',
      image: 'https://coze-coding-project.tos.coze.site/coze_storage_7618776839309328426/image/generate_image_4232732e-2cca-4316-9b65-1aa9c7608c82.jpeg?sign=1805431347-141d2034d4-0-d3f084071c333f6501be70fcd51cb82d89ae09091ac40d1406043eb43040e3cc',
      features: isZh 
        ? ['导热性能优异', '耐腐蚀性强', '传热效率高', '使用寿命长']
        : ['Excellent thermal conductivity', 'Strong corrosion resistance', 'High heat transfer efficiency', 'Long service life'],
      products: isZh ? ['不锈钢换热管', '不锈钢翅片管', '不锈钢U型管'] : ['Heat Exchanger Pipes', 'Fin Tubes', 'U-Tubes'],
      cases: isZh 
        ? ['电厂换热器项目', '化工企业换热系统', '暖通空调换热设备']
        : ['Power plant heat exchanger project', 'Chemical enterprise heat exchange system', 'HVAC heat exchange equipment'],
    },
    {
      id: 'pharmaceutical',
      icon: <FlaskConical className="w-8 h-8" />,
      title: isZh ? '制药行业' : 'Pharmaceutical',
      description: isZh 
        ? '符合GMP标准的制药级不锈钢管道系统'
        : 'GMP-compliant pharmaceutical-grade stainless steel pipeline systems.',
      image: 'https://coze-coding-project.tos.coze.site/coze_storage_7618776839309328426/image/generate_image_6d8f1102-945e-4056-84e2-328f341ee733.jpeg?sign=1805431347-f01620f7be-0-3f9e9bfa5e15a9228f18dca7e3e21b725c9419f5d981ef2185a155423538381a',
      features: isZh 
        ? ['符合GMP制药标准', '无死角设计', '易清洗消毒', '材质追溯体系']
        : ['GMP-compliant pharmaceutical standards', 'No deadleg design', 'Easy to clean and sterilize', 'Material traceability system'],
      products: isZh ? ['制药级不锈钢管', '洁净管道系统', '不锈钢管件'] : ['Pharmaceutical Pipes', 'Clean Pipeline System', 'Pipe Fittings'],
      cases: isZh 
        ? ['大型制药厂洁净管道项目', '生物科技公司实验室配套', '制药设备制造商合作']
        : ['Large pharmaceutical clean pipeline project', 'Biotech company laboratory support', 'Pharmaceutical equipment manufacturer cooperation'],
    },
    {
      id: 'energy',
      icon: <Zap className="w-8 h-8" />,
      title: isZh ? '新能源' : 'New Energy',
      description: isZh 
        ? '为新能源行业提供专用不锈钢管道解决方案'
        : 'Providing specialized stainless steel pipe solutions for the new energy industry.',
      image: 'https://coze-coding-project.tos.coze.site/coze_storage_7618776839309328426/image/generate_image_f9780cb0-d338-47fe-8cb8-cc20756d541d.jpeg?sign=1805431346-3309bd8030-0-9f34ad45045f7d2a0732483020e87023c62c79b46831f4733ba2baba5a0ef888',
      features: isZh 
        ? ['适应极端环境', '高可靠性', '长使用寿命', '环保可回收']
        : ['Adapt to extreme environments', 'High reliability', 'Long service life', 'Eco-friendly and recyclable'],
      products: isZh ? ['特种不锈钢管', '双相钢管', '不锈钢换热管'] : ['Special Pipes', 'Duplex Pipes', 'Heat Exchanger Pipes'],
      cases: isZh 
        ? ['锂电池生产企业管道系统', '光伏电站换热设备', '氢能源项目配套']
        : ['Lithium battery production pipeline system', 'Solar power plant heat exchange equipment', 'Hydrogen energy project support'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <Navbar locale={locale as any} translations={translations} />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://coze-coding-project.tos.coze.site/coze_storage_7618776839309328426/image/generate_image_8bdf882b-89bb-4b55-b8c6-b6e8bdbc78c4.jpeg?sign=1805427035-38d8d73ce3-0-327cf2a481d2d099cbebcccac4d4d4e6785bf871faa34805aba2c72c7f590858"
            alt="Background"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-6">
              <Globe className="w-4 h-4 mr-2" />
              {translations.hero.badge}
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              {translations.hero.title}
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              {translations.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {applications.map((app) => (
              <a key={app.id} href={`#${app.id}`}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl flex items-center justify-center mb-4 text-blue-600">
                      {app.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{app.title}</h3>
                    <p className="text-slate-600 text-sm">{app.description}</p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Application Details */}
      {applications.map((app, index) => (
        <section key={app.id} id={app.id} className={`py-20 px-4 sm:px-6 lg:px-8 ${index % 2 === 0 ? 'bg-white' : ''}`}>
          <div className="max-w-7xl mx-auto">
            <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl flex items-center justify-center text-blue-600">
                    {app.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">{app.title}</h2>
                </div>
                <p className="text-slate-600 mb-6">{app.description}</p>
                
                <h3 className="font-bold text-slate-900 mb-3">{isZh ? '产品特点' : 'Features'}</h3>
                <ul className="space-y-2 mb-6">
                  {app.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-600">
                      <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <h3 className="font-bold text-slate-900 mb-3">{isZh ? '相关产品' : 'Related Products'}</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {app.products.map((product) => (
                    <span key={product} className="px-3 py-1 bg-blue-50 text-blue-600 text-sm font-medium rounded-full">
                      {product}
                    </span>
                  ))}
                </div>
                
                <h3 className="font-bold text-slate-900 mb-3">{isZh ? '成功案例' : 'Success Cases'}</h3>
                <ul className="space-y-2 mb-6">
                  {app.cases.map((caseItem, i) => (
                    <li key={i} className="text-slate-600 text-sm">
                      • {caseItem}
                    </li>
                  ))}
                </ul>
                
                <Link href={`/${locale}/contact`}>
                  <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                    {translations.nav.getQuote}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
              
              <div className={`relative ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={app.image}
                    alt={app.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            {isZh ? '需要了解更多应用方案？' : 'Need More Application Solutions?'}
          </h2>
          <p className="text-slate-300 mb-8">
            {isZh ? '我们的技术团队可以根据您的具体需求提供定制化的解决方案' : 'Our technical team can provide customized solutions based on your specific needs.'}
          </p>
          <Link href={`/${locale}/contact`}>
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
              {translations.nav.getQuote}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer locale={locale as any} />
    </div>
  );
}
