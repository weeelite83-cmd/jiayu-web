'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
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

const products = [
  {
    icon: <Layers className="w-8 h-8" />,
    title: '不锈钢无缝管',
    description: '采用先进冷轧工艺，高精度、高光洁度，适用于高压、高温环境',
  },
  {
    icon: <Factory className="w-8 h-8" />,
    title: '不锈钢焊管',
    description: '精密焊接工艺，规格齐全，广泛应用于流体输送和装饰领域',
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: '不锈钢装饰管',
    description: '表面光亮美观，适用于建筑装饰、家具、五金制品等',
  },
  {
    icon: <Cog className="w-8 h-8" />,
    title: '不锈钢管件',
    description: '弯头、三通、法兰等配套管件，满足不同连接需求',
  },
  {
    icon: <Droplets className="w-8 h-8" />,
    title: '不锈钢流体管',
    description: '专用于给排水、排污、换热器等流体输送系统',
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: '特种不锈钢管',
    description: '双相钢、镍基合金等特种材质，满足苛刻工况需求',
  },
];

const applications = [
  { title: '石油化工', icon: <Factory className="w-6 h-6" />, description: '耐腐蚀、耐高压管道系统' },
  { title: '食品卫生', icon: <CheckCircle className="w-6 h-6" />, description: '符合食品级标准，卫生安全' },
  { title: '医疗器械', icon: <Shield className="w-6 h-6" />, description: '医疗设备、手术器械专用管材' },
  { title: '建筑装饰', icon: <Globe className="w-6 h-6" />, description: '栏杆、门窗、装饰构件' },
  { title: '汽车配件', icon: <Cog className="w-6 h-6" />, description: '排气系统、结构件等' },
  { title: '换热器', icon: <Droplets className="w-6 h-6" />, description: '高效换热管，耐腐蚀传热' },
];

const advantages = [
  { title: '耐腐蚀', description: '优异的抗腐蚀性能' },
  { title: '高强度', description: '机械性能优越' },
  { title: '寿命长', description: '使用寿命长' },
  { title: '易清洁', description: '表面光滑易清洁' },
  { title: '环保', description: '100%可回收' },
  { title: '国际标准', description: '符合GB/ASTM/JIS' },
];

const cases = [
  { title: '大型石化企业', category: '石油化工', description: '为中石油某分公司提供高压无缝管，年供应量达5000吨', image: 'https://coze-coding-project.tos.coze.site/coze_storage_7618776839309328426/image/generate_image_48e0a747-1e7d-4d15-9a6a-cd434abe869b.jpeg?sign=1805436322-0cf5f73e5a-0-e8863b22591af91aa9a08498ab46f7db3e0033f5234cb3d141f9a607f2604244' },
  { title: '食品级管道系统', category: '食品卫生', description: '为知名乳制品企业供应食品级不锈钢管，确保生产安全', image: 'https://coze-coding-project.tos.coze.site/coze_storage_7618776839309328426/image/generate_image_4fbf4521-1d81-4d6b-b365-04150aabeb6b.jpeg?sign=1805436323-66c8cd3385-0-5e6371aafbacb2f901a3abeb6b10db5e412f6efe2b7bdc7e803c3da52d7e3714' },
  { title: '医疗器械配套', category: '医疗领域', description: '为医疗器械厂商提供精密不锈钢管，品质达到医疗级标准', image: 'https://coze-coding-project.tos.coze.site/coze_storage_7618776839309328426/image/generate_image_deefb578-ea6a-4df5-9295-37aea23d0013.jpeg?sign=1805436322-21e0901099-0-f56a2aa4931a46028f53db58bd3e86921d9f73b3469ba3b9f9519e402c6efec8' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://coze-coding-project.tos.coze.site/coze_storage_7618776839309328426/image/generate_image_ff3292e8-df2c-4792-a30c-09f451114c24.jpeg?sign=1805436246-31f942e91b-0-9984701c1982efb5f08d16f12c415cf70792dd7fad2afd99ceb083089c49ea9f"
            alt="背景"
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
              专业不锈钢管生产厂家 · 品质保障
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              专注不锈钢管制造
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                品质铸就未来
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              集研发、生产、销售于一体的不锈钢管专业制造商，产品涵盖无缝管、焊管、装饰管、管件等全系列产品，服务全球客户
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-base">
                  立即咨询
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/products">
                <Button size="lg" variant="outline" className="text-base">
                  产品目录
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { value: '20年', label: '行业经验' },
              { value: '1000+', label: '合作客户' },
              { value: '12000吨', label: '年产能' },
              { value: '50+', label: '出口国家' },
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

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">关于我们</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                嘉钰不锈钢是一家集不锈钢管研发、生产、销售于一体的现代化企业，拥有先进的不锈钢管生产线和完善的检测设备。公司位于中国不锈钢产业基地，地理位置优越，交通便利。
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                产品严格按照中国GB、美国ASTM、日本JIS等国际标准组织生产，广泛应用于石油化工、食品卫生、医疗器械、建筑装饰、汽车配件等领域。
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {advantages.map((item, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-slate-900 text-sm">{item.title}</div>
                      <div className="text-slate-500 text-xs">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/about">
                <Button variant="outline" className="text-blue-600">
                  了解更多
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://coze-coding-project.tos.coze.site/coze_storage_7618776839309328426/image/generate_image_61923002-2101-4ef8-8b03-9ebb1ec67910.jpeg?sign=1805509367-fd8722b4d4-0-a674b5071c899953144717bd232707aee4c6f16a09117c72694a25836fa35cf1"
                  alt="嘉钰不锈钢工厂"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-xl">
                <div className="text-center text-white">
                  <div className="text-2xl font-bold">20年</div>
                  <div className="text-xs">行业经验</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://coze-coding-project.tos.coze.site/coze_storage_7618776839309328426/image/generate_image_c01feed1-98f1-4cc4-b0be-64d9f022a69d.jpeg?sign=1805436246-ded31bc994-0-9716b855460f252f040700e1f581e5032b6cae6889ec925d72a50026695e3ae8"
            alt="产品背景"
            fill
            className="object-cover opacity-10"
          />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">产品中心</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              全系列不锈钢管产品，涵盖工业、装饰、流体输送等多个应用场景
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Link key={index} href="/products">
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/90 backdrop-blur cursor-pointer">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl flex items-center justify-center mb-4 text-blue-600">
                      {product.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{product.title}</h3>
                    <p className="text-slate-600 text-sm">{product.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/products">
              <Button variant="outline" className="text-blue-600">
                查看全部产品
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section id="applications" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">应用领域</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              产品广泛应用于多个行业领域，满足不同客户的多样化需求
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {applications.map((app, index) => (
              <Link key={index} href="/applications">
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-4 text-white">
                    {app.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{app.title}</h3>
                  <p className="text-slate-600 text-sm">{app.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/applications">
              <Button variant="outline" className="text-blue-600">
                查看全部领域
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">合作案例</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              已为全球1000+企业提供优质不锈钢管产品和服务
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {cases.map((caseItem, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={caseItem.image}
                    alt={caseItem.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs rounded-full">
                      {caseItem.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{caseItem.title}</h3>
                  <p className="text-slate-600 text-sm">{caseItem.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">联系我们</h2>
              <p className="text-slate-600 mb-8">
                专业团队为您提供一对一服务，期待与您的合作
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">公司地址</h4>
                    <p className="text-slate-600">广东省佛山市顺德区陈村不锈钢市场</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">联系电话</h4>
                    <p className="text-slate-600">400-888-6688</p>
                    <p className="text-slate-500 text-sm">全国统一服务热线</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">电子邮箱</h4>
                    <p className="text-slate-600">sales@jiayubxg.com</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">在线询价</h3>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="您的姓名" className="h-12" />
                  </div>
                  <div>
                    <Input placeholder="联系电话" className="h-12" />
                  </div>
                  <div>
                    <Input placeholder="所需产品规格" className="h-12" />
                  </div>
                  <div>
                    <Textarea placeholder="详细需求（材质、规格、数量等）" className="min-h-[100px]" />
                  </div>
                  <Link href="/contact">
                    <Button className="w-full h-12 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                      提交询价
                    </Button>
                  </Link>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
