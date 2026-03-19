'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Image from 'next/image';
import {
  Menu,
  X,
  Factory,
  Award,
  Target,
  Users,
  Globe,
  Shield,
  Zap,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle,
  Layers,
  Cog,
  Droplets,
} from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: '首页', href: '#hero' },
    { name: '关于我们', href: '#about' },
    { name: '产品中心', href: '#products' },
    { name: '应用领域', href: '#applications' },
    { name: '联系我们', href: '#contact' },
  ];

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
    {
      title: '石油化工',
      icon: <Factory className="w-6 h-6" />,
      description: '耐腐蚀、耐高压管道系统',
    },
    {
      title: '食品卫生',
      icon: <CheckCircle className="w-6 h-6" />,
      description: '符合食品级标准，卫生安全',
    },
    {
      title: '医疗器械',
      icon: <Shield className="w-6 h-6" />,
      description: '医疗设备、手术器械专用管材',
    },
    {
      title: '建筑装饰',
      icon: <Globe className="w-6 h-6" />,
      description: '栏杆、门窗、装饰构件',
    },
    {
      title: '汽车配件',
      icon: <Cog className="w-6 h-6" />,
      description: '排气系统、结构件等',
    },
    {
      title: '换热器',
      icon: <Droplets className="w-6 h-6" />,
      description: '高效换热管，耐腐蚀传热',
    },
  ];

  const advantages = [
    {
      title: '耐腐蚀',
      description: '优异的抗腐蚀性能，适应多种恶劣环境',
    },
    {
      title: '高强度',
      description: '机械性能优越，承载能力强',
    },
    {
      title: '寿命长',
      description: '使用寿命长，维护成本低',
    },
    {
      title: '易清洁',
      description: '表面光滑，易于清洁和维护',
    },
    {
      title: '环保可回收',
      description: '100%可回收，绿色环保',
    },
    {
      title: '国际标准',
      description: '符合GB、ASTM、JIS等国际标准',
    },
  ];

  const cases = [
    {
      title: '大型石化企业',
      category: '石油化工',
      description: '为中石油某分公司提供高压无缝管，年供应量达5000吨',
    },
    {
      title: '食品级管道系统',
      category: '食品卫生',
      description: '为知名乳制品企业供应食品级不锈钢管，确保生产安全',
    },
    {
      title: '医疗器械配套',
      category: '医疗领域',
      description: '为医疗器械厂商提供精密不锈钢管，品质达到医疗级标准',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                <Factory className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                嘉钰不锈钢
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
                >
                  {item.name}
                </a>
              ))}
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                获取报价
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200">
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-slate-600 hover:text-blue-600 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                获取报价
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section 
        id="hero" 
        className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://coze-coding-project.tos.coze.site/coze_storage_7618776839309328426/image/generate_image_e96710a8-e90a-4481-a19b-08f6b671ef7c.jpeg?sign=1805427034-ab19cfd1f8-0-6a5d97557e93df87013968b7933352d3782afebbc43fcf6ff3a55f1fece78e3b"
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
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-base">
                立即咨询
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-base">
                产品目录
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { value: '20年', label: '行业经验' },
              { value: '1000+', label: '合作客户' },
              { value: '50000吨', label: '年产能' },
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
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                关于我们
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                嘉钰不锈钢是一家集不锈钢管研发、生产、销售于一体的现代化企业，拥有先进的不锈钢管生产线和完善的检测设备。公司位于中国不锈钢产业基地，地理位置优越，交通便利。
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                产品严格按照中国GB、美国ASTM、日本JIS等国际标准组织生产，广泛应用于石油化工、食品卫生、医疗器械、建筑装饰、汽车配件等领域。
              </p>
              <div className="grid grid-cols-2 gap-4">
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
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://coze-coding-project.tos.coze.site/coze_storage_7618776839309328426/image/generate_image_8bdf882b-89bb-4b55-b8c6-b6e8bdbc78c4.jpeg?sign=1805427035-38d8d73ce3-0-327cf2a481d2d099cbebcccac4d4d4e6785bf871faa34805aba2c72c7f590858"
                  alt="现代化生产工厂"
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
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://coze-coding-project.tos.coze.site/coze_storage_7618776839309328426/image/generate_image_97d25d4b-4d91-4c50-b79a-8e5c2f8678fb.jpeg?sign=1805427031-c59d2e58b6-0-b633540b4876d0ba3e0f2f68a1c071ab0afb9944d173f08f836ffd3fb80d8499"
            alt="产品背景"
            fill
            className="object-cover opacity-10"
          />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              产品中心
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              全系列不锈钢管产品，涵盖工业、装饰、流体输送等多个应用场景
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/90 backdrop-blur"
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl flex items-center justify-center mb-4 text-blue-600">
                    {product.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {product.title}
                  </h3>
                  <p className="text-slate-600">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section id="applications" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              应用领域
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              产品广泛应用于多个行业领域，满足不同客户的多样化需求
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {applications.map((app, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-4 text-white">
                  {app.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {app.title}
                </h3>
                <p className="text-slate-600 text-sm">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              合作案例
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              已为全球1000+企业提供优质不锈钢管产品和服务
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {cases.map((caseItem, index) => (
              <Card
                key={index}
                className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src="https://coze-coding-project.tos.coze.site/coze_storage_7618776839309328426/image/generate_image_97d25d4b-4d91-4c50-b79a-8e5c2f8678fb.jpeg?sign=1805427031-c59d2e58b6-0-b633540b4876d0ba3e0f2f68a1c071ab0afb9944d173f08f836ffd3fb80d8499"
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
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {caseItem.title}
                  </h3>
                  <p className="text-slate-600 mb-4">{caseItem.description}</p>
                  <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0">
                    查看详情
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
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
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                联系我们
              </h2>
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
                    <p className="text-slate-600">
                      广东省佛山市顺德区陈村不锈钢市场
                    </p>
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
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  在线询价
                </h3>
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
                    <Textarea placeholder="详细需求（材质、规格、数量等）" rows={4} />
                  </div>
                  <Button className="w-full h-12 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                    提交询价
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                  <Factory className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-xl">嘉钰不锈钢</span>
              </div>
              <p className="text-slate-400 text-sm">
                专业不锈钢管生产厂家，品质值得信赖
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">快速链接</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="hover:text-white transition-colors">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">产品分类</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>不锈钢无缝管</li>
                <li>不锈钢焊管</li>
                <li>不锈钢装饰管</li>
                <li>不锈钢管件</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">联系方式</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>电话：400-888-6688</li>
                <li>邮箱：sales@jiayubxg.com</li>
                <li>地址：广东佛山顺德</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 text-sm">
            <p>© 2024 嘉钰不锈钢 版权所有 | 粤ICP备XXXXXXXX号</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
