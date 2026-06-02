import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  // Posición cruda del puntero.
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // El anillo sigue con lag (sensación premium).
  const springConfig = { damping: 25, stiffness: 250 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const ring = document.getElementById('cursor-ring');

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHoverIn = () => ring?.classList.add('cursor--hover');
    const handleHoverOut = () => ring?.classList.remove('cursor--hover');

    window.addEventListener('mousemove', moveCursor);

    let bound: NodeListOf<Element> = document.querySelectorAll(
      'a, button, .property-card, [data-cursor-hover]'
    );
    const attach = (els: NodeListOf<Element>) =>
      els.forEach((el) => {
        el.addEventListener('mouseenter', handleHoverIn);
        el.addEventListener('mouseleave', handleHoverOut);
      });
    const detach = (els: NodeListOf<Element>) =>
      els.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverIn);
        el.removeEventListener('mouseleave', handleHoverOut);
      });

    attach(bound);

    // Re-bind cuando cambia el DOM (navegación entre rutas).
    const observer = new MutationObserver(() => {
      detach(bound);
      bound = document.querySelectorAll(
        'a, button, .property-card, [data-cursor-hover]'
      );
      attach(bound);
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      observer.disconnect();
      detach(bound);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* Dot interior — sigue al instante */}
      <motion.div
        className="cursor-dot"
        style={{ x: cursorX, y: cursorY, translateX: '-50%', translateY: '-50%' }}
      />
      {/* Anillo exterior — sigue con lag */}
      <motion.div
        id="cursor-ring"
        className="cursor-ring"
        style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
      />
    </>
  );
}
