// Helper central para abrir WhatsApp con mensajes pre-armados.
// WhatsApp del sitio (MVP sin backend → todo va a wa.me).
export const WHATSAPP_NUMBER = '34637673850';

export function openWhatsApp(message: string) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

// Mensaje genérico de contacto desde Home / CTA.
export function generalContactMessage() {
  return 'Hola DDoor 👋 Estoy interesado/a en sus servicios inmobiliarios. ¿Me pueden ayudar?';
}

// Mensaje del formulario de contacto.
export function contactFormMessage(data: {
  nombre: string;
  telefono: string;
  email?: string;
  operacion?: string;
  tipo?: string;
  mensaje?: string;
}) {
  const lines = [
    `Hola DDoor 👋 Soy ${data.nombre} (${data.telefono}).`,
    data.email ? `Email: ${data.email}` : '',
    data.operacion ? `Operación: ${data.operacion}` : '',
    data.tipo ? `Tipo de propiedad: ${data.tipo}` : '',
    data.mensaje ? `Mensaje: ${data.mensaje}` : '',
  ].filter(Boolean);
  return lines.join('\n');
}

// Mensaje del formulario de interés en una propiedad.
export function propertyInterestMessage(data: {
  nombre: string;
  telefono: string;
  email?: string;
  operacion: string;
  propiedad: string;
  mensaje?: string;
}) {
  return `Hola DDoor 👋 Soy ${data.nombre} (${data.telefono}). Me interesa: ${data.operacion} - ${data.propiedad}.${
    data.email ? ` Email: ${data.email}.` : ''
  }${data.mensaje ? ` ${data.mensaje}` : ''}`;
}
