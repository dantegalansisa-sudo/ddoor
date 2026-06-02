import { motion } from 'framer-motion';
import { EASINGS } from '../utils/easings';

interface RevealTextProps {
  children: string;
  className?: string;
  delay?: number;
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  // Para contenido above-the-fold (hero): animar al montar, no al hacer scroll.
  immediate?: boolean;
  // Palabras que reciben tratamiento de acento (cursiva dorada editorial).
  accentWords?: string[];
}

export default function RevealText({
  children,
  className = '',
  delay = 0,
  tag: Tag = 'h1',
  immediate = false,
  accentWords = [],
}: RevealTextProps) {
  const words = children.split(' ');
  const accentSet = new Set(accentWords.map((w) => w.toLowerCase()));

  // whileInView para secciones que entran al scrollear; animate para el hero.
  const animProps = immediate
    ? { animate: { y: 0, rotate: 0 } }
    : {
        whileInView: { y: 0, rotate: 0 },
        viewport: { once: true, amount: 0.5 as const },
      };

  return (
    <Tag
      className={className}
      style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3em' }}
    >
      {words.map((word, i) => (
        <span
          key={i}
          style={{ overflow: 'hidden', display: 'inline-block', paddingBottom: '0.06em' }}
        >
          <motion.span
            className={
              accentSet.has(word.toLowerCase().replace(/[.,]/g, ''))
                ? 'reveal-accent'
                : undefined
            }
            style={{ display: 'inline-block' }}
            initial={{ y: '110%', rotate: 2 }}
            {...animProps}
            transition={{
              duration: 0.85,
              delay: delay + i * 0.07,
              ease: EASINGS.premium,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
