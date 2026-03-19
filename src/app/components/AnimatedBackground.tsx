'use client';

import React from 'react';

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      {/* Orb 1 - Top left - Blue */}
      <div style={{
        position: 'absolute',
        width: '700px',
        height: '700px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(37, 99, 235, 0.45) 0%, transparent 70%)',
        filter: 'blur(60px)',
        top: '-200px',
        left: '-200px',
        animation: 'drift1 18s ease-in-out infinite',
      }} />

      {/* Orb 2 - Right middle - Purple */}
      <div style={{
        position: 'absolute',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124, 58, 237, 0.35) 0%, transparent 70%)',
        filter: 'blur(60px)',
        top: '35%',
        right: '-150px',
        animation: 'drift2 22s ease-in-out infinite',
      }} />

      {/* Orb 3 - Bottom center - Indigo */}
      <div style={{
        position: 'absolute',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(79, 70, 229, 0.30) 0%, transparent 70%)',
        filter: 'blur(50px)',
        bottom: '-100px',
        left: '30%',
        animation: 'drift3 15s ease-in-out infinite',
      }} />

      <style>{`
        @keyframes drift1 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33%       { transform: translate(80px, 60px) scale(1.1); }
          66%       { transform: translate(-40px, 100px) scale(0.95); }
        }
        @keyframes drift2 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          40%       { transform: translate(-100px, -80px) scale(1.15); }
          70%       { transform: translate(60px, 40px) scale(0.9); }
        }
        @keyframes drift3 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50%       { transform: translate(120px, -60px) scale(1.2); }
        }
      `}</style>
    </div>
  );
}
