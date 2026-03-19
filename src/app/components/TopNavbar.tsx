'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function TopNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled ? 'bg-[#0A0F1C]/80 backdrop-blur-md border-white/10 py-4 shadow-lg' : 'bg-transparent border-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image 
            src="/images/logo.png" 
            alt="Jarvis AI Logo" 
            width={32} 
            height={32} 
            className="object-contain shadow-lg shadow-blue-500/20 rounded-xl"
          />
          <span className="text-xl font-bold text-white tracking-tight">Jarvis ERP</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" onClick={(e) => { e.preventDefault(); document.getElementById('features')?.scrollIntoView({behavior: 'smooth'}) }} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Tính năng</Link>
          <Link href="#solutions" onClick={(e) => { e.preventDefault(); document.getElementById('solutions')?.scrollIntoView({behavior: 'smooth'}) }} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Giải pháp</Link>
          <Link href="#reviews" onClick={(e) => { e.preventDefault(); document.getElementById('reviews')?.scrollIntoView({behavior: 'smooth'}) }} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Đánh giá</Link>
          <Link href="#pricing" onClick={(e) => { e.preventDefault(); document.getElementById('pricing')?.scrollIntoView({behavior: 'smooth'}) }} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Bảng giá</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href={process.env.NEXT_PUBLIC_SSO_AUTH_PAGE || '/sign-in'} className="hidden md:block text-sm font-medium text-slate-300 hover:text-white transition-colors px-2 py-1">
            Đăng nhập
          </Link>
          <Link href={process.env.NEXT_PUBLIC_SSO_AUTH_PAGE || '/sign-up'} className="bg-white text-slate-900 hover:bg-slate-200 px-5 py-2.5 rounded-full text-sm font-bold transition-transform hover:scale-105 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            Bắt đầu ngay
          </Link>
        </div>
      </div>
    </nav>
  );
}
