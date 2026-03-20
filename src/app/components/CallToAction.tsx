'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { useGsapAnimations } from '@/hooks/useGsapAnimations';

export function CallToAction() {
  const container = useRef<HTMLDivElement>(null);

  useGsapAnimations(({ gsap }) => {
    if (!container.current) return;

    gsap.fromTo('.cta-content', {
      scale: 0.9,
      opacity: 0,
    }, {
      scale: 1,
      opacity: 1,
      duration: 1.2,
      ease: 'back.out(1.5)',
      scrollTrigger: {
        trigger: container.current,
        start: 'top 75%',
      }
    });
    
    // Ambient glow pulse
    gsap.to('.cta-glow', {
      opacity: 0.8,
      scale: 1.1,
      duration: 3,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
      stagger: 1.5,
    });
  });

  return (
    <section ref={container} className="relative w-full pt-12 pb-16 bg-transparent">
      {/* Abstract Glowing Backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/30 rounded-full blur-[100px] cta-glow pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#0078d4]/20 rounded-full blur-[120px] cta-glow pointer-events-none" />

      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center cta-content opacity-0">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">Sẵn sàng nâng tầm doanh nghiệp của bạn?</h2>
        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          Bước vào kỷ nguyên mới của quản trị kinh doanh. Triển khai nền tảng AI ERP của riêng bạn chỉ trong vài phút.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <Link href={process.env.NEXT_PUBLIC_SSO_AUTH_PAGE || '/sign-up'} className="bg-white text-slate-900 hover:bg-slate-200 px-8 py-4 rounded-full font-bold transition-transform hover:scale-105 shadow-[0_0_25px_rgba(255,255,255,0.4)] text-lg inline-block">
            Bắt đầu dùng thử miễn phí
          </Link>
          <Link href="https://example.com/" className="px-8 py-4 rounded-full bg-transparent border border-white/20 text-white font-bold text-lg hover:bg-white/10 transition-colors inline-block">
            Liên hệ Tư vấn
          </Link>
        </div>
      </div>
    </section>
  );
}
