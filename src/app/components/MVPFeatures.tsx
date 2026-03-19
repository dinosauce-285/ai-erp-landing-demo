'use client';

import React, { useRef } from 'react';
import { useGsapAnimations } from '@/hooks/useGsapAnimations';
import { Box, ShoppingBag, Truck, LayoutTemplate, Megaphone, PieChart } from 'lucide-react';

const MVP_FEATURES = [
  {
    title: 'Quản lý Sản phẩm & AI Studio',
    description: 'Khởi tạo cực nhanh sản phẩm. AI tự động trích xuất thông tin từ ảnh tải lên, viết mô tả chuẩn SEO, xóa phông và tạo mockup sản phẩm chụp bối cảnh thực tế.',
    icon: <Box className="size-8 text-[#0078d4]" />,
    color: 'border-[#0078d4]/20 bg-[#0078d4]/5'
  },
  {
    title: 'Gom đơn & Chống Gian lận AI',
    description: 'Chỉ một Dashboard duy nhất xử lý đơn hàng từ Website, Shopee, Lazada đến Facebook. Tích hợp AI phát hiện các giao dịch giả mạo hoặc có thu thập rủi ro cao.',
    icon: <ShoppingBag className="size-8 text-[#9692ff]" />,
    color: 'border-[#9692ff]/20 bg-[#9692ff]/5'
  },
  {
    title: 'Kho bãi & Điều phối Thông minh',
    description: 'Sử dụng AI dự báo nhu cầu nhập hàng (Auto-restock). Thuật toán Auto-Routing tự động giao đơn hàng cho kho lưu trữ gần nhất nhằm tối ưu hóa chi phí ship.',
    icon: <Truck className="size-8 text-emerald-400" />,
    color: 'border-emerald-400/20 bg-emerald-400/5'
  },
  {
    title: 'Custom Web & Semantic Search',
    description: 'Dựng website bán hàng nhanh chóng với Theme Engine. Khách hàng dễ dàng tìm kiếm ngay bằng ngôn ngữ tự nhiên (Vd: "áo khoác len đi Đà Lạt dưới 500k").',
    icon: <LayoutTemplate className="size-8 text-pink-400" />,
    color: 'border-pink-400/20 bg-pink-400/5'
  },
  {
    title: 'Marketing & Khôi phục Giỏ hàng',
    description: 'AI theo dõi hành vi để gửi email nhắc nhở giỏ hàng bị bỏ quên. Đề xuất chương trình khuyến mãi động (Dynamic Promotions) mang tính cá nhân hoá cao.',
    icon: <Megaphone className="size-8 text-orange-400" />,
    color: 'border-orange-400/20 bg-orange-400/5'
  },
  {
    title: 'Báo cáo & Phân tích Tự động',
    description: 'Giám sát chi tiết P&L, hiệu suất sản phẩm và dòng tiền realtime. Trợ lý AI tự động tạo báo cáo doanh thu cuối kỳ không cần đụng đến sổ sách Excel.',
    icon: <PieChart className="size-8 text-cyan-400" />,
    color: 'border-cyan-400/20 bg-cyan-400/5'
  },
];

export function MVPFeatures() {
  const container = useRef<HTMLDivElement>(null);

  useGsapAnimations((gsapContext, isReducedMotion) => {
    if (!container.current) return;
    const { gsap } = gsapContext;

    // Header animation
    gsap.fromTo('.mvp-header', {
      y: isReducedMotion ? 0 : 40,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.mvp-header',
        start: 'top 85%',
      }
    });

    // Grid items staggered animation
    gsap.fromTo('.mvp-item', {
      y: isReducedMotion ? 0 : 60,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.mvp-grid',
        start: 'top 80%',
      }
    });
  });

  return (
    <section ref={container} className="w-full py-24 bg-transparent text-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 mvp-header opacity-0">
          <h2 className="text-4xl font-bold mb-4 text-white">Toàn bộ tính năng từ quản lý đến vận hành</h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Thay vì tốn chi phí cho nhiều phần mềm mua rời rạc, Jarvis ERP mang đến hệ sinh thái trọn vẹn tích hợp sâu các lõi AI mạnh mẽ nhất.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mvp-grid">
          {MVP_FEATURES.map((feature, index) => (
            <div 
              key={index} 
              className={`mvp-item opacity-0 flex flex-col p-8 rounded-[2rem] bg-slate-900 border ${feature.color} hover:-translate-y-2 transition-transform duration-300 shadow-lg`}
            >
              <div className="mb-6 inline-flex bg-slate-950 p-4 rounded-2xl border border-white/5 shadow-inner">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white tracking-tight">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
