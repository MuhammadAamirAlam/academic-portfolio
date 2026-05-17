import React, { useEffect, useState } from 'react';

function Cursor() {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const isTouchDevice =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(pointer: coarse)').matches;

    if (isTouchDevice) {
      setIsTouch(true);
      return;
    }

    const link = document.querySelectorAll('.hover-this');
    const cursor = document.querySelector('.cursor');
    if (!cursor) return;

    const animateit = function (e) {
      const hoverAnim = this.querySelector('.hover-anim');
      if (!hoverAnim) return;
      const { offsetX: x, offsetY: y } = e;
      const { offsetWidth: width, offsetHeight: height } = this;
      const move = 25;
      const xMove = (x / width) * (move * 2) - move;
      const yMove = (y / height) * (move * 2) - move;

      hoverAnim.style.transform = `translate(${xMove}px, ${yMove}px)`;
      if (e.type === 'mouseleave') hoverAnim.style.transform = '';
    };

    const editCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      cursor.style.left = x + 'px';
      cursor.style.top = y + 'px';
    };

    link.forEach((b) => b.addEventListener('mousemove', animateit));
    link.forEach((b) => b.addEventListener('mouseleave', animateit));
    window.addEventListener('mousemove', editCursor);

    const interactiveElements = document.querySelectorAll('a, .cursor-pointer');
    interactiveElements.forEach((el) => {
      el.addEventListener('mousemove', () => {
        cursor.classList.add('cursor-active');
      });
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-active');
      });
    });

    return () => {
      link.forEach((b) => b.removeEventListener('mousemove', animateit));
      link.forEach((b) => b.removeEventListener('mouseleave', animateit));
      window.removeEventListener('mousemove', editCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mousemove', () => {
          cursor.classList.add('cursor-active');
        });
        el.removeEventListener('mouseleave', () => {
          cursor.classList.remove('cursor-active');
        });
      });
    };
  }, []);

  if (isTouch) {
    return null;
  }

  return (
    <>
      <style>{`
        /* Double insurance: Hide the cursor immediately via CSS on touch devices and small viewports */
        @media (pointer: coarse), (hover: none), (max-width: 991px) {
          .cursor {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
            pointer-events: none !important;
          }
        }
      `}</style>
      <div className="cursor"></div>
    </>
  );
}

export default Cursor;
