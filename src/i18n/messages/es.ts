import type { MessageBundle } from "@/types/content";

export const esMessages: MessageBundle = {
  localeLabel: "Español",
  languageSwitcherLabel: "Cambiar idioma",
  skipToContent: "Saltar al contenido",
  meta: {
    title: "AAINJAA | Percusión escénica con Homero Cortes",
    description:
      "Landing multiidioma para vender un producto digital de percusión de AAINJAA con packs, formulario integrado y flujos preparados para Stripe o pago manual.",
    siteName: "AAINJAA",
    ogTitle: "AAINJAA | Producto digital de percusión",
    ogDescription:
      "Aprende un arreglo escénico de percusión con recursos claros, packs configurables y acceso digital privado.",
  },
  nav: [
    { label: "Valor", href: "#promise" },
    { label: "Incluye", href: "#includes" },
    { label: "Packs", href: "#packs" },
    { label: "FAQ", href: "#faq" },
    { label: "Pedido", href: "#order" },
  ],
  hero: {
    eyebrow: "AAINJAA x Homero Cortes",
    title: "Percusión con carácter escénico, estructura clara y pulso real.",
    subtitle:
      "Una landing preparada para vender un producto digital que combina energía de directo, aprendizaje guiado y una experiencia de compra lista para iterar.",
    primaryCta: { label: "Quiero mi pack", href: "#packs", event: "cta_primary_click" },
    secondaryCta: { label: "Ver highlights", href: "#highlights", event: "cta_secondary_click" },
    teaserLabel: "Teaser principal",
    teaserTitle: "Espacio listo para vídeo, visual teaser o collage de campaña",
    teaserCopy:
      "Sustituye este bloque por un clip, una miniatura o un montaje editorial cuando el material final esté listo.",
    stats: [
      { label: "Formato", value: "Digital + ampliable" },
      { label: "Idiomas", value: "ES / EN" },
      { label: "Pago", value: "Stripe o manual" },
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
  packs: {
    title: "Elige el pack que mejor acompana tu momento",
    intro: "Tres packs configurables, un recomendado y una base lista para Stripe o flujo manual.",
    guarantee: "El acceso al contenido digital se activa tras verificarse el pago. Si hay material fisico, se confirma segun disponibilidad.",
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
        answer: "Tras validar el pago, el backend podra aprobar el acceso y enviar instrucciones o activar el area privada.",
      },
      {
        question: "En que idioma esta el contenido?",
        answer: "La web funciona en espanol e ingles. El contenido del producto se puede indicar por pack o en la respuesta del backend.",
      },
      {
        question: "Necesito experiencia previa?",
        answer: "No necesariamente, aunque el nivel recomendado actual es intermedio. Este copy es editable por idioma.",
      },
      {
        question: "Puedo pagar con Stripe?",
        answer: "Si. El formulario esta preparado para redirigir a checkout o payment link cuando el backend o la configuracion lo indiquen.",
      },
      {
        question: "Hay opcion de pago manual?",
        answer: "Si. La respuesta del backend puede devolver instrucciones y un codigo de referencia para seguimiento.",
      },
      {
        question: "El producto incluye material fisico?",
        answer: "Solo si el pack configurado lo requiere. En ese caso se muestra direccion de envio y se informa de disponibilidad.",
      },
      {
        question: "Cuanto tarda la entrega?",
        answer: "El acceso digital suele ser rapido tras validacion. Si hubiera material fisico, los tiempos son orientativos y pueden variar por logistica o aduanas.",
      },
    ],
  },
  form: {
    title: "Haz tu pedido",
    subtitle: "Formulario integrado, validado y preparado para backend propio con Lambda o API.",
    submitLabel: "Enviar pedido",
    submittingLabel: "Enviando...",
    successTitle: "Pedido enviado",
    successCopy: "Tu solicitud se ha registrado. Si hay redireccion o instrucciones manuales, se mostraran al terminar.",
    errorTitle: "No hemos podido enviar el formulario.",
    privacyLabel: "He leido y acepto la politica de privacidad y el tratamiento de mis datos para gestionar este pedido.",
    manualInfoLabel: "Preferencia de pago manual",
    stripeInfoLabel: "Preferencia de pago con Stripe",
    labels: {
      fullName: "Nombre completo",
      email: "Email",
      phone: "Telefono",
      country: "Pais",
      language: "Idioma",
      currency: "Moneda",
      skillLevel: "Nivel",
      selectedPack: "Pack seleccionado",
      paymentMethodPreferred: "Metodo de pago",
      shippingAddress: "Direccion de envio",
      notes: "Notas",
      requestCode: "Codigo de pedido",
      line1: "Direccion",
      line2: "Direccion adicional",
      city: "Ciudad",
      region: "Provincia / Region",
      postalCode: "Codigo postal",
      shippingCountry: "Pais de envio",
    },
    placeholders: {
      fullName: "Tu nombre y apellidos",
      email: "tu@email.com",
      phone: "+34 600 000 000",
      country: "Espana",
      notes: "Cuéntanos cualquier detalle relevante para tu pedido",
      requestCode: "Opcional",
      line1: "Calle y numero",
      line2: "Piso, puerta, referencia",
      city: "Madrid",
      region: "Madrid",
      postalCode: "28001",
      shippingCountry: "Espana",
    },
    errors: {
      fullName: "Introduce tu nombre completo.",
      email: "Introduce un email valido.",
      country: "Indica tu pais.",
      privacyConsent: "Necesitamos tu consentimiento para procesar el pedido.",
      shippingAddress: "Completa la direccion de envio.",
      global: "Revisa los campos y vuelve a intentarlo.",
    },
    options: {
      languages: [
        { value: "es", label: "Espanol" },
        { value: "en", label: "English" },
      ],
      currencies: [
        { value: "EUR", label: "EUR" },
        { value: "USD", label: "USD" },
      ],
      levels: [
        { value: "beginner", label: "Iniciacion" },
        { value: "intermediate", label: "Intermedio" },
        { value: "advanced", label: "Avanzado" },
      ],
    },
  },
  thanks: {
    title: "Gracias por tu pedido",
    body: "Tu solicitud ya esta dentro del flujo. Este espacio queda listo para mostrar confirmacion, codigo de referencia o siguientes pasos segun el backend.",
    cta: "Volver al inicio",
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
            "El formulario puede recoger nombre, email, telefono, pais, preferencias de idioma, moneda, nivel y datos de envio si el pack lo requiere.",
            "Tambien se procesan consentimientos, identificadores tecnicos y notas facilitadas por la persona usuaria.",
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
