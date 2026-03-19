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

export const metadata: Metadata = {
  title: '应用领域',
  description: '嘉钰不锈钢产品广泛应用于石油化工、食品卫生、医疗器械、建筑装饰、汽车配件、换热器等多个领域。',
};

const applications = [
  {
    id: 'petrochemical',
    icon: <Factory className="w-8 h-8" />,
    title: '石油化工',
    description: '为石油化工行业提供耐腐蚀、耐高压的不锈钢管道系统',
    features: [
      '耐腐蚀性能优异，适应酸性环境',
      '高压承受能力，安全可靠',
      '使用寿命长，维护成本低',
      '符合API、ANSI等国际标准',
    ],
    products: ['不锈钢无缝管', '不锈钢焊管', '不锈钢管件', '特种不锈钢管'],
    cases: [
      '中石油某分公司高压无缝管供应项目',
      '中海油海上平台管道系统',
      '某大型炼化企业改造工程',
    ],
  },
  {
    id: 'food',
    icon: <UtensilsCrossed className="w-8 h-8" />,
    title: '食品卫生',
    description: '符合食品级标准的不锈钢管，确保食品安全',
    features: [
      '符合FDA、GB食品级标准',
      '表面光洁度高，易清洁',
      '无毒无害，不污染食品',
      '抗菌防腐蚀',
    ],
    products: ['食品级不锈钢管', '不锈钢流体管', '不锈钢管件'],
    cases: [
      '知名乳制品企业生产线',
      '大型饮料厂输送管道',
      '食品加工厂不锈钢管道系统',
    ],
  },
  {
    id: 'medical',
    icon: <Shield className="w-8 h-8" />,
    title: '医疗器械',
    description: '为医疗器械行业提供高精度、高品质的不锈钢管材',
    features: [
      '医疗级标准，安全可靠',
      '高精度尺寸控制',
      '表面光洁度高',
      '生物相容性好',
    ],
    products: ['精密不锈钢管', '医疗级不锈钢管', '不锈钢毛细管'],
    cases: [
      '医疗器械制造商精密管材供应',
      '医院不锈钢病床、推车配套',
      '牙科设备专用管材',
    ],
  },
  {
    id: 'construction',
    icon: <Building2 className="w-8 h-8" />,
    title: '建筑装饰',
    description: '美观耐用的不锈钢装饰管，提升建筑品质',
    features: [
      '表面光亮美观',
      '多种表面处理可选',
      '规格型号齐全',
      '安装便捷',
    ],
    products: ['不锈钢装饰管', '不锈钢方管', '不锈钢矩形管', '不锈钢管件'],
    cases: [
      '大型商场不锈钢护栏工程',
      '高端酒店装饰项目',
      '机场航站楼不锈钢工程',
    ],
  },
  {
    id: 'automotive',
    icon: <Car className="w-8 h-8" />,
    title: '汽车配件',
    description: '为汽车制造提供高品质不锈钢管材',
    features: [
      '耐高温性能优异',
      '抗疲劳强度高',
      '重量轻，强度高',
      '符合汽车行业标准',
    ],
    products: ['不锈钢排气管', '不锈钢结构管', '不锈钢油管'],
    cases: [
      '知名汽车品牌排气管供应',
      '汽车零部件制造商合作',
      '新能源汽车冷却系统',
    ],
  },
  {
    id: 'heat-exchange',
    icon: <Droplets className="w-8 h-8" />,
    title: '换热器',
    description: '高效换热管，耐腐蚀传热性能优异',
    features: [
      '导热性能优异',
      '耐腐蚀性强',
      '传热效率高',
      '使用寿命长',
    ],
    products: ['不锈钢换热管', '不锈钢翅片管', '不锈钢U型管'],
    cases: [
      '电厂换热器项目',
      '化工企业换热系统',
      '暖通空调换热设备',
    ],
  },
  {
    id: 'pharmaceutical',
    icon: <FlaskConical className="w-8 h-8" />,
    title: '制药行业',
    description: '符合GMP标准的制药级不锈钢管道系统',
    features: [
      '符合GMP制药标准',
      '无死角设计',
      '易清洗消毒',
      '材质追溯体系',
    ],
    products: ['制药级不锈钢管', '洁净管道系统', '不锈钢管件'],
    cases: [
      '大型制药厂洁净管道项目',
      '生物科技公司实验室配套',
      '制药设备制造商合作',
    ],
  },
  {
    id: 'energy',
    icon: <Zap className="w-8 h-8" />,
    title: '新能源',
    description: '为新能源行业提供专用不锈钢管道解决方案',
    features: [
      '适应极端环境',
      '高可靠性',
      '长使用寿命',
      '环保可回收',
    ],
    products: ['特种不锈钢管', '双相钢管', '不锈钢换热管'],
    cases: [
      '锂电池生产企业管道系统',
      '光伏电站换热设备',
      '氢能源项目配套',
    ],
  },
];

export default function ApplicationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <Navbar />
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://coze-coding-project.tos.coze.site/coze_storage_7618776839309328426/image/generate_image_8bdf882b-89bb-4b55-b8c6-b6e8bdbc78c4.jpeg?sign=1805427035-38d8d73ce3-0-327cf2a481d2d099cbebcccac4d4d4e6785bf871faa34805aba2c72c7f590858"
            alt="背景"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-6">
              <Globe className="w-4 h-4 mr-2" />
              应用领域
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              广泛应用于
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> 多个行业</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              产品广泛应用于石油化工、食品卫生、医疗器械、建筑装饰、汽车配件、换热器等领域，满足不同客户的多样化需求
            </p>
          </div>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {applications.map((app) => (
              <a
                key={app.id}
                href={`#${app.id}`}
                className="px-4 py-2 bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-blue-600 rounded-full text-sm font-medium transition-colors"
              >
                {app.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Application Details */}
      {applications.map((app, index) => (
        <section
          key={app.id}
          id={app.id}
          className={`py-20 px-4 sm:px-6 lg:px-8 scroll-mt-32 ${
            index % 2 === 0 ? 'bg-white' : ''
          }`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center text-white">
                    {app.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">{app.title}</h2>
                </div>
                <p className="text-slate-600 mb-8 leading-relaxed">{app.description}</p>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">行业特点</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {app.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Products */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">推荐产品</h3>
                  <div className="flex flex-wrap gap-2">
                    {app.products.map((product, idx) => (
                      <Link key={idx} href="/products">
                        <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors cursor-pointer">
                          {product}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Cases */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4">成功案例</h3>
                  <div className="space-y-2">
                    {app.cases.map((caseItem, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-slate-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-sm">{caseItem}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className={`relative ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center sticky top-32">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl mx-auto mb-6 flex items-center justify-center text-white">
                      {app.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{app.title}</h3>
                    <p className="text-slate-600">{app.description}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                  咨询该领域解决方案
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">找不到您的行业？</h2>
          <p className="text-blue-100 mb-8">
            我们的产品和服务覆盖更多行业，请联系我们获取定制化解决方案
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                联系我们
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/products">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                查看全部产品
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
