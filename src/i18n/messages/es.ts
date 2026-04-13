import type { MessageBundle } from "@/types/content";

export const esMessages: MessageBundle = {
  localeLabel: "Español",
  languageSwitcherLabel: "Cambiar idioma",
  skipToContent: "Saltar al contenido",
  meta: {
    title: "AAINJAA | Percusión escénica con Homero Cortes",
    description:
      "Landing multiidioma para validar una masterclass digital de percusión de AAINJAA con una sola oferta y checkout directo con Stripe.",
    siteName: "AAINJAA",
    ogTitle: "AAINJAA | Producto digital de percusión",
    ogDescription:
      "Accede a una masterclass digital de percusión con oferta de lanzamiento y checkout directo con Stripe.",
  },
  nav: [
    { label: "Valor", href: "#promise" },
    { label: "Incluye", href: "#includes" },
    { label: "Oferta", href: "#offer" },
    { label: "FAQ", href: "#faq" },
    { label: "Pedido", href: "#order" },
  ],
  hero: {
    eyebrow: "AAINJAA x Homero Cortes",
    title: "Percusión con carácter escénico, estructura clara y pulso real.",
    subtitle:
      "Una propuesta directa para validar una sola masterclass digital, con mensaje claro, oferta de lanzamiento y checkout sin pasos extra dentro de la landing.",
    primaryCta: { label: "Quiero acceder ahora", href: "#order", event: "cta_primary_click" },
    teaserLabel: "Teaser principal",
    teaserTitle: "Espacio listo para vídeo, visual teaser o collage de campaña",
    teaserCopy:
      "Sustituye este bloque por un clip, una miniatura o un montaje editorial cuando el material final esté listo.",
    stats: [
      { label: "Formato", value: "Masterclass digital" },
      { label: "Idiomas", value: "ES / EN" },
      { label: "Oferta", value: "20% lanzamiento · 7 dias" },
    ],
  },
  promise: {
    title: "No es otro vídeo suelto. Es una pieza pensada para tocar, entender y sostener.",
    intro: "Bloques cortos, orientados a conversion y faciles de escanear para que la promesa se entienda en segundos.",
    cards: [
      {
        title: "Que aprende la persona",
        description: "Un arreglo de percusion trabajado paso a paso, con enfoque musical, lectura y aplicacion practica.",
      },
      {
        title: "Para quien es",
        description: "Percusionistas, bateristas, docentes y musicos curiosos que quieren avanzar con una referencia clara.",
      },
      {
        title: "Nivel recomendado",
        description: "Desde intermedio, con recursos editables para adaptar el mensaje a iniciacion o nivel avanzado.",
      },
      {
        title: "Por que es util",
        description: "Reduce friccion, ordena el estudio y ofrece una experiencia mas cercana a una clase bien construida.",
      },
    ],
  },
  includes: {
    title: "Que incluye el producto",
    intro: "Todo el contenido visible se controla desde configuracion para iterar rapido sin reestructurar la pagina.",
    items: [
      {
        kicker: "Paso a paso",
        title: "Explicacion guiada",
        description: "Despiece del arreglo con una progresion clara y facil de seguir.",
      },
      {
        kicker: "Por instrumento",
        title: "Capas separadas",
        description: "Partes diferenciadas para entender cada timbre y construir el conjunto con precision.",
      },
      {
        kicker: "Practica",
        title: "Version lenta",
        description: "Tempo reducido para memorizar, corregir y consolidar sin perder el groove.",
      },
      {
        kicker: "Material descargable",
        title: "Partituras PDF",
        description: "Base editable para lectura, ensayo y trabajo docente.",
      },
      {
        kicker: "Bonus",
        title: "Contenido extra",
        description: "Espacio preparado para bonuses, notas artisticas o recursos premium.",
      },
    ],
  },
  highlights: {
    title: "Highlights listos para clips",
    intro: "Tres espacios preparados para thumbnails o videos reales sin rehacer la estructura.",
    items: [
      {
        id: "clip-1",
        eyebrow: "Clip 01",
        title: "Pulso y entrada",
        description: "Placeholder para un teaser centrado en energia, gesto y primer impacto.",
        duration: "00:34",
      },
      {
        id: "clip-2",
        eyebrow: "Clip 02",
        title: "Desglose por capas",
        description: "Placeholder para mostrar como se separan instrumentos y se reconstruye el arreglo.",
        duration: "00:48",
      },
      {
        id: "clip-3",
        eyebrow: "Clip 03",
        title: "Version lenta y detalle",
        description: "Placeholder para una muestra de estudio con foco en claridad y control tecnico.",
        duration: "00:41",
      },
    ],
  },
  offer: {
    title: "Una unica oferta para validar interes real",
    intro: "Un solo producto, un solo precio visible y una sola decision: enviar el pedido y completar el pago en Stripe.",
    supportLine: "Flujo de compra",
  },
  authority: {
    title: "Sobre Homero y AAINJAA",
    intro: "Autoridad breve, marca clara y datos editables para sostener confianza sin convertir esta seccion en una biografia eterna.",
    body: "AAINJAA combina lenguaje escenico, investigacion ritmica y pedagogia contemporanea. Este bloque esta preparado para ajustar trayectoria, comunidad, giras y presencia internacional con facilidad.",
    stats: [
      { label: "Paises", value: "12+" },
      { label: "Alumnos", value: "1.500+" },
      { label: "Escenarios", value: "Festivales, aulas y residencias" },
    ],
    miniTestimonials: [
      { quote: "Una propuesta con identidad, ritmo y mucha claridad pedagogica.", name: "Testimonio editable" },
      { quote: "Se siente mas cercano a una direccion artistica que a un tutorial generico.", name: "Comunidad AAINJAA" },
    ],
  },
  faq: {
    title: "Preguntas frecuentes",
    intro: "Respuesta corta, clara y lista para pulirse despues con informacion comercial definitiva.",
    items: [
      {
        question: "Cuando recibo el acceso?",
        answer: "Tras completar el pago en Stripe, recibiras un correo con las instrucciones para acceder al curso.",
      },
      {
        question: "En que idioma esta el contenido?",
        answer: "La landing existe en espanol e ingles. El acceso y las comunicaciones pueden adaptarse al locale desde el que haces la compra.",
      },
      {
        question: "Necesito experiencia previa?",
        answer: "No necesariamente, aunque el nivel recomendado actual es intermedio. Este copy es editable por idioma.",
      },
      {
        question: "Puedo pagar con Stripe?",
        answer: "Si. Al enviar el formulario se crea el pedido y se redirige directamente a Stripe Checkout para terminar el pago.",
      },
      {
        question: "Cuanto dura la oferta?",
        answer: "La oferta de lanzamiento aplica durante los primeros 7 dias con un 20% de descuento sobre el precio base.",
      },
    ],
  },
  form: {
    title: "Reserva tu acceso",
    subtitle: "Deja tu nombre y tu email. Al enviar el pedido te llevaremos directamente a Stripe para completar la compra.",
    submitLabel: "Ir a Stripe Checkout",
    submittingLabel: "Enviando...",
    errorTitle: "No hemos podido enviar el formulario.",
    checkoutNote: "No pedimos mas datos en esta fase. El pago se completa fuera de la landing, en Stripe Checkout.",
    privacyLabel: "He leido y acepto la politica de privacidad y el tratamiento de mis datos para gestionar este pedido.",
    labels: {
      fullName: "Nombre completo",
      email: "Email",
    },
    placeholders: {
      fullName: "Tu nombre y apellidos",
      email: "tu@email.com",
    },
    errors: {
      fullName: "Introduce tu nombre completo.",
      email: "Introduce un email valido.",
      privacyConsent: "Necesitamos tu consentimiento para procesar el pedido.",
      global: "Revisa los campos y vuelve a intentarlo.",
    },
  },
  thanks: {
    eyebrow: "Gracias",
    success: {
      title: "Gracias por tu compra",
      body: "Tu pago se ha procesado correctamente. En breve recibiras un correo con las instrucciones para acceder a tu curso privado.",
      supportPrefix: "Si tienes cualquier duda o incidencia, puedes escribirnos a",
      cta: "Volver al inicio",
    },
    cancel: {
      title: "Pago no completado",
      body: "No hemos podido confirmar el pago. Si quieres, puedes volver a intentarlo desde la landing.",
      cta: "Volver al inicio",
    },
  },
  legal: {
    commonBackLabel: "Volver al inicio",
    avisoLegal: {
      title: "Aviso legal",
      intro: "Texto base editable para informar sobre titularidad, acceso y condiciones generales del sitio.",
      reviewNote: "Requiere revision juridica final antes de produccion.",
      sections: [
        {
          heading: "Titular del sitio",
          paragraphs: [
            "AAINJAA y Homero Cortes aparecen aqui como placeholders de marca y titularidad. Sustituir por los datos legales completos del responsable.",
            "Este sitio tiene por objeto informar y vender productos digitales de percusion con acceso privado posterior a la verificacion del pago.",
          ],
        },
        {
          heading: "Acceso y uso",
          paragraphs: [
            "El acceso al contenido digital implica una licencia o permiso de visualizacion privada, no la transmision de propiedad sobre los videos o materiales protegidos.",
            "El acceso puede condicionarse a comprobaciones de pago, control anti fraude y disponibilidad tecnica del area privada.",
          ],
        },
        {
          heading: "Entrega y limitacion de responsabilidad",
          paragraphs: [
            "Los tiempos de entrega digital son orientativos y pueden depender de verificaciones manuales o incidencias tecnicas razonables.",
            "Cuando exista material fisico, la disponibilidad, los tiempos logisticos y posibles aduanas pueden afectar la entrega.",
          ],
        },
      ],
    },
    privacidad: {
      title: "Politica de privacidad",
      intro: "Texto base editable para explicar tratamiento de datos relacionado con pedidos, seguimiento y contacto.",
      reviewNote: "Requiere revision juridica final antes de produccion.",
      sections: [
        {
          heading: "Datos recogidos",
          paragraphs: [
            "El formulario puede recoger nombre, email, telefono, pais, preferencias de idioma, moneda y datos de envio si el pack lo requiere.",
            "Tambien se procesan consentimientos e identificadores tecnicos necesarios para gestionar el pedido.",
          ],
        },
        {
          heading: "Finalidad",
          paragraphs: [
            "Gestionar pedidos, verificar pagos, coordinar accesos privados, responder consultas y prevenir envios automatizados no deseados.",
            "La analitica no esencial no debe activarse antes del consentimiento expreso de cookies.",
          ],
        },
        {
          heading: "Conservacion y derechos",
          paragraphs: [
            "Los plazos de conservacion deben definirse segun la base juridica aplicable y las obligaciones fiscales o contractuales reales.",
            "La persona usuaria podra ejercer sus derechos de acceso, rectificacion, supresion y otros mediante el canal de contacto legal definitivo.",
          ],
        },
      ],
    },
    cookies: {
      title: "Politica de cookies",
      intro: "Texto base editable para informar sobre cookies tecnicas, preferencias y analitica.",
      reviewNote: "Requiere revision juridica final antes de produccion.",
      sections: [
        {
          heading: "Cookies tecnicas",
          paragraphs: [
            "Se utilizan cookies o almacenamiento local para recordar idioma, funcionamiento basico y estado de consentimiento.",
            "Estas cookies son necesarias para una experiencia coherente del sitio y del formulario.",
          ],
        },
        {
          heading: "Cookies de analitica y marketing",
          paragraphs: [
            "Google Analytics, GTM o Meta Pixel solo deben cargarse si la persona acepta el uso no esencial.",
            "Los identificadores reales deben configurarse por variables de entorno antes de produccion.",
          ],
        },
        {
          heading: "Gestion de preferencias",
          paragraphs: [
            "La persona usuaria puede aceptar, rechazar o personalizar el uso no esencial mediante el aviso de cookies.",
            "La decision puede revisarse posteriormente actualizando el consentimiento desde la interfaz futura o limpiando el almacenamiento del navegador.",
          ],
        },
      ],
    },
  },
  footer: {
    copyright: "AAINJAA. Todos los derechos reservados.",
    legalLabel: "Legal",
  },
  notFound: {
    title: "Esta ruta no encontro el ritmo.",
    body: "La pagina que buscas no esta aqui o ha cambiado de lugar.",
    cta: "Volver al inicio",
  },
  cookieBanner: {
    title: "Cookies y preferencias",
    description: "Usamos cookies tecnicas para que la web funcione y, solo si aceptas, cargaremos analitica y tracking de marketing.",
    accept: "Aceptar",
    reject: "Rechazar",
    customize: "Configurar",
    savePreferences: "Guardar preferencias",
    essentials: "Cookies esenciales",
    analytics: "Analitica y marketing",
    legalPrefix: "Mas informacion en",
  },
};
