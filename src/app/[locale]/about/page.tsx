import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import {
  Factory,
  Award,
  Users,
  Shield,
  CheckCircle,
  Lightbulb,
  Heart,
  ArrowRight,
} from 'lucide-react';
import { getLocale } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Jiayu Stainless Steel is a modern enterprise integrating R&D, production, and sales of stainless steel pipes with 20 years of industry experience.',
};

export default async function AboutPage() {
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
      badge: isZh ? '关于嘉钰不锈钢' : 'About Jiayu Stainless Steel',
      title: isZh ? '专注品质' : 'Focus on Quality',
      subtitle: isZh ? '铸就品牌' : 'Building Brands',
      description: isZh 
        ? '嘉钰不锈钢是一家集研发、生产、销售于一体的现代化企业，致力于为全球客户提供高品质的不锈钢管产品'
        : 'Jiayu Stainless Steel is a modern enterprise integrating R&D, production, and sales, dedicated to providing high-quality products to global customers.',
    },
    profile: {
      title: isZh ? '公司简介' : 'Company Profile',
      content1: isZh 
        ? '嘉钰不锈钢成立于2004年，总部位于中国不锈钢产业基地——广东省佛山市。公司占地面积50000平方米，拥有员工300余人，是一家专业从事不锈钢管研发、生产、销售的现代化企业。'
        : 'Founded in 2004, Jiayu Stainless Steel is headquartered in Foshan, Guangdong Province, China\'s stainless steel industry base. Covering 50,000 square meters with 300+ employees, we specialize in R&D, production, and sales of stainless steel pipes.',
      content2: isZh 
        ? '公司引进了国内外先进的不锈钢管生产线和检测设备，产品涵盖不锈钢无缝管、不锈钢焊管、不锈钢装饰管、不锈钢管件等多个系列，广泛应用于石油化工、食品卫生、医疗器械、建筑装饰、汽车配件等领域。'
        : 'The company has introduced advanced production lines and testing equipment. Products include seamless pipes, welded pipes, decorative pipes, and fittings, widely used in petrochemical, food hygiene, medical, construction, and automotive fields.',
      iso: isZh ? 'ISO9001认证企业' : 'ISO9001 Certified',
      highTech: isZh ? '高新技术企业' : 'High-Tech Enterprise',
      export: isZh ? '出口30+国家' : 'Export to 30+ Countries',
      capacity: isZh ? '年产能12000吨' : '12,000 Tons Annual Capacity',
    },
    stats: {
      years: isZh ? '年' : '',
      tons: isZh ? '吨' : 'Tons',
    },
    values: {
      title: isZh ? '核心价值观' : 'Core Values',
      quality: { title: isZh ? '品质为先' : 'Quality First', desc: isZh ? '严格把控每一道生产工序' : 'Strict quality control' },
      customer: { title: isZh ? '客户至上' : 'Customer First', desc: isZh ? '提供定制化解决方案' : 'Customized solutions' },
      innovation: { title: isZh ? '持续创新' : 'Innovation', desc: isZh ? '引领行业发展' : 'Industry leadership' },
      integrity: { title: isZh ? '诚信经营' : 'Integrity', desc: isZh ? '建立长期合作关系' : 'Long-term relationships' },
    },
    certifications: {
      title: isZh ? '资质认证' : 'Certifications',
      items: isZh 
        ? ['ISO9001质量管理体系认证', 'ISO14001环境管理体系认证', 'OHSAS18001职业健康安全认证', '特种设备制造许可证', '欧盟CE认证', '美国API认证']
        : ['ISO9001 Quality Management', 'ISO14001 Environmental', 'OHSAS18001 Occupational Health', 'Special Equipment License', 'EU CE Certification', 'US API Certification'],
    },
    timeline: {
      title: isZh ? '发展历程' : 'Development History',
    },
  };

  const timelineData = [
    { year: '2004', title: isZh ? '公司成立' : 'Company Founded', desc: isZh ? '嘉钰不锈钢在佛山成立' : 'Established in Foshan' },
    { year: '2008', title: isZh ? '规模扩张' : 'Scale Expansion', desc: isZh ? '年产能突破10000吨' : 'Capacity exceeded 10,000 tons' },
    { year: '2012', title: isZh ? '认证升级' : 'Certification', desc: isZh ? '通过ISO9001认证' : 'ISO9001 certified' },
    { year: '2016', title: isZh ? '国际市场' : 'International Market', desc: isZh ? '产品出口30+国家' : 'Export to 30+ countries' },
    { year: '2020', title: isZh ? '技术创新' : 'Tech Innovation', desc: isZh ? '建立研发中心' : 'R&D center established' },
    { year: '2024', title: isZh ? '行业领先' : 'Industry Leader', desc: isZh ? '年产能达12000吨' : '12,000 tons annual capacity' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <Navbar locale={locale as any} translations={translations} />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://coze-coding-project.tos.coze.site/coze_storage_7618776839309328426/image/generate_image_51bfd3a2-ad00-4971-aa1e-407ee2f1ffdc.jpeg?sign=1805509421-d4e5102726-0-c151e0722c166365877aba64b6c9cb68c01ad8c325f47b8c7c43f0df75464f22"
            alt="Jiayu Factory"
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

      {/* Company Profile */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">{translations.profile.title}</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {translations.profile.content1}
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {translations.profile.content2}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-slate-700">{translations.profile.iso}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-slate-700">{translations.profile.highTech}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-slate-700">{translations.profile.export}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-slate-700">{translations.profile.capacity}</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://coze-coding-project.tos.coze.site/coze_storage_7618776839309328426/image/generate_image_9aa56281-97ac-4660-86ec-f7f81d65ff80.jpeg?sign=1805510488-88baba56a9-0-2e7cfbee7eac90b94bcba5f1f81a242f2ebdf66ccf2a196acfb949068f42a8e7"
                  alt="Factory Warehouse"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-5xl font-bold mb-2">20{translations.stats.years}</div>
              <div className="text-blue-100">{isZh ? '年行业经验' : 'Years Experience'}</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">1000+</div>
              <div className="text-blue-100">{isZh ? '服务客户' : 'Satisfied Customers'}</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">12000{translations.stats.tons}</div>
              <div className="text-blue-100">{isZh ? '年产能' : 'Annual Capacity'}</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-blue-100">{isZh ? '出口国家' : 'Export Countries'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{translations.values.title}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Shield className="w-8 h-8" />, ...translations.values.quality },
              { icon: <Users className="w-8 h-8" />, ...translations.values.customer },
              { icon: <Lightbulb className="w-8 h-8" />, ...translations.values.innovation },
              { icon: <Heart className="w-8 h-8" />, ...translations.values.integrity },
            ].map((value, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl flex items-center justify-center mx-auto mb-4 text-blue-600">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-slate-600 text-sm">{value.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{translations.certifications.title}</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {translations.certifications.items.map((cert, index) => (
              <div key={index} className="text-center p-4 rounded-xl bg-slate-50">
                <CheckCircle className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="text-slate-700 text-sm font-medium">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{translations.timeline.title}</h2>
          </div>
          <div className="space-y-8">
            {timelineData.map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-2xl font-bold text-blue-600">{item.year}</span>
                </div>
                <div className="relative flex-shrink-0 w-4">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-600 rounded-full"></div>
                  {index !== timelineData.length - 1 && (
                    <div className="absolute top-5 left-1/2 -translate-x-1/2 w-0.5 h-full bg-blue-200"></div>
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            {isZh ? '了解更多关于嘉钰不锈钢' : 'Learn More About Jiayu Stainless Steel'}
          </h2>
          <p className="text-slate-300 mb-8">
            {isZh ? '如果您有任何问题，欢迎随时联系我们' : 'Feel free to contact us if you have any questions.'}
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
