'use client';

import React, { useRef } from 'react';
import { useGsapAnimations } from '@/hooks/useGsapAnimations';

const ERP_TRAITS = [
  'Đồng bộ Thời gian thực', 'Tự động hóa Vận hành', 'Sổ cái Thống nhất', 
  'Phân tích & Dự báo', 'Hỗ trợ Đa kênh', 'Bảo mật Quy trình', 
  'Mở rộng Linh hoạt', 'Dữ liệu Tập trung'
];

export function ClientLogos() {
  const container = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useGsapAnimations((gsapContext) => {
    const { gsap } = gsapContext;
    
    // Marquee continuous scroll
    if (marqueeRef.current) {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        repeat: -1,
        duration: 25,
        ease: 'linear',
      });
    }

    // Fade in on scroll
    gsap.fromTo(container.current, {
      opacity: 0,
      y: 30
    }, {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: container.current,
        start: 'top 90%',
      }
    });
  });

  return (
    <section ref={container} className="w-full py-12 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <p className="text-sm font-medium text-slate-400 mb-8 tracking-widest uppercase">Nền tảng kiến trúc lõi được tinh chỉnh riêng cho doanh nghiệp hiện đại</p>
        
        {/* Marquee Wrapper */}
        <div className="relative w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div ref={marqueeRef} className="flex whitespace-nowrap gap-16 md:gap-24 w-max px-8">
            {/* Double the list to create a seamless loop */}
            {[...ERP_TRAITS, ...ERP_TRAITS].map((trait, i) => (
              <div key={i} className="flex items-center justify-center">
                <span className="text-xl md:text-2xl font-bold text-slate-600 tracking-tighter mix-blend-screen hover:text-primary transition-colors cursor-default">
                  {trait}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
