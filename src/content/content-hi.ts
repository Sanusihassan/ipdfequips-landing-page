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
    title: "PDFEquips के साथ PDFs को प्रोफेशनल की तरह एडिट करें",
    description:
      "PDFEquips पेशेवरों, छात्रों और व्यक्तियों के लिए मुफ्त ऑनलाइन PDF उपकरण प्रदान करता है ताकि वे विशेषज्ञों की तरह PDF फाइलों का कुशलतापूर्वक प्रबंधन, संपादन और अनुकूलन कर सकें, जिससे महंगे सॉफ़्टवेयर की आवश्यकता समाप्त हो जाती है।"
  },
  features: {
    title: "PDFEquips सब कुछ 1-क्लिक में करता है",
    description:
      "उन्नत सुरक्षा, एक सहज इंटरफ़ेस, OCR तकनीक, और बैच प्रोसेसिंग से उत्पादकता बढ़ाएँ। पेशेवरों के लिए अपने PDFs का अधिकतम लाभ उठाने के लिए यह एकदम सही है।",
  },
  why_us: {
    title: "PDF समाधान जिस पर आप भरोसा कर सकते हैं",
    description:
      "PDFEquips आपके लिए आसान PDF प्रबंधन का पसंदीदा वेब ऐप है। डिजिटल दस्तावेज़ों पर काम करने के लिए वे सभी सुविधाएँ पाएं जिन्हें आप पसंद करते हैं — वह भी एक ही सुरक्षित स्थान पर।",
  },
  why_choose_us: {
    title: "PDFEquips को क्यों चुनें?",
    reasons: [
      {
        icon: "🚀",
        title: "तेज़ और कुशल",
        description: "हमारे अनुकूलित उपकरणों के साथ अपने PDF को त्वरित रूप से परिवर्तित करें।"
      },
      {
        icon: "🔒",
        title: "सुरक्षित",
        description: "आपकी फ़ाइलें हमारे सर्वर पर संग्रहीत की जाती हैं लेकिन प्रसंस्करण के तुरंत बाद हटा दी जाती हैं।"
      },
      {
        icon: "💯",
        title: "उच्च गुणवत्ता",
        description: "रूपांतरण प्रक्रिया के दौरान अपने दस्तावेज़ों की मूल गुणवत्ता बनाए रखें।"
      },
      {
        icon: "🆓",
        title: "उपयोग करने के लिए मुफ्त",
        description: "बिना किसी लागत या छिपे हुए शुल्क के हमारे PDF उपकरणों का आनंद लें।"
      }
    ]
  }
};
export const tool: _tool = {
  Merge_PDF: {
    title: "पीडीएफ विलय",
    description: "एक दस्तावेज में कई पीडीएफ फ़ाइलों को जोड़ें",
    color: "var(--red)",
    type: ".pdf",
    to: "/merge-pdf",
  },
  Compress_PDF: {
    title: "पीडीएफ कम्प्रेस करें",
    description: "गुणवत्ता को बनाए रखते हुए एक पीडीएफ फ़ाइल का आकार कम करें",
    color: "var(--green)",
    type: ".pdf",
    to: "/compress-pdf",
  },
  Translate_PDF: {
    title: "PDF, WORD और PowerPoint फ़ाइलों का अनुवाद करें",
    description: "एआई के साथ गहरी और सटीक दस्तावेज़ अनुवाद। फ़ॉर्मेट और डिज़ाइन बनाए रखें, और कई भाषाओं का समर्थन करता है",
    color: "#185abc",
    type: ".pdf",
    to: "/translate-pdf",
  },
  Lock_PDF: {
    title: "PDF लॉक करें",
    description:
      "अनधिकृत पहुंच को रोकने के लिए अपनी पीडीएफ फाइल को पासवर्ड से सुरक्षित करें।",
    color: "#2980b9",
    type: ".pdf",
    to: "/lock-pdf",
  },

  Unlock_PDF: {
    title: "PDF अनलॉक करें",
    description:
      "हमारे उपयोगकर्ता-अनुकूल टूल से आसानी से अपनी पीडीएफ फाइल से पासवर्ड सुरक्षा हटाएं।",
    color: "#3498db",
    type: ".pdf",
    to: "/unlock-pdf",
  },
  PDF_to_Powerpoint: {
    title: "PDF से पावरपॉइंट में",
    description: "PDF फ़ाइलों को संपादनीय पावरपॉइंट प्रस्तुतियों में बदलें",
    color: "#C13B1B",
    type: ".pdf",
    to: "/pdf-to-powerpoint",
  },
  JPG_to_PDF: {
    title: "JPG से पीडीएफ में",
    description: "JPG छवि फ़ाइलों को पीडीएफ दस्तावेजों में बदलें",
    color: "#f1c40f",
    type: ".jpg",
    to: "/jpg-to-pdf",
  },
  WORD_to_PDF: {
    title: "वर्ड से पीडीएफ में",
    description: "माइक्रोसॉफ्ट वर्ड फ़ाइलों को पीडीएफ दस्तावेजों में बदलें",
    color: "#1B5EBE",
    type: ".docx",
    to: "/word-to-pdf",
  },
  POWERPOINT_to_PDF: {
    title: "पावरपॉइंट से पीडीएफ में",
    description: "माइक्रोसॉफ्ट पावरपॉइंट फाइलों को पीडीएफ दस्तावेजों में बदलें",
    color: "#C13B1B",
    type: ".pptx",
    to: "/powerpoint-to-pdf",
  },
  EXCEL_to_PDF: {
    title: "एक्सेल से पीडीएफ में",
    description: "माइक्रोसॉफ्ट एक्सेल फ़ाइलों को पीडीएफ दस्तावेजों में बदलें",
    color: "#10793F",
    type: ".xlsx",
    to: "/excel-to-pdf",
  },
  HTML_to_PDF: {
    title: "HTML से पीडीएफ में",
    description: "HTML वेब पृष्ठों को पीडीएफ दस्तावेजों में बदलें",
    color: "rgb(228, 77, 38)",
    type: ".html",
    to: "/html-to-pdf",
  },

  Markdown_to_PDF: {
    title: "Markdown से पीडीएफ में रूपांतरण",
    description: "Markdown से पीडीएफ में रूपांतरण",
    color: "#6c5ce7",
    type: ".pdf",
    to: "/markdown-to-pdf",
  },

  PDF_to_JPG: {
    title: "PDF से JPG में",
    description: "PDF फ़ाइलों को JPG छवि फ़ाइलों में बदलें",
    color: "#f1c40f",
    type: ".pdf",
    to: "/pdf-to-jpg",
  },
  PDF_to_WORD: {
    title: "PDF से वर्ड में",
    description: "PDF फ़ाइलों को माइक्रोसॉफ्ट वर्ड दस्तावेजों में बदलें",
    color: "#1B5EBE",
    type: ".pdf",
    to: "/pdf-to-word",
  },

  PDF_to_EXCEL: {
    title: "PDF से एक्सेल में",
    description: "PDF फ़ाइलों को माइक्रोसॉफ्ट एक्सेल दस्तावेजों में बदलें",
    color: "#10793F",
    type: ".pdf",
    to: "/pdf-to-excel",
  },

  PDF_to_PDF_A: {
    title: "PDF से PDF/A में",
    description:
      "PDF फ़ाइलों को लंबे समय तक संचय के लिए PDF/A प्रारूप में बदलें",
    color: "#000000",
    type: ".pdf",
    to: "/pdf-to-pdf-a",
  },

  Web_to_PDF: {
    title: "वेब से पीडीएफ",
    description: "वेब पेज को पीडीएफ दस्तावेज में रूपांतरित करें",
    color: "#0984e3",
    type: ".pdf",
    to: "/web-to-pdf",
  },

  PDF_to_Text: {
    title: "पीडीएफ से टेक्स्ट",
    description: "पीडीएफ फाइल को सामान्य टेक्स्ट दस्तावेज में रूपांतरित करें",
    color: "#4493e1",
    type: ".pdf",
    to: "/pdf-to-text",
  },

  PDF_to_HTML: {
    title: "पीडीएफ से एचटीएमएल में",
    description: "पीडीएफ फ़ाइलों को एचटीएमएल दस्तावेज़ों में बदलें",
    color: "rgb(228, 77, 38)",
    type: ".pdf",
    to: "/pdf-to-html",
  },

  PDF_to_Markdown: {
    title: "PDF से मार्कडाउन तक",
    description: "PDF फ़ाइलों को मार्कडाउन प्रारूप में रूपांतरित करें",
    color: "#FF4136",
    type: ".pdf",
    to: "/pdf-to-markdown",
  },
  Add_Watermark: {
    title: "वॉटरमार्क जोड़ें",
    description:
      "पीडीएफ पर छवि या पाठ को विशेष शैली और स्थिति के साथ ओवरले करें।",
    color: "#e55039",
    type: ".pdf",
    to: "/add-watermark",
  },
  Number_PDF: {
    title: "PDF संख्या दें",
    description:
      "अलग-अलग शैलियों और विकल्पों के साथ अपने PDF दस्तावेज़ में पृष्ठ संख्याएँ जोड़ें",
    color: "#e55039",
    type: ".pdf",
    to: "/number-pdf",
  },
  Ocr_PDF: {
    title: "OCR PDF",
    description:
      "सटीक पाठ पहचान और चयन के साथ पीडीएफ को इंटरैक्टिव, खोजने योग्य फ़ाइलों में बदलें।",
    color: "#006266",
    type: ".pdf",
    to: "/ocr-pdf",
  },
  Rotate_PDF: {
    title: "PDF को घुमाएं",
    description:
      "बेहतर पठनीयता और प्रस्तुति के लिए PDF पेज को आसानी से घुमाएं।",
    color: "#10ac84",
    type: ".pdf",
    to: "/rotate-pdf",
  },
  Split_PDF: {
    title: "पीडीएफ विभाजित करें",
    description: "एक पीडीएफ फ़ाइल को कई दस्तावेजों में विभाजित करें",
    color: "var(--orange)",
    type: ".pdf",
    to: "/split-pdf",
  },
  Organize_PDF: {
    title: "पीडीएफ संगठित करें",
    description:
      "अपने पसंदीदा क्रम या क्रम के अनुसार अपने पीडीएफ दस्तावेज़ की पृष्ठों को आसानी से व्यवस्थित करें।",
    color: "#6c5ce7",
    type: ".pdf",
    to: "/organize-pdf",
  },
  Edit_PDF: {
    title: "पीडीएफ संपादित करें",
    description: "हमारे सहज संपादक के साथ अपने PDF दस्तावेज़ों के पाठ, चित्र और लेआउट को संशोधित करें।",
    color: "#3867d6",
    type: ".pdf",
    to: "/edit-pdf",
  },
  PDF_Forms: {
    title: "PDF को भरने योग्य बनाएं",
    description: "किसी भी PDF को भरने योग्य फ़ॉर्म में बदलें। AI फ़ील्ड पहचानता है, या टेक्स्ट बॉक्स, चेकबॉक्स और सिग्नेचर फ़ील्ड खुद जोड़ें।",
    color: "#5f27cd",
    type: ".pdf",
    to: "/pdf-forms",
    badge: "नया",
  },
  Crop_PDF: {
    title: "पीडीएफ क्रॉप करें",
    description: "आवश्यक सामग्री को हाइलाइट करने के लिए अपने PDF पृष्ठों को आसानी से क्रॉप करें।",
    color: "#2d98da",
    type: ".pdf",
    to: "/crop-pdf",
  },
  PDF_Assistant: {
    title: "पीडीएफ सहायक",
    description: "डेटा निष्कर्षण और संक्षेपण जैसी उन्नत PDF कार्यों के लिए AI-संचालित सहायता का उपयोग करें।",
    color: "#38ada9",
    type: ".pdf",
    to: "/assistant",
  },
  Merge_Pages: {
    title: "पृष्ठ मर्ज करें (N-up)",
    description: "कई PDF पृष्ठों को कुशलता से एक पृष्ठ में संयोजित करें, अनुकूलन योग्य लेआउट के साथ।",
    color: "#27ae60",
    type: ".pdf",
    to: "/merge-pages",
  },
  Image_to_PDF: {
    title: "छवि को PDF में बदलें",
    seoTitle: "छवियों को PDF में ऑनलाइन बदलें - मुफ्त कनवर्टर",
    description: "छवि फाइलों (JPG, PNG, BMP, TIFF, GIF, SVG, WebP, HEIF) को PDF दस्तावेजों में बदलें",
    color: "#3498db",
    type: "image",
    to: "/image-to-pdf",
  }
};

export const footer: _footer = {
  brand: "PDFEquips",
  terms: "शर्तें",
  conditions: "उपयोग की शर्तें",
  privacy_policy: "गोपनीयता नीति",
  title: "मुफ्त ऑनलाइन PDF उपकरण"
};

export const errors: _errors = {
  EMPTY_FILE: {
    message: "फ़ाइल खाली है। कृपया एक मान्य फ़ाइल चुनें।",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "फ़ाइल बहुत बड़ी है। कृपया एक छोटी फ़ाइल चुनें या हमारा कंप्रेस-पीडीएफ़ उपकरण उपयोग करके फ़ाइल का आकार कम करें।",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "फ़ाइल एक समर्थित प्रकार नहीं है।",
    types: {
      PDF: "कृपया एक मान्य पीडीएफ़फ़ाइल चुनें।",
      JPG: "कृपया एक मान्य जेपेग छवि फ़ाइल चुनें।",
      DOC: "कृपया एक मान्य वर्ड दस्तावेज़ फ़ाइल चुनें।",
      DOCX: "कृपया एक मान्य वर्ड दस्तावेज़ फ़ाइल चुनें।",
      XLS: "कृपया एक मान्य एक्सेल स्प्रेडशीट फ़ाइल चुनें।",
      XLSX: "कृपया एक मान्य एक्सेल स्प्रेडशीट फ़ाइल चुनें।",
      PPT: "कृपया एक मान्यपावरपॉइंट प्रस्तुति फ़ाइल चुनें।",
      PPTX: "कृपया एक मान्य पावरपॉइंट प्रस्तुति फ़ाइल चुनें।",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message:
      "फ़ाइल का डाटा भ्रष्ट है और इसे प्रसंस्करण नहीं किया जा सकता है। कृपया एक मान्य फ़ाइल चुनें।",
    code: "ERR_FILE_CORRUPT",
  },
  MISSING_FONTS: {
    message:
      "फ़ाइल में फ़ॉन्ट गुम हैं। कृपया सुनिश्चित करें कि पीडीएफफ़ाइल में सभी फ़ॉन्ट एम्बेड हैं।",
    code: "ERR_MISSING_FONTS",
  },
  INVALID_IMAGE_DATA: {
    message:
      "फ़ाइल में अवैध छवि डेटा है। कृपया सुनिश्चित करें कि सभी छवियाँ सही ढंग से फ़ॉर्मेटेड हैं।",
    code: "ERR_INVALID_IMAGE_DATA",
  },
  SECURITY_RISK: {
    message:
      "फ़ाइल में सुरक्षा जोखिम हो सकता है और इसे प्रसंस्करण नहीं किया जा सकता है। कृपया एक मान्य फ़ाइल चुनें।",
    code: "ERR_SECURITY_RISK",
  },
  MAX_FILES_EXCEEDED: {
    message:
      "आपने अनुमति दी हुई अधिकतम फ़ाइलों की संख्या पार कर दी है। कृपया कुछ फ़ाइलें हटाएं और पुनः प्रयास करें।",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message: "कोई फ़ाइल चयनित नहीं की गई है। कृपया कम से कम एक फ़ाइल चुनें।",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message:
      "एक अज्ञात त्रुटि हुई है। कृपया बाद में पुनः प्रयास करें या सहायता से संपर्क करें।",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message:
      "नेटवर्क में त्रुटि हो गई है। कृपया अपना इंटरनेट कनेक्शन जांचें और पुनः प्रयास करें।",
    code: "ERR_NETWORK",
  },

  ERR_UPLOAD_COUNT: {
    message: "कृपया फ्यूजन करने के लिए कम से कम दो फ़ाइलें अपलोड करें।",
    code: "ERR_UPLOAD_COUNT",
  },
};
