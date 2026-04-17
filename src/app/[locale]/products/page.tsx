import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import {
  Factory,
  Layers,
  Award,
  Cog,
  Droplets,
  Shield,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import { getLocale } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Jiayu Stainless Steel offers a full range of stainless steel pipe products including seamless pipes, welded pipes, decorative pipes, and fittings.',
};

export default async function ProductsPage() {
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
      badge: isZh ? '产品中心' : 'Products',
      title: isZh ? '全系列' : 'Full Range of',
      subtitle: isZh ? '不锈钢管产品' : 'Stainless Steel Pipe Products',
      description: isZh 
        ? '涵盖工业、装饰、流体输送等多个应用场景，规格齐全，品质优良'
        : 'Covering industrial, decorative, fluid transportation and other applications with complete specifications and excellent quality.',
    },
  };

  const productCategories = [
    {
      id: 'seamless',
      icon: <Layers className="w-8 h-8" />,
      name: isZh ? '不锈钢无缝管' : 'Stainless Steel Seamless Pipes',
      description: isZh 
        ? '采用先进冷轧工艺，高精度、高光洁度，适用于高压、高温环境'
        : 'Advanced cold rolling process, high precision, high surface finish, suitable for high pressure and temperature environments.',
      image: 'https://coze-coding-project.tos.coze.site/coze_storage_7618776839309328426/image/generate_image_854975b1-9a8b-4e21-b7bf-2a3f20b3673c.jpeg?sign=1805436103-614d79560d-0-29b331e67bd4d8bda66b9e4236b77ca5aceb25c17bfc834242841c701a29c95d',
      features: isZh 
        ? ['冷轧/冷拔工艺生产', '内外表面光洁度高', '壁厚均匀，精度高', '承压能力强', '适用高温高压环境']
        : ['Cold rolling/drawing process', 'High surface finish', 'Uniform wall thickness', 'High pressure resistance', 'High temp & pressure'],
      specs: [
        { label: isZh ? '外径范围' : 'OD Range', value: '6mm - 630mm' },
        { label: isZh ? '壁厚范围' : 'Wall Thickness', value: '1mm - 50mm' },
        { label: isZh ? '长度' : 'Length', value: isZh ? '定尺或倍尺' : 'Fixed/Multiples' },
        { label: isZh ? '标准' : 'Standards', value: 'GB、ASTM、JIS、DIN' },
      ],
      grades: ['304', '304L', '316', '316L', '321', '310S', '2205', '904L'],
    },
    {
      id: 'welded',
      icon: <Factory className="w-8 h-8" />,
      name: isZh ? '不锈钢焊管' : 'Stainless Steel Welded Pipes',
      description: isZh 
        ? '精密焊接工艺，规格齐全，广泛应用于流体输送和装饰领域'
        : 'Precision welding process, complete specifications, widely used in fluid transportation and decoration.',
      image: 'https://coze-coding-project.tos.coze.site/coze_storage_7618776839309328426/image/generate_image_08a1a744-0e8e-49f2-b41e-3573b0d8e432.jpeg?sign=1805436103-46bc2aff61-0-d221cbba28793c834f817553eb2ec60e601be5d3362890448ba361ec1ca397eb',
      features: isZh 
        ? ['自动焊接生产线', '焊缝平整美观', '规格范围广', '性价比高', '交货周期短']
        : ['Automatic welding line', 'Smooth weld seams', 'Wide specification range', 'Cost-effective', 'Short delivery'],
      specs: [
        { label: isZh ? '外径范围' : 'OD Range', value: '10mm - 2000mm' },
        { label: isZh ? '壁厚范围' : 'Wall Thickness', value: '0.5mm - 30mm' },
        { label: isZh ? '长度' : 'Length', value: isZh ? '最长12米' : 'Up to 12 meters' },
        { label: isZh ? '标准' : 'Standards', value: 'GB、ASTM、JIS、EN' },
      ],
      grades: ['201', '304', '304L', '316', '316L', '321', '347H'],
    },
    {
      id: 'decorative',
      icon: <Award className="w-8 h-8" />,
      name: isZh ? '不锈钢装饰管' : 'Stainless Steel Decorative Pipes',
      description: isZh 
        ? '表面光亮美观，适用于建筑装饰、家具、五金制品等'
        : 'Bright and beautiful surface, suitable for architectural decoration, furniture, and hardware.',
      image: 'https://coze-coding-project.tos.coze.site/coze_storage_7618776839309328426/image/generate_image_05ba7afd-5df7-4889-8b2b-f5323bc461f7.jpeg?sign=1805436102-54076daf66-0-c71a09a9f54bce204c5b8b3e7640ccf5e865dbcf392caf303c8d65222b296ae4',
      features: isZh 
        ? ['表面光亮度高', '多种表面处理', '规格型号齐全', '可定制加工', '装饰效果佳']
        : ['High surface brightness', 'Multiple surface treatments', 'Complete specs', 'Custom processing', 'Excellent decoration'],
      specs: [
        { label: isZh ? '外径范围' : 'OD Range', value: '6mm - 219mm' },
        { label: isZh ? '壁厚范围' : 'Wall Thickness', value: '0.5mm - 5mm' },
        { label: isZh ? '表面处理' : 'Surface', value: isZh ? '抛光、拉丝、镀色' : 'Polish, Brush, Color' },
        { label: isZh ? '形状' : 'Shape', value: isZh ? '圆管、方管、矩形管' : 'Round, Square, Rectangle' },
      ],
      grades: ['201', '304', '316'],
    },
    {
      id: 'fittings',
      icon: <Cog className="w-8 h-8" />,
      name: isZh ? '不锈钢管件' : 'Stainless Steel Pipe Fittings',
      description: isZh 
        ? '弯头、三通、法兰等配套管件，满足不同连接需求'
        : 'Elbows, tees, flanges and other fittings to meet different connection needs.',
      image: 'https://coze-coding-project.tos.coze.site/coze_storage_7618776839309328426/image/generate_image_d9fc6948-bfb1-49a2-8835-76b070412f2a.jpeg?sign=1805436102-843a655433-0-2d671d3f4dd753aa2a823cba141cdabb0787deb7416ec51ad150cead068d0290',
      features: isZh 
        ? ['种类齐全', '精密加工', '标准连接', '密封性好', '安装便捷']
        : ['Complete range', 'Precision machining', 'Standard connections', 'Good sealing', 'Easy installation'],
      specs: [
        { label: isZh ? '弯头' : 'Elbows', value: '45°、90°、180°' },
        { label: isZh ? '三通' : 'Tees', value: isZh ? '等径、异径' : 'Equal, Reducing' },
        { label: isZh ? '法兰' : 'Flanges', value: isZh ? '平焊、对焊、螺纹' : 'Socket, Weld, Thread' },
        { label: isZh ? '标准' : 'Standards', value: 'GB、ANSI、JIS、DIN' },
      ],
      grades: ['304', '304L', '316', '316L', '321'],
    },
    {
      id: 'fluid',
      icon: <Droplets className="w-8 h-8" />,
      name: isZh ? '不锈钢流体管' : 'Stainless Steel Fluid Pipes',
      description: isZh 
        ? '专用于给排水、排污、换热器等流体输送系统'
        : 'Specially used for water supply/drainage, sewage, heat exchangers and fluid systems.',
      image: 'https://coze-coding-project.tos.coze.site/coze_storage_7618776839309328426/image/generate_image_73268428-b0ad-4be8-b65f-d94909c8af29.jpeg?sign=1805436103-8c7a31f35f-0-5c3f912fcdd360b113d3c1df160ab57efed4ba9b745d57d7922464e767206aca',
      features: isZh 
        ? ['流体阻力小', '耐腐蚀性强', '无污染输送', '使用寿命长', '维护成本低']
        : ['Low fluid resistance', 'High corrosion resistance', 'Pollution-free transfer', 'Long service life', 'Low maintenance'],
      specs: [
        { label: isZh ? '外径范围' : 'OD Range', value: '15mm - 630mm' },
        { label: isZh ? '壁厚范围' : 'Wall Thickness', value: '1mm - 20mm' },
        { label: isZh ? '压力等级' : 'Pressure', value: 'PN10 - PN250' },
        { label: isZh ? '应用' : 'Application', value: isZh ? '给水、排水、换热' : 'Water, Drainage, Heat' },
      ],
      grades: ['304', '304L', '316', '316L'],
    },
    {
      id: 'special',
      icon: <Shield className="w-8 h-8" />,
      name: isZh ? '特种不锈钢管' : 'Special Stainless Steel Pipes',
      description: isZh 
        ? '双相钢、镍基合金等特种材质，满足苛刻工况需求'
        : 'Duplex steel, nickel-based alloys and special materials for demanding conditions.',
      image: 'https://coze-coding-project.tos.coze.site/coze_storage_7618776839309328426/image/generate_image_03e9772c-d4b1-4fbb-bb52-68a8e309fd46.jpeg?sign=1805436102-8761523de1-0-d5c8db45174a4c87c01fb58a6d930fe1715d9080528491c12eda324429455365',
      features: isZh 
        ? ['特殊材质', '极端环境适用', '超高性能', '定制生产', '技术支持']
        : ['Special materials', 'Extreme environments', 'Ultra high performance', 'Custom production', 'Tech support'],
      specs: [
        { label: isZh ? '双相钢' : 'Duplex Steel', value: '2205、2507' },
        { label: isZh ? '镍基合金' : 'Nickel Alloy', value: 'Inconel、Hastelloy' },
        { label: isZh ? '特殊合金' : 'Special Alloys', value: '904L、254SMO' },
        { label: isZh ? '应用' : 'Application', value: isZh ? '化工、海洋、核电' : 'Chemical, Marine, Nuclear' },
      ],
      grades: ['2205', '2507', '904L', '254SMO', 'Inconel625'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <Navbar locale={locale as any} translations={translations} />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://coze-coding-project.tos.coze.site/coze_storage_7618776839309328426/image/generate_image_854975b1-9a8b-4e21-b7bf-2a3f20b3673c.jpeg?sign=1805436103-614d79560d-0-29b331e67bd4d8bda66b9e4236b77ca5aceb25c17bfc834242841c701a29c95d"
            alt="Products Background"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-6">
              <Factory className="w-4 h-4 mr-2" />
              {translations.hero.badge}
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              {translations.hero.title}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> {translations.hero.subtitle}</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              {translations.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {productCategories.map((category) => (
              <a key={category.id} href={`#${category.id}`}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl flex items-center justify-center mb-4 text-blue-600">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{category.name}</h3>
                    <p className="text-slate-600 text-sm">{category.description}</p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details */}
      {productCategories.map((category, index) => (
        <section key={category.id} id={category.id} className={`py-20 px-4 sm:px-6 lg:px-8 ${index % 2 === 0 ? 'bg-white' : ''}`}>
          <div className="max-w-7xl mx-auto">
            <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl flex items-center justify-center text-blue-600">
                    {category.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">{category.name}</h2>
                </div>
                <p className="text-slate-600 mb-6">{category.description}</p>
                
                <h3 className="font-bold text-slate-900 mb-3">{isZh ? '产品特点' : 'Features'}</h3>
                <ul className="space-y-2 mb-6">
                  {category.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-600">
                      <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <h3 className="font-bold text-slate-900 mb-3">{isZh ? '规格参数' : 'Specifications'}</h3>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {category.specs.map((spec, i) => (
                    <div key={i} className="bg-slate-50 rounded-lg p-3">
                      <div className="text-xs text-slate-500">{spec.label}</div>
                      <div className="font-medium text-slate-900">{spec.value}</div>
                    </div>
                  ))}
                </div>
                
                <h3 className="font-bold text-slate-900 mb-3">{isZh ? '材质牌号' : 'Grades'}</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {category.grades.map((grade) => (
                    <span key={grade} className="px-3 py-1 bg-blue-50 text-blue-600 text-sm font-medium rounded-full">
                      {grade}
                    </span>
                  ))}
                </div>
                
                <Link href={`/${locale}/contact`}>
                  <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                    {isZh ? '立即询价' : 'Get Quote'}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
              
              <div className={`relative ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={category.image}
                    alt={category.name}
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
            {isZh ? '需要了解更多产品信息？' : 'Need More Product Information?'}
          </h2>
          <p className="text-slate-300 mb-8">
            {isZh ? '我们的专业团队随时为您提供产品咨询和技术支持' : 'Our professional team is ready to provide product consultation and technical support.'}
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
