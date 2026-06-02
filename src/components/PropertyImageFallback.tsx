import './PropertyImageFallback.css';

interface PropertyImageFallbackProps {
  className?: string;
}

// Logo centrado sobre fondo alterno cuando una propiedad no tiene fotos.
export default function PropertyImageFallback({
  className = '',
}: PropertyImageFallbackProps) {
  return (
    <div className={`img-fallback ${className}`} aria-hidden="true">
      <img src="/logo.png" alt="" className="img-fallback__logo" />
    </div>
  );
}
