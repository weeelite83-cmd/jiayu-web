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

export const metadata: Metadata = {
  title: '关于我们',
  description: '嘉钰不锈钢是一家集不锈钢管研发、生产、销售于一体的现代化企业，拥有20年行业经验，ISO9001质量管理体系认证。',
};

const timeline = [
  {
    year: '2004',
    title: '公司成立',
    description: '嘉钰不锈钢在佛山成立，开始不锈钢管生产',
  },
  {
    year: '2008',
    title: '规模扩张',
    description: '扩建厂房，引进先进生产线，年产能突破10000吨',
  },
  {
    year: '2012',
    title: '认证升级',
    description: '通过ISO9001质量管理体系认证，产品质量迈上新台阶',
  },
  {
    year: '2016',
    title: '国际市场',
    description: '产品出口东南亚、中东、欧洲等30多个国家',
  },
  {
    year: '2020',
    title: '技术创新',
    description: '建立研发中心，开发特种不锈钢管产品线',
  },
  {
    year: '2024',
    title: '行业领先',
    description: '年产能达12000吨，服务客户超1000家',
  },
];

const values = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: '品质为先',
    description: '严格把控每一道生产工序，确保产品质量',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: '客户至上',
    description: '以客户需求为导向，提供定制化解决方案',
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: '持续创新',
    description: '不断研发新产品，引领行业发展',
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: '诚信经营',
    description: '诚信为本，建立长期合作关系',
  },
];

const certifications = [
  'ISO9001质量管理体系认证',
  'ISO14001环境管理体系认证',
  'OHSAS18001职业健康安全认证',
  '特种设备制造许可证',
  '欧盟CE认证',
  '美国API认证',
];

const team = [
  {
    name: '张明',
    position: '总经理',
    description: '20年不锈钢行业经验',
  },
  {
    name: '李华',
    position: '技术总监',
    description: '高级工程师，负责产品研发',
  },
  {
    name: '王强',
    position: '生产总监',
    description: '精益生产管理专家',
  },
  {
    name: '刘芳',
    position: '销售总监',
    description: '15年市场拓展经验',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <Navbar />
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://coze-coding-project.tos.coze.site/coze_storage_7618776839309328426/image/generate_image_61923002-2101-4ef8-8b03-9ebb1ec67910.jpeg?sign=1805509367-fd8722b4d4-0-a674b5071c899953144717bd232707aee4c6f16a09117c72694a25836fa35cf1"
            alt="嘉钰不锈钢工厂全景"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-6">
              <Factory className="w-4 h-4 mr-2" />
              关于嘉钰不锈钢
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              专注品质
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> 铸就品牌</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              嘉钰不锈钢是一家集研发、生产、销售于一体的现代化企业，致力于为全球客户提供高品质的不锈钢管产品
            </p>
          </div>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">公司简介</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                嘉钰不锈钢成立于2004年，总部位于中国不锈钢产业基地——广东省佛山市。公司占地面积50000平方米，拥有员工300余人，是一家专业从事不锈钢管研发、生产、销售的现代化企业。
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                公司引进了国内外先进的不锈钢管生产线和检测设备，产品涵盖不锈钢无缝管、不锈钢焊管、不锈钢装饰管、不锈钢管件等多个系列，广泛应用于石油化工、食品卫生、医疗器械、建筑装饰、汽车配件等领域。
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-slate-700">ISO9001认证企业</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-slate-700">高新技术企业</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-slate-700">出口30+国家</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-slate-700">年产能12000吨</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://coze-coding-project.tos.coze.site/coze_storage_7618776839309328426/image/generate_image_61923002-2101-4ef8-8b03-9ebb1ec67910.jpeg?sign=1805509367-fd8722b4d4-0-a674b5071c899953144717bd232707aee4c6f16a09117c72694a25836fa35cf1"
                  alt="嘉钰不锈钢工厂全景"
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
              <div className="text-5xl font-bold mb-2">20</div>
              <div className="text-blue-100">年行业经验</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">1000+</div>
              <div className="text-blue-100">服务客户</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">12000</div>
              <div className="text-blue-100">吨年产能</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-blue-100">出口国家</div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">发展历程</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              二十年砥砺前行，见证嘉钰不锈钢的成长与蜕变
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <div className="bg-white rounded-xl shadow-lg p-6">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">企业文化</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              我们的核心价值观指引着每一位嘉钰人不断前行
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-blue-600">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">资质荣誉</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              各项权威认证，品质保证
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 flex items-center space-x-4"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <span className="font-medium text-slate-900">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">管理团队</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              专业、敬业的管理团队，带领企业稳健发展
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                  <div className="text-blue-600 font-medium mb-2">{member.position}</div>
                  <p className="text-slate-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">期待与您的合作</h2>
          <p className="text-blue-100 mb-8">
            专业团队为您提供一对一服务，共同创造价值
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              联系我们
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
