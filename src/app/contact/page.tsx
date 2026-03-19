'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
  Factory,
  Globe,
  Users,
} from 'lucide-react';

const contactInfo = [
  {
    icon: <MapPin className="w-6 h-6" />,
    title: '公司地址',
    content: '广东省佛山市顺德区陈村不锈钢市场A区88号',
    subContent: '邮编：528300',
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: '联系电话',
    content: '400-888-6688',
    subContent: '全国统一服务热线',
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: '电子邮箱',
    content: 'sales@jiayubxg.com',
    subContent: '商务合作咨询',
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: '营业时间',
    content: '周一至周六 8:00-18:00',
    subContent: '周日休息',
  },
];

const departments = [
  {
    icon: <Factory className="w-6 h-6" />,
    title: '销售部',
    phone: '0757-2388-8888',
    email: 'sales@jiayubxg.com',
    wechat: 'jiayu_sales',
    image: 'https://coze-coding-project.tos.coze.site/coze_storage_7618776839309328426/image/generate_image_07033f94-65d4-474e-a78d-86dbe7413da7.jpeg?sign=1805431439-25ed60b79c-0-43479fed9d7f8510ee161a7844dc96bac80da790569213b5d21b1d979f2bc21f',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: '外贸部',
    phone: '0757-2388-8889',
    email: 'export@jiayubxg.com',
    wechat: 'jiayu_export',
    image: 'https://coze-coding-project.tos.coze.site/coze_storage_7618776839309328426/image/generate_image_07033f94-65d4-474e-a78d-86dbe7413da7.jpeg?sign=1805431439-25ed60b79c-0-43479fed9d7f8510ee161a7844dc96bac80da790569213b5d21b1d979f2bc21f',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: '客服部',
    phone: '400-888-6688',
    email: 'service@jiayubxg.com',
    wechat: 'jiayu_service',
    image: 'https://coze-coding-project.tos.coze.site/coze_storage_7618776839309328426/image/generate_image_4a366e24-53db-4eb7-83da-e8d804477667.jpeg?sign=1805431442-a25598d64b-0-1ada9d87995ae03d959281f4214ec8ad138bcd5e964dca20f946e87ba60ced79',
  },
];

const faqs = [
  {
    question: '最小起订量是多少？',
    answer: '常规产品最小起订量为1吨，特殊规格可根据实际情况协商。',
  },
  {
    question: '交货周期需要多久？',
    answer: '常规产品7-15天交货，特殊规格产品15-30天交货，具体以订单确认后为准。',
  },
  {
    question: '是否提供样品？',
    answer: '是的，我们可以提供样品供客户检测，样品费用和运费具体协商。',
  },
  {
    question: '产品有哪些认证？',
    answer: '产品通过ISO9001、ISO14001、CE、API等多项国际认证，确保品质。',
  },
  {
    question: '是否支持定制生产？',
    answer: '是的，我们拥有专业的研发团队，可根据客户需求定制特殊规格和材质的产品。',
  },
  {
    question: '付款方式有哪些？',
    answer: '支持T/T、L/C、D/P等多种付款方式，具体可在合同中约定。',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    product: '',
    quantity: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <Navbar />
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://coze-coding-project.tos.coze.site/coze_storage_7618776839309328426/image/generate_image_c6667f74-528f-40e7-a1dd-d9d66b6dc54e.jpeg?sign=1805431440-70c1911255-0-38878646e7bbc8ff5687c446098b00e04d286819473a97039acb06725cb6ea48"
            alt="公司外观"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-6">
              <MessageCircle className="w-4 h-4 mr-2" />
              联系我们
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              期待与您的
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> 合作</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              专业团队为您提供一对一服务，无论是产品咨询、技术支持还是商务合作，我们都将竭诚为您服务
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl flex items-center justify-center mx-auto mb-4 text-blue-600">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{info.title}</h3>
                  <p className="text-slate-900 font-medium mb-1">{info.content}</p>
                  <p className="text-slate-500 text-sm">{info.subContent}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">在线询价</h2>
              <p className="text-slate-600 mb-8">
                请填写以下表单，我们将在24小时内与您联系
              </p>

              {submitted ? (
                <div className="bg-green-50 rounded-xl p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-green-800 mb-2">提交成功！</h3>
                  <p className="text-green-600">我们已收到您的询价信息，将尽快与您联系。</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">您的姓名 *</Label>
                      <Input
                        id="name"
                        className="h-12 mt-1"
                        placeholder="请输入姓名"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">公司名称</Label>
                      <Input
                        id="company"
                        className="h-12 mt-1"
                        placeholder="请输入公司名称"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">联系电话 *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        className="h-12 mt-1"
                        placeholder="请输入联系电话"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">电子邮箱</Label>
                      <Input
                        id="email"
                        type="email"
                        className="h-12 mt-1"
                        placeholder="请输入邮箱地址"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="product">所需产品</Label>
                      <Input
                        id="product"
                        className="h-12 mt-1"
                        placeholder="如：不锈钢无缝管"
                        value={formData.product}
                        onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="quantity">需求数量</Label>
                      <Input
                        id="quantity"
                        className="h-12 mt-1"
                        placeholder="如：100吨"
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="message">详细需求</Label>
                    <Textarea
                      id="message"
                      className="mt-1"
                      placeholder="请详细描述您的需求（材质、规格、用途等）"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                  >
                    提交询价
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              )}
            </div>

            {/* Map */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">公司位置</h2>
              <p className="text-slate-600 mb-8">
                欢迎来厂参观考察，我们将安排专车接送
              </p>
              <div className="aspect-square rounded-2xl overflow-hidden relative">
                <Image
                  src="https://coze-coding-project.tos.coze.site/coze_storage_7618776839309328426/image/generate_image_4a366e24-53db-4eb7-83da-e8d804477667.jpeg?sign=1805431442-a25598d64b-0-1ada9d87995ae03d959281f4214ec8ad138bcd5e964dca20f946e87ba60ced79"
                  alt="客服团队"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <MapPin className="w-12 h-12 text-white mb-4" />
                  <h3 className="text-xl font-bold mb-2">嘉钰不锈钢</h3>
                  <p className="text-white/80 mb-4">广东省佛山市顺德区陈村不锈钢市场</p>
                  <Button variant="outline" className="text-white border-white hover:bg-white/20">
                    获取导航路线
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">各部门联系方式</h2>
            <p className="text-slate-600">根据您的需求，选择对应部门联系</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden">
                <div className="relative h-32">
                  <Image
                    src={dept.image}
                    alt={dept.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center space-x-3 text-white">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      {dept.icon}
                    </div>
                    <h3 className="text-xl font-bold">{dept.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-slate-600">
                      <Phone className="w-4 h-4" />
                      <span>{dept.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-slate-600">
                      <Mail className="w-4 h-4" />
                      <span>{dept.email}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-slate-600">
                      <MessageCircle className="w-4 h-4" />
                      <span>微信：{dept.wechat}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">常见问题</h2>
            <p className="text-slate-600">您可能想了解的问题</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{faq.question}</h3>
                  <p className="text-slate-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">需要更多帮助？</h2>
          <p className="text-blue-100 mb-8">
            拨打我们的服务热线，专业客服团队随时为您服务
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-3">
              <Phone className="w-8 h-8" />
              <span className="text-3xl font-bold">400-888-6688</span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
