export const landing_page = {
  hero: {
    title: "Edit PDFs Like a Pro with PDFEquips",
    description:
      "PDFEquips offers free online PDF tools for professionals, students, and individuals to efficiently manage, edit, and optimize PDF files like experts, eliminating the need for costly software.",
  },
  features: {
    title: "PDFEquips does it all in 1-Click",
    description:
      "Enhanced security, an intuitive interface, OCR tech, and batch processing to boost productivity. Perfect for professionals to get the most out of their PDFs.",
  },
  why_us: {
    title: "The PDF solution you can rely on",
    description:
      "PDFEquips is your go-to web app for easy PDF management. Get all the features you love to work with digital documents, all in one secure place.",
  },
  why_choose_us: {
    title: "Why Choose Us?",
    reasons: [
      {
        icon: "🚀",
        title: "Fast and Efficient",
        description: "Convert your PDFs quickly with our optimized tools."
      },
      {
        icon: "🔒",
        title: "Secure",
        description: "Your files are stored on our servers but deleted immediately after processing."
      },
      {
        icon: "💯",
        title: "High Quality",
        description: "Maintain the original quality of your documents throughout the conversion process."
      },
      {
        icon: "🆓",
        title: "Free to Use",
        description: "Enjoy our PDF tools without any cost or hidden fees."
      }
    ]
  }
  // alert: {
  //   title: "How about viewing PDFEquips in English?",
  //   dontShowAgain: "Do not show this again",
  // },
};
export const ContinueIn = {
  en: "Continue in English",
  ar: "الاستمرار باللغة العربية",
  es: "Continuar en Español",
  fr: "Continuer en français",
  hi: "हिंदी में जारी रखें",
  zh: "继续中文",
};
export const ChangeTo = {
  en: "Change To English",
  ar: "التغيير إلى اللغة العربية",
  es: "Cambiar al Español",
  fr: "Passer au Français",
  hi: "हिंदी में बदलें",
  zh: "改为中文",
};
export const tool = {
  Merge_PDF: {
    title: "Merge PDF",
    description: "Combine multiple PDF files into one document",
    color: "var(--red)",
    type: ".pdf",
    to: "/merge-pdf",
  },
  Compress_PDF: {
    title: "Compress PDF",
    description: "Reduce the file size of a PDF while maintaining quality",
    color: "var(--green)",
    type: ".pdf",
    to: "/compress-pdf",
  },
  Lock_PDF: {
    title: "Lock PDF",
    description:
      "Secure your PDF file with a password to prevent unauthorized access. ",
    color: "#2980b9",
    type: ".pdf",
    to: "/lock-pdf",
  },

  Unlock_PDF: {
    title: "Unlock PDF",
    description:
      "Easily remove password protection from your PDF file with our user-friendly tool. ",
    color: "#3498db",
    type: ".pdf",
    to: "/unlock-pdf",
  },
  Translate_PDF: {
    title: "Translate PDF & WORD Files",
    description: "Deep accurate AI-powered translation. Preserve layout, support multiple languages",
    color: "#185abc",
    type: ".pdf",
    to: "/translate-pdf",
  },
  PDF_to_Powerpoint: {
    title: "PDF to Powerpoint",
    description: "Convert PDF files to editable Powerpoint presentations",
    color: "#C13B1B",
    type: ".pdf",
    to: "/pdf-to-powerpoint",
  },
  JPG_to_PDF: {
    title: "JPG to PDF",
    description: "Convert JPG image files to PDF documents",
    color: "#f1c40f",
    type: ".jpg",
    to: "/jpg-to-pdf",
  },
  WORD_to_PDF: {
    title: "WORD to PDF",
    description: "Convert Microsoft Word files to PDF documents",
    color: "#1B5EBE",
    type: ".docx",
    to: "/word-to-pdf",
  },
  POWERPOINT_to_PDF: {
    title: "POWERPOINT to PDF",
    description: "Convert Microsoft Powerpoint files to PDF documents",
    color: "#C13B1B",
    type: ".pptx",
    to: "/powerpoint-to-pdf",
  },
  EXCEL_to_PDF: {
    title: "EXCEL to PDF",
    description: "Convert Microsoft Excel files to PDF documents",
    color: "#10793F",
    type: ".xlsx",
    to: "/excel-to-pdf",
  },
  HTML_to_PDF: {
    title: "HTML to PDF",
    description: "Convert HTML web pages to PDF documents",
    color: "rgb(228, 77, 38)",
    type: ".html",
    to: "/html-to-pdf",
  },
  PDF_to_JPG: {
    title: "PDF to JPG",
    description: "Convert PDF files to JPG image files",
    color: "#f1c40f",
    type: ".pdf",
    to: "/pdf-to-jpg",
  },
  PDF_to_WORD: {
    title: "PDF to WORD",
    description: "Convert PDF files to Microsoft Word documents",
    color: "#1B5EBE",
    type: ".pdf",
    to: "/pdf-to-word",
  },

  PDF_to_EXCEL: {
    title: "PDF to EXCEL",
    description: "Convert PDF files to Microsoft Excel documents",
    color: "#10793F",
    type: ".pdf",
    to: "/pdf-to-excel",
  },

  PDF_to_PDF_A: {
    title: "PDF to PDF/A",
    description: "Convert PDF files to PDF/A format for long-term archiving",
    color: "#000000",
    type: ".pdf",
    to: "/pdf-to-pdf-a",
  },

  Web_to_PDF: {
    title: "Web to PDF",
    description: "Convert web pages to PDF documents",
    color: "#0984e3",
    type: ".pdf",
    to: "/web-to-pdf",
  },

  Markdown_to_PDF: {
    title: "Markdown to PDF",
    description: "Convert Markdown to PDF",
    color: "#6c5ce7",
    type: ".pdf",
    to: "/markdown-to-pdf",
  },

  PDF_to_Text: {
    title: "PDF to Text",
    description: "Convert PDF files to plain text documents",
    color: "#4493e1",
    type: ".pdf",
    to: "/pdf-to-text",
  },

  PDF_to_HTML: {
    title: "PDF to HTML",
    description: "Convert PDF files to HTML documents",
    color: "rgb(228, 77, 38)",
    type: ".pdf",
    to: "/pdf-to-html",
  },

  PDF_to_Markdown: {
    title: "PDF to Markdown",
    description: "Convert PDF files to Markdown format",
    color: "#FF4136",
    type: ".pdf",
    to: "/pdf-to-markdown",
  },

  Split_PDF: {
    title: "Split PDF",
    description: "Divide one PDF file into multiple documents",
    color: "var(--orange)",
    type: ".pdf",
    to: "/split-pdf",
  },

  Add_Watermark: {
    title: "Add Watermark",
    description: "Overlay image or text on PDF with custom style and position.",
    color: "#e55039",
    type: ".pdf",
    to: "/add-watermark",
  },
  Rotate_PDF: {
    title: "Rotate PDF",
    description:
      "Rotate PDF pages effortlessly for better readability and presentation.",
    color: "#10ac84",
    type: ".pdf",
    to: "/rotate-pdf",
  },
  Ocr_PDF: {
    title: "OCR PDF",
    description:
      "Turn PDFs into interactive, searchable files with accurate text recognition and selection.",
    color: "#006266",
    type: ".pdf",
    to: "/ocr-pdf",
  },
  Number_PDF: {
    title: "Number PDF",
    description:
      "Add page numbers to your PDF document with different styles and options",
    color: "#e55039",
    type: ".pdf",
    to: "/number-pdf",
  },
  Organize_PDF: {
    title: "Organize PDF",
    description:
      "Effortlessly rearrange the pages in your PDF document to suit your preferred order or sequence.",
    color: "#6c5ce7",
    type: ".pdf",
    to: "/organize-pdf",
  },
  Edit_PDF: {
    title: "Edit PDF",
    description: "Modify text, images, and layout of your PDF documents with our intuitive editor.",
    color: "#3867d6",
    type: ".pdf",
    to: "/edit-pdf",
  },
  Crop_PDF: {
    title: "Crop PDF",
    description: "Easily crop and trim your PDF pages to highlight essential content.",
    color: "#2d98da",
    type: ".pdf",
    to: "/crop-pdf",
  },
  PDF_Assistant: {
    title: "PDF Assistant",
    description: "Utilize AI-powered assistance for advanced PDF tasks, including data extraction and summarization.",
    color: "#38ada9",
    type: ".pdf",
    to: "/assistant",
  },
  Merge_Pages: {
    title: "Merge Pages (N-up)",
    description: "Combine multiple PDF pages into a single page efficiently with customizable layouts.",
    color: "#27ae60",
    type: ".pdf",
    to: "/merge-pages",
  },
};
// translate the values of this object to french
export const web2pdftool = {
  placeholder: "Example: https://pdfequips.com",
  submit_btn: "Convert",
};

export const translate_pdf = {
  drag_and_drop: "Drag & Drop Files Here",
  or_choose_file: "Or Choose a file",
  browse_file: "Browse Your Files",
};
/**
 * provide translation Spanish translation for each object of the following:
 * i want full code, the same code i gave you but Spanish version.
 * just translate the string values not the object keys
 */
export const edit_page = {
  edit_page_titles: {
    merge_pdf: "Merge PDF options",
    split_pdf: "Split PDF options",
    compress_pdf: "Compress PDF options",
    pdf_to_powerpoint: "PDF to Powerpoint options",
    jpg_to_pdf: "JPG to PDF options",
    word_to_pdf: "WORD to PDF options",
    powerpoint_to_pdf: "POWERPOINT to PDF options",
    excel_to_pdf: "EXCEL to PDF options",
    html_to_pdf: "HTML to PDF options",
    pdf_to_jpg: "PDF to JPG options",
    pdf_to_word: "PDF to WORD options",
    pdf_to_excel: "PDF to EXCEL options",
    pdf_to_pdf_a: "PDF to PDF/A options",
    pdf_to_text: "PDF to text options",
  },
  loader_text: "please wait...",
  add_more_button: "Add more files",
  // translate the values of this object to french.
  action_buttons: {
    merge_pdf: "Merge PDF",
    split_pdf: "Split PDF",
    compress_pdf: "Compress PDF",
    pdf_to_powerpoint: "Convert to Powerpoint",
    jpg_to_pdf: "Convert to PDF",
    word_to_pdf: "Convert to PDF",
    powerpoint_to_pdf: "Convert to PDF",
    excel_to_pdf: "Convert to PDF",
    html_to_pdf: "Convert to PDF",
    pdf_to_jpg: "Convert to JPG",
    pdf_to_word: "Convert to Word",
    pdf_to_excel: "Convert to Excel",
    pdf_to_pdf_a: "Convert to PDF/A",
    pdf_to_text: "Convert to Text",
    translate_pdf: "Translate PDF",
  },
  pages: "pages",
  page: "page",
  compress_pdf: [
    {
      title: "Recommended compression",
      description: "Best balance between size and quality",
    },
    {
      title: "Less compression",
      description: "Smaller file size but lower quality",
    },
    {
      title: "Extreme compression",
      description: "Significantly smaller file size but much lower quality",
    },
    {
      title: "Custom compression",
      description: "Choose your own compression amount",
    },
  ],
  merge_pdf: `Use drag and drop to change the order of PDF files for merging. Click and
  hold a file, move it to the desired location, and release the mouse button.
  PDF files are merged from top to bottom. To remove a file, click the delete
  icon on top of the file. To rotate a page, click the rotate icon on top of
  the page thumbnail and select the desired rotation angle. Once the files are
  in the desired order and orientation, click the 'Merge' button to combine
  them into a single PDF file.`,
};

export const tools = {
  select: "Select",
  or_drop: "or drop files here",
  files: "files",
  drop_files: "Drag files here",
};

export const downloadFile = {
  titles: {
    "merge-pdf": ["PDF files have been merged!", "PDF file has been merged!"],
    "split-pdf": ["PDF file has been split!"],
    "compress-pdf": [
      "PDF files have been compressed!",
      "PDF file has been compressed!",
    ],
    "pdf-to-powerpoint": [
      "PDF files have been converted to PowerPoint!",
      "PDF file has been converted to PowerPoint!",
    ],
    "jpg-to-pdf": [
      "JPG files have been converted to PDF!",
      "JPG file has been converted to PDF!",
    ],
    "word-to-pdf": [
      "Word files have been converted to PDF!",
      "Word file has been converted to PDF!",
    ],
    "powerpoint-to-pdf": [
      "PowerPoint files have been converted to PDF!",
      "PowerPoint file has been converted to PDF!",
    ],
    "excel-to-pdf": [
      "Excel files have been converted to PDF!",
      "Excel file has been converted to PDF!",
    ],
    "html-to-pdf": [
      "HTML files have been converted to PDF!",
      "HTML file has been converted to PDF!",
    ],
    "pdf-to-jpg": [
      "PDF files have been converted to JPG!",
      "PDF file has been converted to JPG!",
    ],
    "pdf-to-word": [
      "PDF files have been converted to Word!",
      "PDF file has been converted to Word!",
    ],
    "pdf-to-excel": [
      "PDF files have been converted to Excel!",
      "PDF file has been converted to Excel!",
    ],
    "pdf-to-pdf-a": [
      "PDF files have been converted to PDF/A!",
      "PDF file has been converted to PDF/A!",
    ],
    "web-to-pdf": [
      "Websites have been converted to PDF!",
      "Website has been converted to PDF!",
    ],
    "pdf-to-text": [
      "PDF files have been converted to Text!",
      "PDF file has been converted to Text!",
    ],
    "markdown-to-pdf": [
      "Markdown files have been converted to PDF!",
      "Markdown file has been converted to PDF!",
    ],
    "pdf-to-html": [
      "PDF files have been converted to HTML!",
      "PDF file has been converted to HTML!",
    ],
    "pdf-to-markdown": [
      "PDF files have been converted to Markdown!",
      "PDF file has been converted to Markdown!",
    ],
  },

  btnText: {
    "merge-pdf": ["Download Merged PDF files", "Download Merged PDF file"],
    "split-pdf": ["Download Split PDF files", "Download Split PDF file"],
    "compress-pdf": [
      "Download Compressed PDF files",
      "Download Compressed PDF file",
    ],
    "pdf-to-powerpoint": [
      "Download Converted PowerPoint files",
      "Download Converted PowerPoint file",
    ],
    "jpg-to-pdf": [
      "Download Converted PDF files",
      "Download Converted PDF file",
    ],
    "word-to-pdf": [
      "Download Converted PDF files",
      "Download Converted PDF file",
    ],
    "powerpoint-to-pdf": [
      "Download Converted PDF files",
      "Download Converted PDF file",
    ],
    "excel-to-pdf": [
      "Download Converted PDF files",
      "Download Converted PDF file",
    ],
    "html-to-pdf": [
      "Download Converted PDF files",
      "Download Converted PDF file",
    ],
    "pdf-to-jpg": [
      "Download Converted JPG files",
      "Download Converted JPG file",
    ],
    "pdf-to-word": [
      "Download Converted Word files",
      "Download Converted Word file",
    ],
    "pdf-to-excel": [
      "Download Converted Excel files",
      "Download Converted Excel file",
    ],
    "pdf-to-pdf-a": [
      "Download Converted PDF/A files",
      "Download Converted PDF/A file",
    ],
    "web-to-pdf": [
      "Download Converted PDF files",
      "Download Converted PDF file",
    ],
    "pdf-to-text": [
      "Download Converted Text files",
      "Download Converted Text file",
    ],
    "markdown-to-pdf": [
      "Download Converted PDF files",
      "Download Converted PDF file",
    ],
    "pdf-to-html": [
      "Download Converted HTML files",
      "Download Converted HTML file",
    ],
    "pdf-to-markdown": [
      "Download Converted Markdown files",
      "Download Converted Markdown file",
    ],
  },

  backto: {
    "merge-pdf": "Back To Merge PDF",
    "split-pdf": "Back To Split PDF",
    "compress-pdf": "Back To Compress PDF",
    "pdf-to-powerpoint": "Back To PDF to Powerpoint",
    "jpg-to-pdf": "Back To JPG to PDF",
    "word-to-pdf": "Back To Word to PDF",
    "powerpoint-to-pdf": "Back To Powerpoint to PDF",
    "excel-to-pdf": "Back To Excel to PDF",
    "html-to-pdf": "Back To HTML to PDF",
    "pdf-to-jpg": "Back To PDF to JPG",
    "pdf-to-word": "Back To PDF to Word",
    "pdf-to-excel": "Back To PDF to Excel",
    "pdf-to-pdf-a": "Back To PDF to PDF-A",
    "web-to-pdf": "Back To Web to PDF",
    "pdf-to-text": "Back To PDF to Text",
    "markdown-to-pdf": "Back To Markdown to PDF",
    "pdf-to-html": "Back To PDF to HTML",
    "pdf-to-markdown": "Back To PDF to Markdown",
  },
};

/**
 * provide translation Spanish translation for each object of the following:
 * i want full code, the same code i gave you but Spanish version.
 * just translate the string values not the object keys
 */
export const footer = {
  brand: "PDFEquips",
  terms: "terms",
  conditions: "conditions",
  privacy_policy: "privacy policy",
  title: "Free Online PDF Tools"
};

// please add an error message for "ERR_NETWORK" case with message for this errors object
// please note that i just want the static object not a way to add it to the object.
// just regenerate the object with the required fields.
export const errors = {
  EMPTY_FILE: {
    message: "The file is empty. Please choose a valid file.",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "The file is too large. Please choose a smaller file, or use our compress-pdf tool to reduce the file size.",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "The file is not a supported type.",
    types: {
      PDF: "Please choose a valid PDF file.",
      JPG: "Please choose a valid JPEG image file.",
      DOC: "Please choose a valid Word document file.",
      DOCX: "Please choose a valid Word document file.",
      XLS: "Please choose a valid Excel spreadsheet file.",
      XLSX: "Please choose a valid Excel spreadsheet file.",
      PPT: "Please choose a valid PowerPoint presentation file.",
      PPTX: "Please choose a valid PowerPoint presentation file.",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message:
      "The file is corrupt and cannot be processed. Please choose a valid file.",
    code: "ERR_FILE_CORRUPT",
  },
  MISSING_FONTS: {
    message:
      "The file contains missing fontsand cannot be processed. Please ensure all fonts are embedded in the PDF file.",
    code: "ERR_MISSING_FONTS",
  },
  INVALID_IMAGE_DATA: {
    message:
      "The file contains invalid image data. Please ensure all images are properly formatted.",
    code: "ERR_INVALID_IMAGE_DATA",
  },
  SECURITY_RISK: {
    message:
      "The file contains a security risk and cannot be processed. Please choose a valid file.",
    code: "ERR_SECURITY_RISK",
  },
  MAX_FILES_EXCEEDED: {
    message:
      "You have exceeded the maximum number of files allowed. Please delete some files and try again.",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message: "No files selected. Please select at least one file.",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message:
      "An unknown error occurred. Please try again later or contact support.",
    code: "ERR_UNKNOWN",
  },
  // i want another error like this but when only one file is uploaded
  ERR_NETWORK: {
    message:
      "A network error occurred. Please check your internet connection and try again.",
    code: "ERR_NETWORK",
  },
  ERR_UPLOAD_COUNT: {
    message: "Please upload at least two files to merge.",
    code: "ERR_UPLOAD_COUNT",
  },
};
