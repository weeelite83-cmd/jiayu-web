'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import {
  Factory,
  Award,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle,
  Layers,
  Cog,
  Droplets,
  Globe,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';
import { useLocale } from 'next-intl';

const products = [
  {
    icon: <Layers className="w-8 h-8" />,
    key: 'seamless',
  },
  {
    icon: <Factory className="w-8 h-8" />,
    key: 'welded',
  },
  {
    icon: <Award className="w-8 h-8" />,
    key: 'decorative',
  },
  {
    icon: <Cog className="w-8 h-8" />,
    key: 'fittings',
  },
  {
    icon: <Droplets className="w-8 h-8" />,
    key: 'fluid',
  },
  {
    icon: <Shield className="w-8 h-8" />,
    key: 'special',
  },
];

const applications = [
  { key: 'petrochemical', icon: <Factory className="w-6 h-6" /> },
  { key: 'food', icon: <CheckCircle className="w-6 h-6" /> },
  { key: 'medical', icon: <Shield className="w-6 h-6" /> },
  { key: 'construction', icon: <Globe className="w-6 h-6" /> },
  { key: 'automotive', icon: <Cog className="w-6 h-6" /> },
  { key: 'heatExchange', icon: <Droplets className="w-6 h-6" /> },
];

const advantages = [
  { key: 'corrosion' },
  { key: 'strength' },
  { key: 'durability' },
  { key: 'clean' },
  { key: 'eco' },
  { key: 'standard' },
];

const cases = [
  { 
    titleKey: 'largePetro', 
    categoryKey: 'home.cases.petrochemical', 
    descKey: 'petrochemDesc',
    image: 'https://coze-coding-project.tos.coze.site/coze_storage_7618776839309328426/image/generate_image_48e0a747-1e7d-4d15-9a6a-cd434abe869b.jpeg?sign=1805436322-0cf5f73e5a-0-e8863b22591af91aa9a08498ab46f7db3e0033f5234cb3d141f9a607f2604244' 
  },
  { 
    titleKey: 'foodGrade', 
    categoryKey: 'home.cases.food', 
    descKey: 'foodDesc',
    image: 'https://coze-coding-project.tos.coze.site/coze_storage_7618776839309328426/image/generate_image_4fbf4521-1d81-4d6b-b365-04150aabeb6b.jpeg?sign=1805436323-66c8cd3385-0-5e6371aafbacb2f901a3abeb6b10db5e412f6efe2b7bdc7e803c3da52d7e3714' 
  },
  { 
    titleKey: 'medicalEquip', 
    categoryKey: 'home.cases.medical', 
    descKey: 'medicalDesc',
    image: 'https://coze-coding-project.tos.coze.site/coze_storage_7618776839309328426/image/generate_image_deefb578-ea6a-4df5-9295-37aea23d0013.jpeg?sign=1805436322-21e0901099-0-f56a2aa4931a46028f53db58bd3e86921d9f73b3469ba3b9f9519e402c6efec8' 
  },
];

export default function Home() {
  const t = useTranslations();
  const locale = useLocale();

  // Get navbar translations
  const navTranslations = {
    nav: {
      home: t('nav.home'),
      about: t('nav.about'),
      products: t('nav.products'),
      applications: t('nav.applications'),
      contact: t('nav.contact'),
      getQuote: t('nav.getQuote'),
    },
    footer: {
      brand: t('footer.brand'),
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <Navbar locale={locale as any} translations={navTranslations} />
      
      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://coze-coding-project.tos.coze.site/coze_storage_7618776839309328426/image/generate_image_ff3292e8-df2c-4792-a30c-09f451114c24.jpeg?sign=1805436246-31f942e91b-0-9984701c1982efb5f08d16f12c415cf70792dd7fad2afd99ceb083089c49ea9f"
            alt="Background"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              {t('home.hero.badge')}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              {t('home.hero.title')}
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                {t('home.hero.subtitle')}
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              {t('home.hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-base">
                  {t('home.hero.consultNow')}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/products">
                <Button size="lg" variant="outline" className="text-base">
                  {t('home.hero.productCatalog')}
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { value: '20年', label: t('home.hero.stats.experience') },
              { value: '1000+', label: t('home.hero.stats.customers') },
              { value: '12000吨', label: t('home.hero.stats.capacity') },
              { value: '50+', label: t('home.hero.stats.countries') },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              {t('home.products.title')}
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              {t('home.products.description')}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.key} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl flex items-center justify-center mb-4 text-blue-600">
                    {product.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {t(`home.products.${product.key}.title`)}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {t(`home.products.${product.key}.description`)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              {t('home.applications.title')}
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              {t('home.applications.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {applications.map((app) => (
              <div key={app.key} className="text-center p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl flex items-center justify-center mx-auto mb-3 text-blue-600">
                  {app.icon}
                </div>
                <h3 className="font-bold text-slate-900 mb-1">
                  {t(`home.applications.${app.key}.title`)}
                </h3>
                <p className="text-slate-500 text-xs">
                  {t(`home.applications.${app.key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {t('home.advantages.title')}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {advantages.map((adv) => (
              <div key={adv.key} className="text-center p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                <div className="text-2xl font-bold text-white mb-2">
                  {t(`home.advantages.${adv.key}`)}
                </div>
                <p className="text-blue-100 text-xs">
                  {t(`home.advantages.${adv.key}Desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              {t('home.cases.title')}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {cases.map((caseItem, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={caseItem.image}
                    alt={t(`home.cases.${caseItem.titleKey}` as any) || ''}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full mb-3">
                    {t(caseItem.categoryKey)}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {t(`cases.${caseItem.titleKey}` as any)}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {t(`cases.${caseItem.descKey}` as any)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            {locale === 'zh' ? '立即咨询，获取专业报价' : 'Contact Us Now for a Professional Quote'}
          </h2>
          <p className="text-slate-300 mb-8">
            {locale === 'zh' 
              ? '我们的专业团队随时为您提供产品咨询、技术支持和商务合作服务' 
              : 'Our professional team is ready to provide product consultation, technical support, and business cooperation services.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                {t('home.hero.consultNow')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <div className="flex items-center gap-2 justify-center text-slate-300">
              <Phone className="w-4 h-4" />
              <span>400-888-6688</span>
            </div>
          </div>
        </div>
      </section>

      <Footer locale={locale as any} />
    </div>
  );
}
