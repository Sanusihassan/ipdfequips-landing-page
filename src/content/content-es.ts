import type {
  tool as _tool,
  web2pdftool as _web2pdftool,
  tools as _tools,
  edit_page as _edit_page,
  footer as _footer,
  errors as _errors,
  downloadFile as _downloadFile,
  landing_page as _landing_page,
} from "../content";

export const landing_page: _landing_page = {
  hero: {
    title: "Edita PDFs como un profesional con PDFEquips",
    description:
      "PDFEquips ofrece herramientas PDF en línea gratuitas para profesionales, estudiantes e individuos para gestionar, editar y optimizar archivos PDF de manera eficiente como expertos, eliminando la necesidad de software costoso.",
  },
  features: {
    title: "PDFEquips lo hace todo con un solo clic",
    description:
      "Seguridad mejorada, una interfaz intuitiva, tecnología OCR y procesamiento por lotes para aumentar la productividad. Perfecto para profesionales que desean aprovechar al máximo sus PDFs.",
  },
  why_us: {
    title: "La solución PDF en la que puedes confiar",
    description:
      "PDFEquips es tu aplicación web de confianza para gestionar archivos PDF fácilmente. Obtén todas las funciones que te encantan para trabajar con documentos digitales, todo en un solo lugar seguro.",
  },
  why_choose_us: {
    title: "¿Por qué elegir PDFEquips?",
    reasons: [
      {
        icon: "🚀",
        title: "Rápido y Eficiente",
        description: "Convierte tus PDFs rápidamente con nuestras herramientas optimizadas."
      },
      {
        icon: "🔒",
        title: "Seguro",
        description: "Tus archivos se almacenan en nuestros servidores pero se eliminan inmediatamente después del procesamiento."
      },
      {
        icon: "💯",
        title: "Alta Calidad",
        description: "Mantén la calidad original de tus documentos durante todo el proceso de conversión."
      },
      {
        icon: "🆓",
        title: "Gratis para Usar",
        description: "Disfruta de nuestras herramientas PDF sin ningún costo o tarifas ocultas."
      }
    ]
  }
};

export const tool: _tool = {
  Merge_PDF: {
    title: "Combinar PDF",
    description: "Combina varios archivos PDF en un solo documento",
    color: "var(--red)",
    type: ".pdf",
    to: "/merge-pdf",
  },
  Compress_PDF: {
    title: "Comprimir PDF",
    description: "Reduce el tamaño de un archivo PDF sin perder calidad",
    color: "var(--green)",
    type: ".pdf",
    to: "/compress-pdf",
  },
  Lock_PDF: {
    title: "Bloquear PDF",
    description:
      "Proteja su archivo PDF con una contraseña para evitar el acceso no autorizado.",
    color: "#2980b9",
    type: ".pdf",
    to: "/lock-pdf",
  },

  Unlock_PDF: {
    title: "Desbloquear PDF",
    description:
      "Eliminar fácilmente la protección por contraseña de su archivo PDF con nuestra herramienta fácil de usar.",
    color: "#3498db",
    type: ".pdf",
    to: "/unlock-pdf",
  },
  Translate_PDF: {
    title: "Traducir archivos PDF, WORD y PowerPoint",
    description: "Traducción precisa y profunda de documentos con IA. Mantén el formato y el diseño, y admite varios idiomas",
    color: "#185abc",
    type: ".pdf",
    to: "/translate-pdf",
  },
  PDF_to_Powerpoint: {
    title: "PDF a Powerpoint",
    description:
      "Convierte archivos PDF a presentaciones de Powerpoint editables",
    color: "#C13B1B",
    type: ".pdf",
    to: "/pdf-to-powerpoint",
  },
  JPG_to_PDF: {
    title: "JPG a PDF",
    description: "Convierte archivos de imagen JPG a documentos PDF",
    color: "#f1c40f",
    type: ".jpg",
    to: "/jpg-to-pdf",
  },
  WORD_to_PDF: {
    title: "WORD a PDF",
    description: "Convierte archivos de Microsoft Word a documentos PDF",
    color: "#1B5EBE",
    type: ".docx",
    to: "/word-to-pdf",
  },
  POWERPOINT_to_PDF: {
    title: "POWERPOINT a PDF",
    description: "Convierte archivos de Microsoft Powerpoint a documentos PDF",
    color: "#C13B1B",
    type: ".pptx",
    to: "/powerpoint-to-pdf",
  },
  EXCEL_to_PDF: {
    title: "EXCEL a PDF",
    description: "Convierte archivos de Microsoft Excel a documentos PDF",
    color: "#10793F",
    type: ".xlsx",
    to: "/excel-to-pdf",
  },
  HTML_to_PDF: {
    title: "HTML a PDF",
    description: "Convierte páginas web HTML a documentos PDF",
    color: "rgb(228, 77, 38)",
    type: ".html",
    to: "/html-to-pdf",
  },

  Markdown_to_PDF: {
    title: "Markdown a PDF",
    description: "Convertir Markdown a PDF",
    color: "#6c5ce7",
    type: ".pdf",
    to: "/markdown-to-pdf",
  },

  PDF_to_JPG: {
    title: "PDF a JPG",
    description: "Convierte archivos PDF a archivos de imagen JPG",
    color: "#f1c40f",
    type: ".pdf",
    to: "/pdf-to-jpg",
  },
  PDF_to_WORD: {
    title: "PDF a WORD",
    description: "Convierte archivos PDF a documentos de Microsoft Word",
    color: "#1B5EBE",
    type: ".pdf",
    to: "/pdf-to-word",
  },

  PDF_to_EXCEL: {
    title: "PDF a EXCEL",
    description: "Convierte archivos PDF a documentos de Microsoft Excel",
    color: "#10793F",
    type: ".pdf",
    to: "/pdf-to-excel",
  },

  PDF_to_PDF_A: {
    title: "PDF a PDF/A",
    description:
      "Convierte archivos PDF al formato PDF/A para archivado a largo plazo",
    color: "#000000",
    type: ".pdf",
    to: "/pdf-to-pdf-a",
  },

  Web_to_PDF: {
    title: "Web a PDF",
    description: "Convertir páginas web en documentos PDF",
    color: "#0984e3",
    type: ".pdf",
    to: "/web-to-pdf",
  },

  PDF_to_Text: {
    title: "PDF a texto",
    description: "Convertir archivos PDF en documentos de texto plano",
    color: "#4493e1",
    type: ".pdf",
    to: "/pdf-to-text",
  },

  PDF_to_HTML: {
    title: "PDF a HTML",
    description: "Convierte archivos PDF a documentos HTML",
    color: "rgb(228, 77, 38)",
    type: ".pdf",
    to: "/pdf-to-html",
  },
  PDF_to_Markdown: {
    title: "PDF a Markdown",
    description: "Convierte archivos PDF al formato Markdown",
    color: "#FF4136",
    type: ".pdf",
    to: "/pdf-to-markdown",
  },
  Add_Watermark: {
    title: "Agregar marca de agua",
    description:
      "Superponer imagen o texto en un PDF con estilo y posición personalizados.",
    color: "#e55039",
    type: ".pdf",
    to: "/add-watermark",
  },
  Number_PDF: {
    title: "Numerar PDF",
    description:
      "Añade números de página a tu documento PDF con diferentes estilos y opciones",
    color: "#e55039",
    type: ".pdf",
    to: "/number-pdf",
  },
  Ocr_PDF: {
    title: "OCR PDF",
    description:
      "Convierte PDF estáticos en documentos interactivos y buscables con reconocimiento de texto preciso.",
    color: "#006266",
    type: ".pdf",
    to: "/ocr-pdf",
  },
  Rotate_PDF: {
    title: "Rotar PDF",
    description:
      "Gire páginas PDF fácilmente para una mejor legibilidad y presentación.",
    color: "#10ac84",
    type: ".pdf",
    to: "/rotate-pdf",
  },
  Split_PDF: {
    title: "Dividir PDF",
    description: "Divide un archivo PDF en varios documentos",
    color: "var(--orange)",
    type: ".pdf",
    to: "/split-pdf",
  },
  Organize_PDF: {
    title: "Organizar PDF",
    description:
      "Reordena fácilmente las páginas de tu documento PDF según tu orden o secuencia preferidos.",
    color: "#6c5ce7",
    type: ".pdf",
    to: "/organize-pdf",
  },
  Edit_PDF: {
    title: "Editar PDF",
    description: "Modifica texto, imágenes y el diseño de tus documentos PDF con nuestro editor intuitivo.",
    color: "#3867d6",
    type: ".pdf",
    to: "/edit-pdf",
  },
  PDF_Forms: {
    title: "Crear PDF rellenable",
    description: "Convierte cualquier PDF en un formulario rellenable. La IA detecta los campos, o añade cuadros de texto, casillas y firmas tú mismo.",
    color: "#5f27cd",
    type: ".pdf",
    to: "/pdf-forms",
    badge: "Nuevo",
  },
  Crop_PDF: {
    title: "Recortar PDF",
    description: "Recorta fácilmente tus páginas PDF para resaltar el contenido esencial.",
    color: "#2d98da",
    type: ".pdf",
    to: "/crop-pdf",
  },
  PDF_Assistant: {
    title: "Asistente PDF",
    description: "Utiliza asistencia con IA para tareas avanzadas de PDF, como extracción de datos y resumen.",
    color: "#38ada9",
    type: ".pdf",
    to: "/assistant",
  },
  Merge_Pages: {
    title: "Combinar páginas (N-up)",
    description: "Fusiona varias páginas de PDF en una sola con diseños personalizables.",
    color: "#27ae60",
    type: ".pdf",
    to: "/merge-pages",
  },
  Image_to_PDF: {
    title: "Imagen a PDF",
    seoTitle: "Convertir Imágenes a PDF - Convertidor gratuito",
    description: "Convierte archivos de imagen (JPG, PNG, BMP, TIFF, GIF, SVG, WebP, HEIF) a documentos PDF",
    color: "#3498db",
    type: "image",
    to: "/image-to-pdf",
  }
};

export const web2pdftool: _web2pdftool = {
  placeholder: "Ejemplo: https://pdfequips.com",
  submit_btn: "Convertir",
};

export const translate_pdf = {
  drag_and_drop: "Arrastre y suelte los archivos aquí",
  or_choose_file: "O elija un archivo",
  browse_file: "Examinar sus archivos",
};

export const footer: _footer = {
  brand: "PDFEquips",
  terms: "términos",
  conditions: "condiciones",
  privacy_policy: "política de privacidad",
  title: "Herramientas PDF en línea gratuitas"
};

export const errors: _errors = {
  EMPTY_FILE: {
    message: "El archivo está vacío. Por favor, elija un archivo válido.",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "El archivo es demasiado grande. Por favor, elija un archivo más pequeño o use nuestra herramienta de compresión de PDF para reducir el tamaño del archivo.",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "El archivo no es un tipo compatible.",
    types: {
      PDF: "Por favor, elija un archivo PDF válido.",
      JPG: "Por favor, elija un archivo de imagen JPEG válido.",
      DOC: "Por favor, elija un archivo de documento de Word válido.",
      DOCX: "Por favor, elija un archivo de documento de Word válido.",
      XLS: "Por favor, elija un archivo de hoja de cálculo de Excel válido.",
      XLSX: "Por favor, elija un archivo de hoja de cálculo de Excel válido.",
      PPT: "Por favor, elija un archivo de presentación de PowerPoint válido.",
      PPTX: "Por favor, elija un archivo de presentación de PowerPoint válido.",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message:
      "El archivo estácorrupto y no se puede procesar. Por favor, elija un archivo válido.",
    code: "ERR_FILE_CORRUPT",
  },
  MISSING_FONTS: {
    message:
      "El archivo contiene fuentes faltantes. Por favor, asegúrese de que todas las fuentes estén incrustadas en el archivo PDF.",
    code: "ERR_MISSING_FONTS",
  },
  INVALID_IMAGE_DATA: {
    message:
      "El archivo contiene datos de imagen no válidos. Por favor, asegúrese de que todas las imágenes estén correctamente formateadas.",
    code: "ERR_INVALID_IMAGE_DATA",
  },
  SECURITY_RISK: {
    message:
      "El archivo contiene un riesgo de seguridad y no se puede procesar. Por favor, elija un archivo válido.",
    code: "ERR_SECURITY_RISK",
  },
  MAX_FILES_EXCEEDED: {
    message:
      "Ha excedido el número máximo de archivos permitidos. Por favor, elimine algunos archivos e intente nuevamente.",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message:
      "No se han seleccionado archivos. Por favor, seleccione al menos un archivo.",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message:
      "Ha ocurrido un error desconocido. Por favor, inténtelo de nuevo más tarde o contacte al soporte.",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message:
      "Ha ocurrido un error en la red. Por favor, comprueba tu conexión a internet e inténtalo de nuevo.",
    code: "ERR_NETWORK",
  },
  ERR_UPLOAD_COUNT: {
    message: "Por favor, suba al menos dos archivos para fusionar.",
    code: "ERR_UPLOAD_COUNT",
  },
};
