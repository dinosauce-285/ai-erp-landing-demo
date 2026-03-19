'use client';

import React, { useRef } from 'react';
import { useGsapAnimations } from '@/hooks/useGsapAnimations';
import { Database, Network, ShieldCheck, Zap, ArrowRight } from 'lucide-react';

export function FeaturesGrid() {
  const container = useRef<HTMLDivElement>(null);

  useGsapAnimations((gsapContext, isReducedMotion) => {
    if (!container.current) return;
    const { gsap } = gsapContext;

    gsap.fromTo('.bento-header', {
      y: isReducedMotion ? 0 : 40,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      scrollTrigger: { trigger: '.bento-header', start: 'top 85%' }
    });

    gsap.fromTo('.bento-item', {
      scale: isReducedMotion ? 1 : 0.95,
      y: isReducedMotion ? 0 : 30,
      opacity: 0,
    }, {
      scale: 1,
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: 'back.out(1.2)',
      scrollTrigger: { trigger: '.bento-grid', start: 'top 80%' }
    });
  });

  return (
    <section ref={container} className="w-full py-24 bg-transparent text-slate-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 bento-header opacity-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">ERP Thương Mại Điện Tử Thế Hệ Mới</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Tự động hóa toàn diện quy trình vận hành, từ khâu tạo danh mục sản phẩm bằng AI đến tối ưu hoá chuỗi cung ứng và giao hàng.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[270px] bento-grid">
          {/* Main feature box spanning 2 columns */}
          <div className="bento-item opacity-0 md:col-span-2 md:row-span-2 relative overflow-hidden rounded-[2rem] bg-slate-900 border border-white/5 p-8 flex flex-col group hover:border-primary/30 transition-colors duration-500">
            {/* Grid background effect */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            
            <div className="absolute -left-20 -top-20 w-80 h-80 bg-primary/20 blur-[100px] rounded-full pointer-events-none group-hover:opacity-100 opacity-60 transition-opacity duration-700" />
            
            <div className="relative z-20 flex flex-col h-full w-full md:w-[55%] pt-4 pl-4">
              <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 mb-8 backdrop-blur-sm">
                <Network className="size-7 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Studio Sản phẩm AI</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Tự động trích xuất thông tin từ ảnh thô, viết mô tả chuẩn SEO, xóa phông nền và tạo ảnh bối cảnh (lifestyle mockup) chỉ trong tích tắc.
              </p>
            </div>

            {/* Decorative Mockup Graphics for Desktop */}
            <div className="absolute right-[-2%] bottom-[-5%] w-[50%] h-[90%] hidden md:block select-none pointer-events-none z-10">
              {/* Floating app icon UI */}
              <div className="absolute top-[15%] right-[25%] w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 flex items-center justify-center shadow-2xl transform -rotate-12 group-hover:-translate-y-3 transition-transform duration-700 ease-out z-20">
                  <Database className="size-6 text-blue-400" />
              </div>
              <div className="absolute top-[45%] right-[65%] w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 flex items-center justify-center shadow-2xl transform rotate-6 group-hover:-translate-y-4 transition-transform duration-700 delay-100 ease-out z-20">
                  <Zap className="size-5 text-purple-400" />
              </div>
              <div className="absolute top-[30%] right-[3%] w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 flex items-center justify-center shadow-2xl transform rotate-3 group-hover:-translate-y-2 transition-transform duration-700 delay-200 ease-out z-20">
                  <ShieldCheck className="size-7 text-emerald-400" />
              </div>

              {/* Chat UI Window Mockup -> Repurposed to Dashboard Visual */}
              <div className="absolute bottom-[5%] right-[10%] w-[120%] h-64 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col group-hover:-translate-y-2 group-hover:-translate-x-2 transition-transform duration-700 ease-out">
                 <div className="w-full h-10 bg-black/40 flex items-center px-4 border-b border-white/5">
                    <div className="flex gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                    </div>
                 </div>
                 <div className="p-6 flex flex-col gap-4">
                    <div className="w-3/4 h-10 rounded-2xl rounded-tl-sm bg-primary/20 border border-primary/10 self-start" />
                    <div className="w-full h-24 rounded-2xl bg-slate-800 border border-white/5 self-end flex items-end p-2 gap-2">
                       <div className="w-1/4 h-full bg-blue-500/20 rounded-md" />
                       <div className="w-1/4 h-2/3 bg-purple-500/20 rounded-md" />
                       <div className="w-1/4 h-4/5 bg-green-500/20 rounded-md" />
                       <div className="w-1/4 h-1/2 bg-yellow-500/20 rounded-md" />
                    </div>
                 </div>
              </div>
            </div>
          </div>

          {/* Sub feature 1 */}
          <div className="bento-item opacity-0 rounded-[2rem] bg-slate-900 border border-white/5 p-8 flex flex-col group relative overflow-hidden hover:border-[#0078d4]/30 hover:-translate-y-1 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#0078d4]/10 blur-[40px] rounded-full group-hover:bg-[#0078d4]/20 transition-colors duration-500" />
            <div className="size-12 rounded-xl bg-[#0078d4]/10 flex items-center justify-center border border-[#0078d4]/20 mb-6 relative z-10 backdrop-blur-sm">
               <Database className="size-6 text-[#0078d4]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 relative z-10">Điều phối Đơn hàng Thông minh</h3>
            <p className="text-slate-400 text-sm leading-relaxed relative z-10">
              AI phân tích và dự báo nhu cầu để tự động cảnh báo nhập hàng, đồng thời điều phối đơn hàng đến kho bãi có chi phí tối ưu nhất.
            </p>
          </div>

          {/* Sub feature 2 */}
          <div className="bento-item opacity-0 rounded-[2rem] bg-slate-900 border border-white/5 p-8 flex flex-col group relative overflow-hidden hover:border-[#9692ff]/30 hover:-translate-y-1 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#9692ff]/10 blur-[40px] rounded-full group-hover:bg-[#9692ff]/20 transition-colors duration-500" />
            <div className="size-12 rounded-xl bg-[#9692ff]/10 flex items-center justify-center border border-[#9692ff]/20 mb-6 relative z-10 backdrop-blur-sm">
               <Zap className="size-6 text-[#9692ff]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 relative z-10">Nhận diện Gian lận Thông minh</h3>
            <p className="text-slate-400 text-sm leading-relaxed relative z-10">
              AI phân tích đơn hàng đa kênh theo thời gian thực, lập tức cảnh báo các giao dịch giả mạo hoặc rủi ro cao trước khi đóng gói.
            </p>
          </div>

          {/* Bottom wide feature */}
          <div className="bento-item opacity-0 md:col-span-3 rounded-[2rem] bg-slate-900 border border-white/5 p-8 flex flex-col md:flex-row items-center justify-between group overflow-hidden relative hover:border-white/20 transition-colors duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-duration-500" />
            <div className="relative z-10 w-full md:w-2/3 flex items-start gap-6">
              <div className="size-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 shrink-0 backdrop-blur-sm">
                 <ShieldCheck className="size-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Tìm kiếm Ngữ nghĩa & Cá nhân hóa</h3>
                <p className="text-slate-400">
                  Cho phép khách hàng tìm kiếm bằng ngôn ngữ tự nhiên. AI tự động tuỳ biến trang chủ và sắp xếp sản phẩm theo đúng sở thích của từng người.
                </p>
              </div>
            </div>
            <button className="relative z-10 mt-6 md:mt-0 px-6 py-3 rounded-full bg-white text-slate-900 font-semibold hover:bg-slate-200 transition-colors flex items-center gap-2 group/btn">
              Trải nghiệm Gian hàng <ArrowRight className="size-4 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
