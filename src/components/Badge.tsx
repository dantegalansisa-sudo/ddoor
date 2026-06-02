import './Badge.css';

type BadgeVariant = 'venta' | 'alquiler' | 'reservado' | 'vendido';

interface BadgeProps {
  variant: BadgeVariant;
  children: React.ReactNode;
}

export default function Badge({ variant, children }: BadgeProps) {
  return <span className={`badge badge--${variant}`}>{children}</span>;
}
