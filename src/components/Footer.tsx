import type { footer } from "../content";
import LanguageDropdown from "../NavBar/components/LanguageDropdown.tsx";
import { getNavContent } from "../NavBar/getNavContent.ts";

const Footer = ({ footer, lang }: { footer: footer; lang: string }) => {
  let text = "Compress & Merge PDF";
  const nav_content = getNavContent(lang);

  if (lang === "ar") {
    text = "ضغط ودمج ملفات PDF";
  } else if (lang === "fr") {
    text = "Compresser et fusionner des fichiers PDF";
  } else if (lang === "es") {
    text = "Comprimir y fusionar archivos PDF";
  } else if (lang === "hi") {
    text = "पीडीएफ को संपीड़ित और मर्ज करें";
  } else if (lang === "zh") {
    text = "压缩和合并PDF文件";
  }
  return (
    <footer id="footer">
      <div className="container">
        <div className="row-1">
          <div className="col">
            <div className="_h4">{nav_content.convert_to_pdf}</div>
            <ul className="list-group">
              <li>
                <a
                  href={`https://www.pdfequips.com/${lang == "" ? "" : lang + "/"
                    }jpg-to-pdf/`}
                  className="link"
                >
                  {nav_content.convert_to.jpg_to_pdf}
                </a>
              </li>
              <li>
                <a
                  href={`https://www.pdfequips.com/${lang == "" ? "" : lang + "/"
                    }word-to-pdf/`}
                  className="link"
                >
                  {nav_content.convert_to.word_to_pdf}
                </a>
              </li>
              <li>
                <a
                  href={`https://www.pdfequips.com/${lang == "" ? "" : lang + "/"
                    }powerpoint-to-pdf/`}
                  className="link"
                >
                  {nav_content.convert_to.powerpoint_to_pdf}
                </a>
              </li>
              <li>
                <a
                  href={`https://www.pdfequips.com/${lang == "" ? "" : lang + "/"
                    }excel-to-pdf/`}
                  className="link"
                >
                  {nav_content.convert_to.excel_to_pdf}
                </a>
              </li>
              <li>
                <a
                  href={`https://www.pdfequips.com/${lang == "" ? "" : lang + "/"
                    }html-to-pdf/`}
                  className="link"
                >
                  {nav_content.convert_to.html_to_pdf}
                </a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h3 className="_h4">{nav_content.convert_from_pdf}</h3>
            <ul className="list-unstyled list-group">
              <li>
                <a
                  href={`https://www.pdfequips.com/${lang == "" ? "" : lang + "/"
                    }pdf-to-jpg/`}
                  className="link"
                >
                  {nav_content.convert_from.pdf_to_jpg}
                </a>
              </li>
              <li>
                <a
                  href={`https://www.pdfequips.com/${lang == "" ? "" : lang + "/"
                    }pdf-to-word/`}
                  className="link"
                >
                  {nav_content.convert_from.pdf_to_word}
                </a>
              </li>
              <li>
                <a
                  href={`https://www.pdfequips.com/${lang == "" ? "" : lang + "/"
                    }pdf-to-powerpoint/`}
                  className="link"
                >
                  {nav_content.convert_from.pdf_to_powerpoint}
                </a>
              </li>
              <li>
                <a
                  href={`https://www.pdfequips.com/${lang == "" ? "" : lang + "/"
                    }pdf-to-excel/`}
                  className="link"
                >
                  {nav_content.convert_from.pdf_to_excel}
                </a>
              </li>
              <li>
                <a
                  href={`https://www.pdfequips.com/${lang == "" ? "" : lang + "/"
                    }pdf-to-pdf-a/`}
                  className="link"
                >
                  {nav_content.convert_from.pdf_to_pdf_a}
                </a>
              </li>
              <li>
                <a
                  href={`https://www.pdfequips.com/${lang == "" ? "" : lang + "/"
                    }pdf-to-text/`}
                  className="link"
                >
                  {nav_content.convert_from.pdf_to_text}
                </a>
              </li>
            </ul>
          </div>
          <div className="col col-3">
            <h4>{text}</h4>
            <ul className="list-group">
              <li>
                <a
                  href={`https://www.pdfequips.com/${lang == "" ? "" : lang + "/"
                    }compress-pdf/`}
                  className="link"
                >
                  {nav_content.compress}
                </a>
              </li>
              <li>
                <a
                  href={`https://www.pdfequips.com/${lang == "" ? "" : lang + "/"
                    }merge-pdf/`}
                  className="link"
                >
                  {nav_content.merge}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row-2">
          <div
            className="copyright-row"
          >
            <nav className="navbar lang-dropdown m-0 no-shadow">
              <LanguageDropdown id="custom-lang-dropdown" />
            </nav>
            <p className="copyright-text col text-muted mb-0 py-0">
              {footer.brand} &copy; {new Date().getFullYear()} &#174; - {footer.title}
            </p>
          </div>
          <div className="col terms-col">
            <ul className="terms-row">
              {/* <li className="mx-3">
                <a href="#" className="text-muted">
                  {footer.terms} &amp; {footer.conditions}
                </a>
              </li> */}
              <li className="privacy-policy">
                <a href="/privacy-policy" className="text-muted">
                  {footer.privacy_policy}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
