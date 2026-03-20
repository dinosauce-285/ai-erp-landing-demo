'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { useGsapAnimations } from '@/hooks/useGsapAnimations';
import { Hero3DModel } from './Hero3DModel';

export function HeroSection() {
  const container = useRef<HTMLDivElement>(null);
  
  useGsapAnimations((gsapContext, isReducedMotion) => {
    if (!container.current) return;
    
    const { gsap } = gsapContext;
    const tl = gsap.timeline();
    
    // Content entrance
    tl.fromTo('.hero-content > *', {
      y: isReducedMotion ? 0 : 30,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
    });
    
    // Nodes animation (Data Flow/ERP representation)
    if (!isReducedMotion) {
      tl.fromTo('.erp-node', {
        opacity: 0,
      }, {
        opacity: 1,
        duration: 2,
        ease: 'power2.inOut',
      }, '-=0.4');
    } else {
      // Reduced motion: just fade in nodes
      tl.to('.erp-node', {
        opacity: 1,
        duration: 1,
      }, '-=0.4');
    }
  });

  return (
    <section ref={container} className="relative w-full min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-transparent px-4 py-32 text-center">
      {/* Background ERP Node 3D Visualization */}
      <div className="absolute inset-0 z-0 pointer-events-none erp-node opacity-0 h-full">
        <Hero3DModel />
      </div>

      <div className="z-10 max-w-4xl mx-auto flex flex-col items-center gap-6 hero-content relative">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white opacity-0 drop-shadow-lg text-center">
          ERP Thông Minh<br />cho Thương Mại Điện Tử
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed opacity-0 text-center">
          Nâng tầm quy mô doanh nghiệp. Tối ưu trải nghiệm tìm kiếm, tự động điều phối vận chuyển và quản lý đơn hàng đa kênh tập trung bằng trí tuệ nhân tạo.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8 opacity-0">
          <Link href={process.env.NEXT_PUBLIC_SSO_AUTH_PAGE || '/sign-up'} className="bg-white text-slate-900 border border-transparent hover:bg-slate-200 px-8 py-3.5 rounded-full font-bold transition-transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.4)] text-lg">
            Bắt đầu ngay
          </Link>
          <Link href={process.env.NEXT_PUBLIC_SSO_AUTH_PAGE || '/sign-in'} className="bg-white/10 text-white border border-white/20 hover:bg-white/20 px-8 py-3.5 rounded-full font-bold backdrop-blur-md transition-colors text-lg">
            Đăng nhập
          </Link>
        </div>
      </div>
    </section>
  );
}
