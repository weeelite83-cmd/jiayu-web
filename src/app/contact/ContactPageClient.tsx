'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
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
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Locale } from '@/i18n/config';

interface ContactPageClientProps {
  locale: Locale;
}

export default function ContactPageClient({ locale }: ContactPageClientProps) {
  const isZh = locale === 'zh';
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
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

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
      badge: isZh ? '联系我们' : 'Contact Us',
      title: isZh ? '期待与您的' : 'Looking Forward to',
      subtitle: isZh ? '合作' : 'Your Cooperation',
      description: isZh 
        ? '专业团队为您提供一对一服务，无论是产品咨询、技术支持还是商务合作，我们都将竭诚为您服务'
        : 'Our professional team provides one-on-one service for product consultation, technical support, or business cooperation.',
    },
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: isZh ? '公司地址' : 'Company Address',
      content: isZh ? '广东省佛山市顺德区陈村不锈钢市场A区88号' : 'Area A, Block 88, Chencun Stainless Steel Market, Shunde District, Foshan, Guangdong, China',
      subContent: isZh ? '邮编：528300' : 'Postal Code: 528300',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: isZh ? '联系电话' : 'Phone Number',
      content: '400-888-6688',
      subContent: isZh ? '全国统一服务热线' : 'National Service Hotline',
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: isZh ? '电子邮箱' : 'Email',
      content: 'sales@jiayubxg.com',
      subContent: isZh ? '商务合作咨询' : 'Business Cooperation',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: isZh ? '营业时间' : 'Business Hours',
      content: isZh ? '周一至周六 8:00-18:00' : 'Monday to Saturday 8:00-18:00',
      subContent: isZh ? '周日休息' : 'Closed on Sunday',
    },
  ];

  const departments = [
    {
      icon: <Factory className="w-6 h-6" />,
      title: isZh ? '销售部' : 'Sales Department',
      phone: '0757-2388-8888',
      email: 'sales@jiayubxg.com',
      wechat: 'jiayu_sales',
      image: 'https://coze-coding-project.tos.coze.site/coze_storage_7618776839309328426/image/generate_image_07033f94-65d4-474e-a78d-86dbe7413da7.jpeg?sign=1805431439-25ed60b79c-0-43479fed9d7f8510ee161a7844dc96bac80da790569213b5d21b1d979f2bc21f',
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: isZh ? '外贸部' : 'Export Department',
      phone: '0757-2388-8889',
      email: 'export@jiayubxg.com',
      wechat: 'jiayu_export',
      image: 'https://coze-coding-project.tos.coze.site/coze_storage_7618776839309328426/image/generate_image_07033f94-65d4-474e-a78d-86dbe7413da7.jpeg?sign=1805431439-25ed60b79c-0-43479fed9d7f8510ee161a7844dc96bac80da790569213b5d21b1d979f2bc21f',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: isZh ? '客服部' : 'Customer Service',
      phone: '400-888-6688',
      email: 'service@jiayubxg.com',
      wechat: 'jiayu_service',
      image: 'https://coze-coding-project.tos.coze.site/coze_storage_7618776839309328426/image/generate_image_4a366e24-53db-4eb7-83da-e8d804477667.jpeg?sign=1805431442-a25598d64b-0-1ada9d87995ae03d959281f4214ec8ad138bcd5e964dca20f946e87ba60ced79',
    },
  ];

  const faqs = [
    {
      question: isZh ? '最小起订量是多少？' : 'What is the minimum order quantity?',
      answer: isZh ? '常规产品最小起订量为1吨，特殊规格可根据实际情况协商。' : 'The minimum order for regular products is 1 ton. Special specifications can be negotiated.',
    },
    {
      question: isZh ? '交货周期需要多久？' : 'How long is the delivery cycle?',
      answer: isZh ? '常规产品7-15天交货，特殊规格产品15-30天交货，具体以订单确认后为准。' : 'Regular products: 7-15 days. Special specifications: 15-30 days. Specific time confirmed after order.',
    },
    {
      question: isZh ? '是否提供样品？' : 'Do you provide samples?',
      answer: isZh ? '是的，我们可以提供样品供客户检测，样品费用和运费具体协商。' : 'Yes, we can provide samples for testing. Sample fees and shipping costs are negotiable.',
    },
    {
      question: isZh ? '产品有哪些认证？' : 'What certifications do your products have?',
      answer: isZh ? '产品通过ISO9001、ISO14001、CE、API等多项国际认证，确保品质。' : 'Products are certified with ISO9001, ISO14001, CE, API and other international certifications.',
    },
    {
      question: isZh ? '是否支持定制生产？' : 'Do you support custom production?',
      answer: isZh ? '是的，我们拥有专业的研发团队，可根据客户需求定制特殊规格和材质的产品。' : 'Yes, we have a professional R&D team that can customize products with special specifications.',
    },
    {
      question: isZh ? '付款方式有哪些？' : 'What payment methods are available?',
      answer: isZh ? '支持T/T、L/C、D/P等多种付款方式，具体可在合同中约定。' : 'We support T/T, L/C, D/P and other payment methods. Specific terms can be agreed in the contract.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <Navbar locale={locale} translations={translations} />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://coze-coding-project.tos.coze.site/coze_storage_7618776839309328426/image/generate_image_c6667f74-528f-40e7-a1dd-d9d66b6dc54e.jpeg?sign=1805431440-70c1911255-0-38878646e7bbc8ff5687c446098b00e04d286819473a97039acb06725cb6ea48"
            alt="Company"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-6">
              <MessageCircle className="w-4 h-4 mr-2" />
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

      {/* Contact Form & Departments */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">{isZh ? '在线询价' : 'Online Quote'}</h2>
              <p className="text-slate-600 mb-8">
                {isZh ? '请填写以下表单，我们将在24小时内与您联系' : 'Please fill out the form below, and we will contact you within 24 hours.'}
              </p>

              {submitted ? (
                <div className="bg-green-50 rounded-xl p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-green-800 mb-2">{isZh ? '提交成功！' : 'Submitted Successfully!'}</h3>
                  <p className="text-green-600">{isZh ? '我们已收到您的询价信息，将尽快与您联系。' : 'We have received your quote request and will contact you soon.'}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">{isZh ? '您的姓名 *' : 'Your Name *'}</Label>
                      <Input
                        id="name"
                        className="h-12 mt-1"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">{isZh ? '公司名称' : 'Company Name'}</Label>
                      <Input
                        id="company"
                        className="h-12 mt-1"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">{isZh ? '联系电话 *' : 'Phone Number *'}</Label>
                      <Input
                        id="phone"
                        className="h-12 mt-1"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">{isZh ? '电子邮箱 *' : 'Email *'}</Label>
                      <Input
                        id="email"
                        type="email"
                        className="h-12 mt-1"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="product">{isZh ? '意向产品' : 'Product Interest'}</Label>
                      <Input
                        id="product"
                        className="h-12 mt-1"
                        value={formData.product}
                        onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                        placeholder={isZh ? '请选择产品' : 'Please select product'}
                      />
                    </div>
                    <div>
                      <Label htmlFor="quantity">{isZh ? '预计数量' : 'Estimated Quantity'}</Label>
                      <Input
                        id="quantity"
                        className="h-12 mt-1"
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="message">{isZh ? '留言内容' : 'Message'}</Label>
                    <Textarea
                      id="message"
                      className="mt-1"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                  >
                    {isZh ? '提交询价' : 'Submit Quote Request'}
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              )}
            </div>

            {/* Departments */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">{isZh ? '部门联系' : 'Department Contacts'}</h2>
              <div className="space-y-6">
                {departments.map((dept, index) => (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                          <Image
                            src={dept.image}
                            alt={dept.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg flex items-center justify-center text-blue-600">
                              {dept.icon}
                            </div>
                            <h3 className="font-bold text-slate-900">{dept.title}</h3>
                          </div>
                          <div className="space-y-1 text-sm text-slate-600">
                            <p className="flex items-center gap-2">
                              <Phone className="w-4 h-4" />
                              {dept.phone}
                            </p>
                            <p className="flex items-center gap-2">
                              <Mail className="w-4 h-4" />
                              {dept.email}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* FAQ */}
              <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">{isZh ? '常见问题' : 'FAQ'}</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Card key={index} className="border-0 shadow-md">
                    <CardContent className="p-4">
                      <h3 className="font-bold text-slate-900 mb-2">{faq.question}</h3>
                      <p className="text-slate-600 text-sm">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer locale={locale} />
    </div>
  );
}
