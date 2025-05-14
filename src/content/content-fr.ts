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
    title: "Éditez des PDFs comme un pro avec PDFEquips",
    description:
      "PDFEquips propose des outils PDF en ligne gratuits pour les professionnels, les étudiants et les particuliers afin de gérer, éditer et optimiser efficacement les fichiers PDF comme des experts, éliminant ainsi le besoin de logiciels coûteux.",
  },
  features: {
    title: "PDFEquips fait tout en un clic",
    description:
      "Sécurité renforcée, interface intuitive, technologie OCR et traitement par lots pour augmenter la productivité. Parfait pour les professionnels qui veulent tirer le meilleur parti de leurs PDF.",
  },
  why_us: {
    title: "La solution PDF sur laquelle vous pouvez compter",
    description:
      "PDFEquips est votre application web incontournable pour une gestion facile des PDF. Retrouvez toutes les fonctionnalités que vous aimez pour travailler avec des documents numériques, le tout dans un seul endroit sécurisé.",
  },
  why_choose_us: {
    title: "Pourquoi choisir PDFEquips ?",
    reasons: [
      {
        icon: "🚀",
        title: "Rapide et Efficace",
        description: "Convertissez vos PDF rapidement avec nos outils optimisés."
      },
      {
        icon: "🔒",
        title: "Sécurisé",
        description: "Vos fichiers sont stockés sur nos serveurs mais supprimés immédiatement après le traitement."
      },
      {
        icon: "💯",
        title: "Haute Qualité",
        description: "Conservez la qualité originale de vos documents tout au long du processus de conversion."
      },
      {
        icon: "🆓",
        title: "Gratuit à l'Utilisation",
        description: "Profitez de nos outils PDF sans aucun coût ni frais cachés."
      }
    ]
  }
};

export const tool: _tool = {
  Merge_PDF: {
    title: "Fusionner des PDF",
    description: "Combinez plusieurs fichiers PDF en un seul document",
    color: "var(--red)",
    type: ".pdf",
    to: "/merge-pdf",
  },
  Compress_PDF: {
    title: "Compresser des PDF",
    description:
      "Réduire la taille d'un fichier PDF tout en conservant sa qualité",
    color: "var(--green)",
    type: ".pdf",
    to: "/compress-pdf",
  },
  Translate_PDF: {
    title: "Traduire PDF",
    description: "Traduire le texte d’un fichier PDF dans une autre langue",
    color: "#185abc",
    type: ".pdf",
    to: "/translate-pdf",
  },
  Lock_PDF: {
    title: "Verrouiller PDF",
    description:
      "Sécurisez votre fichier PDF avec un mot de passe pour empêcher l'accès non autorisé.",
    color: "#2980b9",
    type: ".pdf",
    to: "/lock-pdf",
  },

  Unlock_PDF: {
    title: "Déverrouiller PDF",
    description:
      "Supprimez facilement la protection par mot de passe de votre fichier PDF avec notre outil convivial.",
    color: "#3498db",
    type: ".pdf",
    to: "/unlock-pdf",
  },
  PDF_to_Powerpoint: {
    title: "PDF vers Powerpoint",
    description:
      "Convertir des fichiers PDF en présentations Powerpoint modifiables",
    color: "#C13B1B",
    type: ".pdf",
    to: "/pdf-to-powerpoint",
  },
  JPG_to_PDF: {
    title: "JPG en PDF",
    description: "Convertir des fichiers image JPG en documents PDF",
    color: "#f1c40f",
    type: ".jpg",
    to: "/jpg-to-pdf",
  },
  WORD_to_PDF: {
    title: "WORD en PDF",
    description: "Convertir des fichiers Microsoft Word en documents PDF",
    color: "#1B5EBE",
    type: ".docx",
    to: "/word-to-pdf",
  },
  POWERPOINT_to_PDF: {
    title: "POWERPOINT en PDF",
    description: "Convertir des fichiers Microsoft Powerpoint en documents PDF",
    color: "#C13B1B",
    type: ".pptx",
    to: "/powerpoint-to-pdf",
  },

  EXCEL_to_PDF: {
    title: "EXCEL en PDF",
    description: "Convertir des fichiers Microsoft Excel en documents PDF",
    color: "#10793F",
    type: ".xlsx",
    to: "/excel-to-pdf",
  },
  HTML_to_PDF: {
    title: "HTML en PDF",
    description: "Convertir des pages web HTML en documents PDF",
    color: "rgb(228, 77, 38)",
    type: ".html",
    to: "/html-to-pdf",
  },
  PDF_to_JPG: {
    title: "PDF en JPG",
    description: "Convertir des fichiers PDF en fichiers image JPG",
    color: "#f1c40f",
    type: ".pdf",
    to: "/pdf-to-jpg",
  },
  PDF_to_WORD: {
    title: "PDF en WORD",
    description: "Convertir des fichiers PDF en documents Microsoft Word",
    color: "#1B5EBE",
    type: ".pdf",
    to: "/pdf-to-word",
  },
  PDF_to_EXCEL: {
    title: "PDF en EXCEL",
    description: "Convertir des fichiers PDF en documents Microsoft Excel",
    color: "#10793F",
    type: ".pdf",
    to: "/pdf-to-excel",
  },
  PDF_to_PDF_A: {
    title: "PDF en PDF/A",
    description:
      "Convertir des fichiers PDF en format PDF/A pour l'archivage à long terme",
    color: "#000000",
    type: ".pdf",
    to: "/pdf-to-pdf-a",
  },
  Web_to_PDF: {
    title: "Web en PDF",
    description: "Convertir des pages web en documents PDF",
    color: "#0984e3",
    type: ".pdf",
    to: "/web-to-pdf",
  },
  Markdown_to_PDF: {
    title: "Markdown en PDF",
    description: "Convertir des fichiers Markdown en documents PDF",
    color: "#6c5ce7",
    type: ".pdf",
    to: "/markdown-to-pdf",
  },
  PDF_to_Text: {
    title: "PDF en texte",
    description: "Convertir des fichiers PDF en documents texte",
    color: "#4493e1",
    type: ".pdf",
    to: "/pdf-to-text",
  },
  PDF_to_HTML: {
    title: "PDF en HTML",
    description: "Convertir des fichiers PDF en documents HTML",
    color: "rgb(228, 77, 38)",
    type: ".pdf",
    to: "/pdf-to-html",
  },
  PDF_to_Markdown: {
    title: "PDF en Markdown",
    description: "Convertir des fichiers PDF en format Markdown",
    color: "#FF4136",
    type: ".pdf",
    to: "/pdf-to-markdown",
  },
  Add_Watermark: {
    title: "Ajouter un filigrane",
    description:
      "Superposer une image ou du texte sur un PDF avec un style et une position personnalisés.",
    color: "#e55039",
    type: ".pdf",
    to: "/add-watermark",
  },
  Number_PDF: {
    title: "Numéroter PDF",
    description:
      "Ajoutez des numéros de page à votre document PDF avec différents styles et options",
    color: "#e55039",
    type: ".pdf",
    to: "/number-pdf",
  },
  Ocr_PDF: {
    title: "OCR PDF",
    description:
      "Rendez les PDF interactifs et recherchables avec une reconnaissance précise du texte.",
    color: "#006266",
    type: ".pdf",
    to: "/ocr-pdf",
  },
  Rotate_PDF: {
    title: "Rotation de PDF",
    description:
      "Faites pivoter les pages PDF facilement pour une meilleure lisibilité et présentation.",
    color: "#10ac84",
    type: ".pdf",
    to: "/rotate-pdf",
  },
  Split_PDF: {
    title: "Diviser des PDF",
    description: "Divisez un fichier PDF en plusieurs documents",
    color: "var(--orange)",
    type: ".pdf",
    to: "/split-pdf",
  },
  Organize_PDF: {
    title: "Organiser PDF",
    description:
      "Réorganisez facilement les pages de votre document PDF selon votre ordre ou séquence préférés.",
    color: "#6c5ce7",
    type: ".pdf",
    to: "/organize-pdf",
  },
  Edit_PDF: {
    title: "Modifier PDF",
    description: "Modifiez le texte, les images et la mise en page de vos documents PDF avec notre éditeur intuitif.",
    color: "#3867d6",
    type: ".pdf",
    to: "/edit-pdf",
  },
  Crop_PDF: {
    title: "Rogner PDF",
    description: "Rognez facilement vos pages PDF pour mettre en avant le contenu essentiel.",
    color: "#2d98da",
    type: ".pdf",
    to: "/crop-pdf",
  },
  PDF_Assistant: {
    title: "Assistant PDF",
    description: "Bénéficiez d'une assistance intelligente pour les tâches avancées sur PDF, comme l'extraction de données et le résumé.",
    color: "#38ada9",
    type: ".pdf",
    to: "/assistant",
  },
  Merge_Pages: {
    title: "Fusionner les pages (N-up)",
    description: "Combinez plusieurs pages PDF en une seule avec des mises en page personnalisables.",
    color: "#27ae60",
    type: ".pdf",
    to: "/merge-pages",
  },

};

export const web2pdftool: _web2pdftool = {
  placeholder: "Exemple: https://pdfequips.com",
  submit_btn: "Convertir",
};

export const translate_pdf = {
  drag_and_drop: "Faites glisser et déposez les fichiers ici",
  or_choose_file: "Ou choisissez un fichier",
  browse_file: "Parcourir vos fichiers",
};

export const tools: _tools = {
  select: "Sélectionner",
  or_drop: "ou déposer des fichiers ici",
  files: "fichiers",
  drop_files: "Déposez les fichiers ici",
};

export const downloadFile: _downloadFile = {
  titles: {
    "merge-pdf": [
      "Fusion de fichiers PDF réussie !",
      "Fusion de fichier PDF réussie !",
    ],
    "split-pdf": ["Fichier PDF divisé avec succès !"],
    "compress-pdf": [
      "Compression de fichiers PDF réussie !",
      "Compression de fichier PDF réussie !",
    ],
    "pdf-to-powerpoint": [
      "Conversion de fichiers PDF en PowerPoint réussie !",
      "Conversion de fichier PDF en PowerPoint réussie !",
    ],
    "jpg-to-pdf": [
      "Conversion de fichiers JPG en PDF réussie !",
      "Conversion de fichier JPG en PDF réussie !",
    ],
    "word-to-pdf": [
      "Conversion de fichiers Word en PDF réussie !",
      "Conversion de fichier Word en PDF réussie !",
    ],
    "powerpoint-to-pdf": [
      "Conversion de fichiers PowerPoint en PDF réussie !",
      "Conversion de fichier PowerPoint en PDF réussie !",
    ],
    "excel-to-pdf": [
      "Conversion de fichiers Excel en PDF réussie !",
      "Conversion de fichier Excel en PDF réussie !",
    ],
    "html-to-pdf": [
      "Conversion de fichiers HTML en PDF réussie !",
      "Conversion de fichier HTML en PDF réussie !",
    ],
    "pdf-to-jpg": [
      "Conversion de fichiers PDF en JPG réussie !",
      "Conversion de fichier PDF en JPG réussie !",
    ],
    "pdf-to-word": [
      "Conversion de fichiers PDF en Word réussie !",
      "Conversion de fichier PDF en Word réussie !",
    ],
    "pdf-to-excel": [
      "Conversion de fichiers PDF en Excel réussie !",
      "Conversion de fichier PDF en Excel réussie !",
    ],
    "pdf-to-pdf-a": [
      "Conversion de fichiers PDF en PDF/A réussie !",
      "Conversion de fichier PDF en PDF/A réussie !",
    ],
    "web-to-pdf": [
      "Conversion de sites Web en fichiers PDF réussie !",
      "Conversion de site Web en fichier PDF réussie !",
    ],
    "pdf-to-text": [
      "Conversion de fichiers PDF en texte réussie !",
      "Conversion de fichier PDF en texte réussie !",
    ],
    "markdown-to-pdf": [
      "Conversion de fichiers Markdown en PDF réussie !",
      "Conversion de fichier Markdown en PDF réussie !",
    ],
    "pdf-to-html": [
      "Conversion de fichiers PDF en HTML réussie !",
      "Conversion de fichier PDF en HTML réussie !",
    ],
    "pdf-to-markdown": [
      "Conversion de fichiers PDF en Markdown réussie !",
      "Conversion de fichier PDF en Markdown réussie !",
    ],
  },
  btnText: {
    "merge-pdf": [
      "Télécharger les fichiers PDF fusionnés",
      "Télécharger le fichier PDF fusionné",
    ],
    "split-pdf": [
      "Télécharger les fichiers PDF divisés",
      "Télécharger le fichier PDF divisé",
    ],
    "compress-pdf": [
      "Télécharger les fichiers PDF compressés",
      "Télécharger le fichier PDF compressé",
    ],
    "pdf-to-powerpoint": [
      "Télécharger les fichiers PowerPoint convertis",
      "Télécharger le fichier PowerPoint converti",
    ],
    "jpg-to-pdf": [
      "Télécharger les fichiers PDF convertis",
      "Télécharger le fichier PDF converti",
    ],
    "word-to-pdf": [
      "Télécharger les fichiers PDF convertis",
      "Télécharger le fichier PDF converti",
    ],
    "powerpoint-to-pdf": [
      "Télécharger les fichiers PDF convertis",
      "Télécharger le fichier PDF converti",
    ],
    "excel-to-pdf": [
      "Télécharger les fichiers PDF convertis",
      "Télécharger le fichier PDF converti",
    ],
    "html-to-pdf": [
      "Télécharger les fichiers PDF convertis",
      "Télécharger le fichier PDF converti",
    ],
    "pdf-to-jpg": [
      "Télécharger les fichiers JPG convertis",
      "Télécharger le fichier JPG converti",
    ],
    "pdf-to-word": [
      "Télécharger les fichiers Word convertis",
      "Télécharger le fichier Word converti",
    ],
    "pdf-to-excel": [
      "Télécharger les fichiers Excel convertis",
      "Télécharger le fichier Excel converti",
    ],
    "pdf-to-pdf-a": [
      "Télécharger les fichiers PDF/A convertis",
      "Télécharger le fichierPDF/A converti",
    ],
    "web-to-pdf": [
      "Télécharger les fichiers PDF convertis",
      "Télécharger le fichier PDF converti",
    ],
    "pdf-to-text": [
      "Télécharger les fichiers texte extraits",
      "Télécharger le fichier texte extrait",
    ],
    "markdown-to-pdf": [
      "Télécharger les fichiers PDF convertis",
      "Télécharger le fichier PDF converti",
    ],
    "pdf-to-html": [
      "Télécharger les fichiers HTML convertis",
      "Télécharger le fichier HTML converti",
    ],
    "pdf-to-markdown": [
      "Télécharger les fichiers Markdown convertis",
      "Télécharger le fichier Markdown converti",
    ],
  },
  backto: {
    "merge-pdf": "Retour à Fusionner PDF",
    "split-pdf": "Retour à Diviser PDF",
    "compress-pdf": "Retour à Compresser PDF",
    "pdf-to-powerpoint": "Retour à PDF vers Powerpoint",
    "jpg-to-pdf": "Retour à JPG vers PDF",
    "word-to-pdf": "Retour à Word vers PDF",
    "powerpoint-to-pdf": "Retour à Powerpoint vers PDF",
    "excel-to-pdf": "Retour à Excel vers PDF",
    "html-to-pdf": "Retour à HTML vers PDF",
    "pdf-to-jpg": "Retour à PDF vers JPG",
    "pdf-to-word": "Retour à PDF vers Word",
    "pdf-to-excel": "Retour à PDF vers Excel",
    "pdf-to-pdf-a": "Retour à PDF vers PDF-A",
    "web-to-pdf": "Retour à Web vers PDF",
    "pdf-to-text": "Retour à PDF vers Texte",
    "markdown-to-pdf": "Retour à Markdown vers PDF",
    "pdf-to-html": "Retour à PDF vers HTML",
    "pdf-to-markdown": "Retour à PDF vers Markdown",
  },
};

export const edit_page: _edit_page = {
  edit_page_titles: {
    merge_pdf: "Options de fusion de PDF",
    split_pdf: "Options de séparation de PDF",
    compress_pdf: "Options de compression de PDF",
    pdf_to_powerpoint: "Options de conversion de PDF en PowerPoint",
    jpg_to_pdf: "Options de conversion de JPG en PDF",
    word_to_pdf: "Options de conversion de WORD en PDF",
    powerpoint_to_pdf: "Options de conversion de POWERPOINT en PDF",
    excel_to_pdf: "Options de conversion de EXCEL en PDF",
    html_to_pdf: "Options de conversion de HTML en PDF",
    pdf_to_jpg: "Options de conversion de PDF en JPG",
    pdf_to_word: "Options de conversion de PDF en WORD",
    pdf_to_excel: "Options de conversion de PDF en EXCEL",
    pdf_to_pdf_a: "Options de conversion de PDF en PDF/A",
    pdf_to_text: "Options de PDF à texte",
  },
  loader_text: "Veuillez patienter...",
  add_more_button: "Ajouter plus de fichiers",
  action_buttons: {
    merge_pdf: "Fusionner PDF",
    split_pdf: "Diviser PDF",
    compress_pdf: "Compresser PDF",
    pdf_to_powerpoint: "Convertir en PowerPoint",
    jpg_to_pdf: "Convertir en PDF",
    word_to_pdf: "Convertir en PDF",
    powerpoint_to_pdf: "Convertir en PDF",
    excel_to_pdf: "Convertir en PDF",
    html_to_pdf: "Convertir en PDF",
    pdf_to_jpg: "Convertir en JPG",
    pdf_to_word: "Convertir en Word",
    pdf_to_excel: "Convertir en Excel",
    pdf_to_pdf_a: "Convertir en PDF/A",
    pdf_to_text: "Convertir en texte",
    translate_pdf: "Traduire PDF",
  },
  pages: "pages",
  page: "page",
  compress_pdf: [
    {
      title: "Compression recommandée",
      description: "Meilleur équilibre entre la taille et la qualité",
    },
    {
      title: "Compression moins importante",
      description: "Taille de fichier plus petite mais qualité inférieure",
    },
    {
      title: "Compression extrême",
      description:
        "Taille de fichier considérablement plus petite mais qualité bien inférieure",
    },
    {
      title: "Compression personnalisée",
      description: "Choisissez votre propre niveau de compression",
    },
  ],
  merge_pdf: `Utilisez le glisser-déposer pour changer l'ordre des fichiers PDF pour la fusion. Cliquez et maintenez un fichier, déplacez-le à l'emplacement souhaité et relâchez le bouton de la souris.
  Les fichiers PDF sont fusionnés de haut en bas. Pour supprimer un fichier, cliquez sur l'icône de suppression en haut du fichier. Pour faire pivoter une page, cliquez sur l'icône de rotation en haut de la vignette de la page et sélectionnez l'angle de rotation souhaité. Une fois que les fichiers sont dans l'ordre et l'orientation souhaités, cliquez sur le bouton "Fusionner" pour les combiner en un seul fichier PDF.`,
};
export const footer: _footer = {
  brand: "PDFEquips",
  terms: "conditions",
  conditions: "conditions d'utilisation",
  privacy_policy: "politique de confidentialité",
  title: "Outils PDF en ligne gratuits"
};

export const errors: _errors = {
  EMPTY_FILE: {
    message: "Le fichier est vide. Veuillez choisir un fichier valide.",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "Le fichier est trop volumineux. Veuillez choisir un fichier plus petit ou utiliser notre outil de compression PDF pour réduire la taille du fichier.",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "Le fichier n'est pas d'un type pris en charge.",
    types: {
      PDF: "Veuillez choisir un fichier PDF valide.",
      JPG: "Veuillez choisir un fichier d'image JPEG valide.",
      DOC: "Veuillez choisir un fichier de document Word valide.",
      DOCX: "Veuillez choisir un fichier de document Word valide.",
      XLS: "Veuillez choisir un fichier de feuille de calcul Excel valide.",
      XLSX: "Veuillez choisir un fichier de feuille de calcul Excel valide.",
      PPT: "Veuillez choisir un fichier de présentation PowerPoint valide.",
      PPTX: "Veuillez choisir un fichier de présentation PowerPoint valide.",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message:
      "Le fichier est corrompu et ne peut pas être traité. Veuillez choisir un fichier valide.",
    code: "ERR_FILE_CORRUPT",
  },
  MISSING_FONTS: {
    message:
      "Le fichier contient des polices manquantes. Veuillez vous assurer que toutes les polices sont intégrées dans le fichier PDF.",
    code: "ERR_MISSING_FONTS",
  },
  INVALID_IMAGE_DATA: {
    message:
      "Le fichier contient des données d'image non valides. Veuillez vous assurer que toutes les images sont correctement formatées.",
    code: "ERR_INVALID_IMAGE_DATA",
  },
  SECURITY_RISK: {
    message:
      "Le fichier contient un risque de sécurité et ne peut pas être traité. Veuillez choisir un fichier valide.",
    code: "ERR_SECURITY_RISK",
  },
  MAX_FILES_EXCEEDED: {
    message:
      "Vous avez dépassé le nombre maximal de fichiers autorisés. Veuillez supprimer certains fichiers et réessayer.",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message:
      "Aucun fichier sélectionné. Veuillez sélectionner au moins un fichier.",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message:
      "Une erreur inconnue s'est produite. Veuillez réessayer plus tard ou contacter le support.",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message:
      "Une erreur de réseau s'est produite. Veuillez vérifier votre connexion Internet et réessayer.",
    code: "ERR_NETWORK",
  },
  ERR_UPLOAD_COUNT: {
    message: "Veuillez télécharger au moins deux fichiers à fusionner.",
    code: "ERR_UPLOAD_COUNT",
  },
};
