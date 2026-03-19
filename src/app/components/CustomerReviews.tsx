'use client';

import React, { useRef } from 'react';
import { useGsapAnimations } from '@/hooks/useGsapAnimations';
import { Quote } from 'lucide-react';

const REVIEWS = [
  {
    quote: "Quản lý dữ liệu sản phẩm nhàn hơn hẳn. Tính năng tách nền, tạo ảnh bối cảnh và viết mô tả bằng AI giúp team tôi lên bài nhanh hơn thay vì làm thủ công như trước.",
    author: "Thu Ngân",
    role: "Trưởng phòng Nội dung",
    avatar: "TN"
  },
  {
    quote: "Việc xử lý đơn hàng ổn định hơn từ khi gom Shopee, Lazada và Website về một mối. Tính năng cảnh báo rủi ro cũng giúp hạn chế đáng kể các đơn ảo.",
    author: "Tuấn Anh",
    role: "Quản lý Vận hành",
    avatar: "TA"
  },
  {
    quote: "Hệ thống đáp ứng tốt các nghiệp vụ kế toán. Báo cáo P&L tự động chạy số khá chuẩn, tính năng dự báo nhập hàng hỗ trợ tốt cho việc cân đối dòng tiền.",
    author: "Bích Phương",
    role: "Kế toán trưởng",
    avatar: "BP"
  }
];

export function CustomerReviews() {
  const container = useRef<HTMLDivElement>(null);

  useGsapAnimations((gsapContext, isReduced) => {
    if (!container.current) return;
    const { gsap } = gsapContext;

    gsap.fromTo('.review-card', {
      y: isReduced ? 0 : 50,
      opacity: 0,
      rotation: isReduced ? 0 : 2,
    }, {
      y: 0,
      opacity: 1,
      rotation: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.reviews-grid',
        start: 'top 80%',
      }
    });
  });

  return (
    <section ref={container} className="w-full pt-32 pb-12 bg-transparent text-slate-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Được tin dùng bởi các doanh nghiệp dẫn đầu</h2>
          <p className="text-lg text-slate-400">Hãy cùng xem những gì họ nói về chúng tôi.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reviews-grid">
          {REVIEWS.map((review, i) => (
            <div key={i} className="review-card opacity-0 bg-slate-900/60 rounded-3xl p-8 border border-white/10 shadow-lg relative z-0 flex flex-col">
              <Quote className="absolute top-6 right-6 size-12 text-white/5 -z-10 transform scale-x-[-1]" />
              <p className="text-lg text-slate-300 italic mb-8 relative z-10">&quot;{review.quote}&quot;</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="size-12 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-lg">
                  {review.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-white">{review.author}</h4>
                  <p className="text-sm text-slate-400">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
