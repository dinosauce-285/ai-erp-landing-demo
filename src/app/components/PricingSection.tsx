'use client';

import React, { useRef } from 'react';
import { useGsapAnimations } from '@/hooks/useGsapAnimations';
import { Check } from 'lucide-react';
import Link from 'next/link';

const PRICING_PLANS = [
  {
    name: 'Khởi đầu',
    price: 'Miễn phí',
    period: 'Mãi mãi',
    description: 'Dành cho các cửa hàng mới bắt đầu hành trình thương mại điện tử.',
    features: [
      'Tối đa 500 sản phẩm',
      'Quản lý đơn hàng cơ bản',
      'Tích hợp 1 kênh bán hàng',
      'Hỗ trợ qua Email'
    ],
    cta: 'Bắt đầu ngay',
    href: '/sign-up',
    isPopular: false,
  },
  {
    name: 'Tăng trưởng',
    price: '990.000',
    period: 'VND / tháng',
    description: 'Đầy đủ tính năng tự động hóa và AI cho doanh nghiệp đang phát triển.',
    features: [
      'Sản phẩm không giới hạn',
      'Quản lý đơn hàng đa kênh',
      'Sử dụng AI Studio (500 lượt/tháng)',
      'Dự báo số liệu & Báo cáo P&L',
      'Hỗ trợ ưu tiên 24/7'
    ],
    cta: 'Dùng thử 14 ngày',
    href: '/sign-up',
    isPopular: true,
  },
  {
    name: 'Doanh nghiệp',
    price: 'Liên hệ',
    period: 'Tùy chỉnh',
    description: 'Giải pháp cấu hình riêng biệt với hiệu suất tối đa cho tập đoàn.',
    features: [
      'Máy chủ riêng biệt (Dedicated)',
      'Tích hợp API không giới hạn',
      'Sử dụng AI Studio không giới hạn',
      'Điều phối kho bãi thông minh',
      'Chiến lược gia quản lý tài khoản riêng'
    ],
    cta: 'Liên hệ tư vấn',
    href: '/contact-sales',
    isPopular: false,
  },
];

export function PricingSection() {
  const container = useRef<HTMLDivElement>(null);

  useGsapAnimations((gsapContext, isReduced) => {
    if (!container.current) return;
    const { gsap } = gsapContext;

    gsap.fromTo('.pricing-header', {
      y: isReduced ? 0 : 30,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
      }
    });

    gsap.fromTo('.pricing-card', {
      y: isReduced ? 0 : 50,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: 'back.out(1.2)',
      scrollTrigger: {
        trigger: '.pricing-grid',
        start: 'top 75%',
      }
    });
  });

  return (
    <section ref={container} className="w-full py-24 bg-transparent text-slate-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 pricing-header opacity-0">
          <h2 className="text-4xl font-bold mb-4 text-white">Bảng giá linh hoạt cho mọi quy mô</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">Chọn gói phù hợp để bắt đầu hành trình tự động hoá quy trình quản trị doanh nghiệp của bạn.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pricing-grid items-center">
          {PRICING_PLANS.map((plan, i) => (
            <div 
              key={i} 
              className={`pricing-card opacity-0 rounded-[2rem] p-8 relative flex flex-col h-full bg-slate-900 border ${plan.isPopular ? 'border-primary/50 shadow-[0_0_30px_rgba(37,99,235,0.15)] md:-translate-y-4' : 'border-white/10'} hover:border-primary/30 transition-colors duration-300`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  Phổ biến nhất
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-slate-300 mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-slate-400">{plan.period}</span>
                </div>
                <p className="text-slate-400 min-h-[48px]">{plan.description}</p>
              </div>

              <div className="flex-1">
                <ul className="flex flex-col gap-4 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-slate-300">
                      <div className="mt-1 bg-primary/20 p-1 rounded-full text-primary">
                        <Check className="size-3" strokeWidth={3} />
                      </div>
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link 
                href={plan.href} 
                className={`w-full py-4 rounded-xl font-bold text-center transition-all ${plan.isPopular ? 'bg-white text-slate-900 hover:bg-slate-200 hover:scale-105' : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'}`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
