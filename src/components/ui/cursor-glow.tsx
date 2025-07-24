import React, { useEffect } from 'react';

const CursorGlow = () => {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'fixed w-5 h-5 rounded-full pointer-events-none z-[9999] mix-blend-difference';
    cursor.style.background = 'radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)';
    cursor.style.boxShadow = '0 0 20px hsl(var(--accent)), 0 0 40px hsl(var(--accent)), 0 0 60px hsl(var(--accent))';
    cursor.style.transform = 'translate(-50%, -50%)';
    cursor.style.transition = 'transform 0.1s ease-out';
    document.body.appendChild(cursor);

    const updateCursor = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    document.addEventListener('mousemove', updateCursor);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.body.removeChild(cursor);
    };
  }, []);

  return null;
};

export default CursorGlow;