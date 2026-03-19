'use client';

import React, { useRef } from 'react';
import { useGsapAnimations } from '@/hooks/useGsapAnimations';
import { RefreshCw, Zap, LineChart } from 'lucide-react';

const FEATURES = [
  {
    title: 'Báo cáo Tự động & Phân tích Dự báo',
    description: 'Tự động lập báo cáo lợi nhuận và dùng AI dự báo xu hướng bán hàng mà không cần động đến một file Excel nào.',
    icon: <LineChart className="size-8 text-primary" />,
  },
  {
    title: 'Quản lý Đơn hàng Đa kênh',
    description: 'Đồng bộ và quản lý tập trung mọi đơn hàng từ Website, Shopee, Lazada và Facebook trên một bảng điều khiển duy nhất.',
    icon: <RefreshCw className="size-8 text-primary" />,
  },
  {
    title: 'Tự động hóa Chăm sóc Sau mua',
    description: 'Tự động xử lý khiếu nại, hoàn hàng và gửi email nhắc nhở. AI chủ động khôi phục giỏ hàng bị bỏ quên và đề xuất khuyến mãi cá nhân hóa.',
    icon: <Zap className="size-8 text-primary" />,
  },
];

export function FeaturesList() {
  const container = useRef<HTMLDivElement>(null);

  useGsapAnimations((gsapContext, isReducedMotion) => {
    if (!container.current) return;
    const { gsap } = gsapContext;

    // Header animation
    gsap.fromTo('.section-header', {
      y: isReducedMotion ? 0 : 50,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.section-header',
        start: 'top 80%',
      }
    });

    // Cards staggered animation
    gsap.fromTo('.feature-card', {
      y: isReducedMotion ? 0 : 100,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.feature-grid',
        start: 'top 75%',
      }
    });
  });

  return (
    <section ref={container} className="w-full py-24 bg-transparent text-slate-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 section-header opacity-0">
          <h2 className="text-4xl font-bold mb-4 text-white">Hệ sinh thái Jarvis AI ERP</h2>
          <p className="text-lg text-slate-400">Mọi thứ bạn cần để tối ưu và vận hành doanh nghiệp ở quy mô lớn.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 feature-grid">
          {FEATURES.map((feature, index) => (
            <div key={index} className="flex flex-col items-start feature-card w-full opacity-0 p-8 rounded-3xl bg-slate-900/50 border border-white/10 backdrop-blur-sm">
              <div className="text-4xl mb-6 bg-primary/10 p-4 rounded-xl">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
