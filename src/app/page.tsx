'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Menu,
  X,
  Rocket,
  Lightbulb,
  Target,
  Users,
  TrendingUp,
  Shield,
  Zap,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: '首页', href: '#hero' },
    { name: '关于我们', href: '#about' },
    { name: '服务', href: '#services' },
    { name: '案例', href: '#cases' },
    { name: '联系', href: '#contact' },
  ];

  const services = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: '数字化转型',
      description: '帮助企业实现数字化升级，提升运营效率',
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: '创新研发',
      description: '前沿技术研究与产品创新开发',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: '战略咨询',
      description: '提供专业的企业发展战略规划服务',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: '安全服务',
      description: '网络安全评估与数据保护解决方案',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: '数据分析',
      description: '大数据分析与商业智能决策支持',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: '系统集成',
      description: '企业级系统架构设计与集成服务',
    },
  ];

  const cases = [
    {
      title: '智慧城市解决方案',
      category: '数字化转型',
      description: '为某市政府打造智慧城市管理平台',
    },
    {
      title: '金融科技创新平台',
      category: '创新研发',
      description: '为金融机构构建数字化服务体系',
    },
    {
      title: '企业级数据分析平台',
      category: '数据分析',
      description: '助力企业实现数据驱动决策',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">TE</span>
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                TechEdge
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
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                立即咨询
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
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                立即咨询
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              引领数字化转型新时代
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              科技驱动未来
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                创新成就卓越
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              我们致力于为企业提供全方位的数字化解决方案，助力企业在数字经济时代实现跨越式发展
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-base">
                开始合作
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-base">
                了解更多
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { value: '500+', label: '服务客户' },
              { value: '98%', label: '客户满意度' },
              { value: '50+', label: '技术专家' },
              { value: '10年', label: '行业经验' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
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
                TechEdge是一家专注于企业数字化转型的科技公司，拥有超过10年的行业经验。我们的团队由资深技术专家和行业顾问组成，致力于为客户提供最优质的服务。
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                我们秉承"创新驱动、客户至上"的理念，已成功为500+企业提供了数字化解决方案，帮助客户实现业务增长和效率提升。
              </p>
              <div className="space-y-4">
                {[
                  { icon: <Users className="w-5 h-5" />, text: '专业团队，丰富经验' },
                  { icon: <Target className="w-5 h-5" />, text: '精准定位，定制方案' },
                  { icon: <Shield className="w-5 h-5" />, text: '安全可靠，品质保障' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center text-slate-700">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mr-4 text-blue-600">
                      {item.icon}
                    </div>
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                    <Rocket className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    科技赋能企业
                  </h3>
                  <p className="text-slate-600">
                    以技术创新为核心，推动企业数字化转型
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              我们的服务
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              提供全方位的数字化解决方案，满足企业不同阶段的发展需求
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur"
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex items-center justify-center mb-4 text-blue-600">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              成功案例
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              我们的解决方案已帮助众多企业实现数字化转型
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {cases.map((caseItem, index) => (
              <Card
                key={index}
                className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-blue-600 font-medium mb-2">
                    {caseItem.category}
                  </div>
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
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                联系我们
              </h2>
              <p className="text-slate-600 mb-8">
                期待与您的合作，共同开启数字化转型之旅
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">公司地址</h4>
                    <p className="text-slate-600">
                      北京市朝阳区科技园区A座1001
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">联系电话</h4>
                    <p className="text-slate-600">400-123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">电子邮箱</h4>
                    <p className="text-slate-600">contact@techedge.com</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  发送消息
                </h3>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="您的姓名" className="h-12" />
                  </div>
                  <div>
                    <Input placeholder="电子邮箱" type="email" className="h-12" />
                  </div>
                  <div>
                    <Input placeholder="联系电话" className="h-12" />
                  </div>
                  <div>
                    <Textarea placeholder="您的留言" rows={4} />
                  </div>
                  <Button className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    发送消息
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
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">TE</span>
                </div>
                <span className="font-bold text-xl">TechEdge</span>
              </div>
              <p className="text-slate-400 text-sm">
                引领企业数字化转型，共创科技未来
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
              <h4 className="font-bold mb-4">服务项目</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>数字化转型</li>
                <li>创新研发</li>
                <li>战略咨询</li>
                <li>安全服务</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">关注我们</h4>
              <div className="flex space-x-3">
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer">
                  <Users className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer">
                  <Mail className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 text-sm">
            <p>© 2024 TechEdge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
