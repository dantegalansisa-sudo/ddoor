import { Helmet } from 'react-helmet-async';

// Página temporal — se reemplaza al avanzar tras el checkpoint del Hero.
export default function Placeholder({ title }: { title: string }) {
  return (
    <>
      <Helmet>
        <title>{title} · DDoor Inmobiliaria</title>
      </Helmet>
      <section
        className="section"
        style={{ paddingTop: '180px', textAlign: 'center', minHeight: '70vh' }}
      >
        <div className="container">
          <span className="eyebrow">Próximamente</span>
          <h1 className="section-title">{title}</h1>
          <p className="section-lead" style={{ margin: '0 auto' }}>
            Esta sección se construye tras la aprobación del Hero.
          </p>
        </div>
      </section>
    </>
  );
}
