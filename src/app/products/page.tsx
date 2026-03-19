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
  Ruler,
  Weight,
  Gauge,
} from 'lucide-react';

export const metadata: Metadata = {
  title: '产品中心',
  description: '嘉钰不锈钢提供全系列不锈钢管产品，包括无缝管、焊管、装饰管、管件等，规格齐全，品质优良。',
};

const productCategories = [
  {
    id: 'seamless',
    name: '不锈钢无缝管',
    icon: <Layers className="w-8 h-8" />,
    description: '采用先进冷轧工艺，高精度、高光洁度，适用于高压、高温环境',
    image: 'https://coze-coding-project.tos.coze.site/coze_storage_7618776839309328426/image/generate_image_97d25d4b-4d91-4c50-b79a-8e5c2f8678fb.jpeg?sign=1805427031-c59d2e58b6-0-b633540b4876d0ba3e0f2f68a1c071ab0afb9944d173f08f836ffd3fb80d8499',
    features: [
      '冷轧/冷拔工艺生产',
      '内外表面光洁度高',
      '壁厚均匀，精度高',
      '承压能力强',
      '适用高温高压环境',
    ],
    specs: [
      { label: '外径范围', value: '6mm - 630mm' },
      { label: '壁厚范围', value: '1mm - 50mm' },
      { label: '长度', value: '定尺或倍尺' },
      { label: '标准', value: 'GB、ASTM、JIS、DIN' },
    ],
    grades: ['304', '304L', '316', '316L', '321', '310S', '2205', '904L'],
  },
  {
    id: 'welded',
    name: '不锈钢焊管',
    icon: <Factory className="w-8 h-8" />,
    description: '精密焊接工艺，规格齐全，广泛应用于流体输送和装饰领域',
    image: 'https://coze-coding-project.tos.coze.site/coze_storage_7618776839309328426/image/generate_image_97d25d4b-4d91-4c50-b79a-8e5c2f8678fb.jpeg?sign=1805427031-c59d2e58b6-0-b633540b4876d0ba3e0f2f68a1c071ab0afb9944d173f08f836ffd3fb80d8499',
    features: [
      '自动焊接生产线',
      '焊缝平整美观',
      '规格范围广',
      '性价比高',
      '交货周期短',
    ],
    specs: [
      { label: '外径范围', value: '10mm - 2000mm' },
      { label: '壁厚范围', value: '0.5mm - 30mm' },
      { label: '长度', value: '最长12米' },
      { label: '标准', value: 'GB、ASTM、JIS、EN' },
    ],
    grades: ['201', '304', '304L', '316', '316L', '321', '347H'],
  },
  {
    id: 'decorative',
    name: '不锈钢装饰管',
    icon: <Award className="w-8 h-8" />,
    description: '表面光亮美观，适用于建筑装饰、家具、五金制品等',
    image: 'https://coze-coding-project.tos.coze.site/coze_storage_7618776839309328426/image/generate_image_97d25d4b-4d91-4c50-b79a-8e5c2f8678fb.jpeg?sign=1805427031-c59d2e58b6-0-b633540b4876d0ba3e0f2f68a1c071ab0afb9944d173f08f836ffd3fb80d8499',
    features: [
      '表面光亮度高',
      '多种表面处理',
      '规格型号齐全',
      '可定制加工',
      '装饰效果佳',
    ],
    specs: [
      { label: '外径范围', value: '6mm - 219mm' },
      { label: '壁厚范围', value: '0.5mm - 5mm' },
      { label: '表面处理', value: '抛光、拉丝、镀色' },
      { label: '形状', value: '圆管、方管、矩形管' },
    ],
    grades: ['201', '304', '316'],
  },
  {
    id: 'fittings',
    name: '不锈钢管件',
    icon: <Cog className="w-8 h-8" />,
    description: '弯头、三通、法兰等配套管件，满足不同连接需求',
    image: 'https://coze-coding-project.tos.coze.site/coze_storage_7618776839309328426/image/generate_image_97d25d4b-4d91-4c50-b79a-8e5c2f8678fb.jpeg?sign=1805427031-c59d2e58b6-0-b633540b4876d0ba3e0f2f68a1c071ab0afb9944d173f08f836ffd3fb80d8499',
    features: [
      '种类齐全',
      '精密加工',
      '标准连接',
      '密封性好',
      '安装便捷',
    ],
    specs: [
      { label: '弯头', value: '45°、90°、180°' },
      { label: '三通', value: '等径、异径' },
      { label: '法兰', value: '平焊、对焊、螺纹' },
      { label: '标准', value: 'GB、ANSI、JIS、DIN' },
    ],
    grades: ['304', '304L', '316', '316L', '321'],
  },
  {
    id: 'fluid',
    name: '不锈钢流体管',
    icon: <Droplets className="w-8 h-8" />,
    description: '专用于给排水、排污、换热器等流体输送系统',
    image: 'https://coze-coding-project.tos.coze.site/coze_storage_7618776839309328426/image/generate_image_97d25d4b-4d91-4c50-b79a-8e5c2f8678fb.jpeg?sign=1805427031-c59d2e58b6-0-b633540b4876d0ba3e0f2f68a1c071ab0afb9944d173f08f836ffd3fb80d8499',
    features: [
      '流体阻力小',
      '耐腐蚀性强',
      '无污染输送',
      '使用寿命长',
      '维护成本低',
    ],
    specs: [
      { label: '外径范围', value: '15mm - 630mm' },
      { label: '壁厚范围', value: '1mm - 20mm' },
      { label: '压力等级', value: 'PN10 - PN250' },
      { label: '应用', value: '给水、排水、换热' },
    ],
    grades: ['304', '304L', '316', '316L'],
  },
  {
    id: 'special',
    name: '特种不锈钢管',
    icon: <Shield className="w-8 h-8" />,
    description: '双相钢、镍基合金等特种材质，满足苛刻工况需求',
    image: 'https://coze-coding-project.tos.coze.site/coze_storage_7618776839309328426/image/generate_image_97d25d4b-4d91-4c50-b79a-8e5c2f8678fb.jpeg?sign=1805427031-c59d2e58b6-0-b633540b4876d0ba3e0f2f68a1c071ab0afb9944d173f08f836ffd3fb80d8499',
    features: [
      '特殊材质',
      '极端环境适用',
      '超高性能',
      '定制生产',
      '技术支持',
    ],
    specs: [
      { label: '双相钢', value: '2205、2507' },
      { label: '镍基合金', value: 'Inconel、Hastelloy' },
      { label: '特殊合金', value: '904L、254SMO' },
      { label: '应用', value: '化工、海洋、核电' },
    ],
    grades: ['2205', '2507', '904L', '254SMO', 'Inconel625'],
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <Navbar />
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://coze-coding-project.tos.coze.site/coze_storage_7618776839309328426/image/generate_image_97d25d4b-4d91-4c50-b79a-8e5c2f8678fb.jpeg?sign=1805427031-c59d2e58b6-0-b633540b4876d0ba3e0f2f68a1c071ab0afb9944d173f08f836ffd3fb80d8499"
            alt="产品背景"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-6">
              <Factory className="w-4 h-4 mr-2" />
              产品中心
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              全系列
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> 不锈钢管产品</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              涵盖工业、装饰、流体输送等多个应用场景，规格齐全，品质优良
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
      {productCategories.map((category) => (
        <section
          key={category.id}
          id={category.id}
          className="py-20 px-4 sm:px-6 lg:px-8 bg-white scroll-mt-20"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center text-white">
                    {category.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">{category.name}</h2>
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">{category.description}</p>
                
                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">产品特点</h3>
                  <div className="space-y-3">
                    {category.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-blue-600" />
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specs */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">规格参数</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {category.specs.map((spec, idx) => (
                      <div key={idx} className="bg-slate-50 rounded-lg p-4">
                        <div className="text-sm text-slate-500 mb-1">{spec.label}</div>
                        <div className="font-bold text-slate-900">{spec.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Grades */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4">常用材质</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.grades.map((grade, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                      >
                        {grade}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl sticky top-24">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                  获取产品报价
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* Quality Assurance */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl font-bold mb-4">品质保证</h2>
            <p className="text-blue-100">严格的质量控制体系，确保每一根管材品质优良</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Ruler className="w-8 h-8" />, title: '尺寸检测', desc: '高精度测量设备' },
              { icon: <Gauge className="w-8 h-8" />, title: '压力测试', desc: '承压能力检测' },
              { icon: <Weight className="w-8 h-8" />, title: '成分分析', desc: '材质成分检验' },
              { icon: <Shield className="w-8 h-8" />, title: '质量追溯', desc: '全程可追溯体系' },
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur rounded-xl p-6 text-center text-white">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-blue-100 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
