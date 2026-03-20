import React from 'react';
import Link from 'next/link';

export function Footer() {
  const authHref = process.env.NEXT_PUBLIC_SSO_AUTH_PAGE || '/sign-up';

  return (
    <footer className="w-full bg-transparent pt-8 pb-12 px-4 text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
        <h2 className="text-3xl font-bold text-white">Sẵn sàng chuyển đổi số doanh nghiệp?</h2>
        <p className="text-slate-400 max-w-lg mb-4">
          Đồng hành cùng hàng ngàn doanh nghiệp đang tối ưu hoá vận hành mỗi ngày với Jarvis AI ERP.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href={authHref} className="bg-white text-slate-900 hover:bg-slate-200 px-6 py-3 rounded-full font-bold transition-transform hover:scale-105 shadow-[0_0_15px_rgba(255,255,255,0.3)] inline-block">
            Bắt đầu ngay
          </Link>
        </div>
        
        <div className="mt-16 pt-8 w-full flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} Jarvis AI ERP. Mọi quyền được bảo lưu.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Chính sách Bảo mật</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Điều khoản Dịch vụ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
