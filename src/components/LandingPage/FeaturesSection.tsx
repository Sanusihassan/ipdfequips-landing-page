import React, { type FunctionComponent } from "react";
import {
  DocumentDuplicateIcon,
  PresentationChartBarIcon,
  ScissorsIcon,
  DocumentTextIcon,
  TableIcon,
  DocumentIcon,
  PhotographIcon,
  LockOpenIcon,
  RefreshIcon,
  DocumentAddIcon,
  GlobeIcon,
  TranslateIcon,
  CodeIcon,
} from "@heroicons/react/outline";
import CompressIcon from "../icons/compressIcon";
import type { tool } from "../../content";
import { LockClosedIcon } from "@heroicons/react/solid";
import StampIcon from "../../NavBar/icons/StampIcon";
import OcrIcon from "./OcrIcon";
import NumbersIcon from "../../NavBar/icons/Numbers";
import OrganizePDFIcon from "../icons/OrganizePDF";
import MarkdownIcon from "../../NavBar/icons/Markdown";

export const FeaturesSection = ({
  tool,
  lang,
  title,
  description,
}: {
  tool: tool;
  lang: string;
  title: string;
  description: string;
}) => {
  let langPath = lang ? `/${lang}` : "";
  const languages = ["ar", "fr", "zh", "hi", "es"];
  const regex = new RegExp(`\\/(${languages.join("|")})|\\/+`, "g");
  const featureCards = [
    {
      title: tool.Merge_PDF.title,
      description: tool.Merge_PDF.description,
      to: `${langPath}${tool.Merge_PDF.to}`,
      color: tool.Merge_PDF.color as string,
      icon: DocumentDuplicateIcon,
    },
    {
      title: tool.Split_PDF.title,
      description: tool.Split_PDF.description,
      to: `${langPath}${tool.Split_PDF.to}`,
      color: tool.Split_PDF.color as string,
      icon: ScissorsIcon,
    },
    {
      title: tool.Compress_PDF.title,
      description: tool.Compress_PDF.description,
      to: `${langPath}${tool.Compress_PDF.to}`,
      color: tool.Compress_PDF.color as string,
      icon: CompressIcon,
    },
    {
      title: tool.Translate_PDF.title,
      description: tool.Translate_PDF.description,
      to: `${langPath}${tool.Translate_PDF.to}`,
      color: tool.Translate_PDF.color as string,
      icon: TranslateIcon,
    },
    {
      title: tool.PDF_to_Text.title,
      description: tool.PDF_to_Text.description,
      to: `${langPath}${tool.PDF_to_Text.to}`,
      color: tool.PDF_to_Text.color as string,
      icon: DocumentTextIcon,
    },
    {
      title: tool.PDF_to_Powerpoint.title,
      description: tool.PDF_to_Powerpoint.description as string,
      to: `${langPath}${tool.PDF_to_Powerpoint.to}`,
      color: tool.PDF_to_Powerpoint.color as string,
      icon: PresentationChartBarIcon,
    },
    {
      title: tool.PDF_to_EXCEL.title,
      description: tool.PDF_to_EXCEL.description as string,
      to: `${langPath}${tool.PDF_to_EXCEL.to}`,
      color: tool.PDF_to_EXCEL.color as string,
      icon: TableIcon,
    },
    {
      title: tool.WORD_to_PDF.title,
      description: tool.WORD_to_PDF.description as string,
      to: `${langPath}${tool.WORD_to_PDF.to}`,
      color: tool.WORD_to_PDF.color as string,
      icon: DocumentIcon,
    },
    {
      title: tool.PDF_to_WORD.title,
      description: tool.PDF_to_WORD.description as string,
      to: `${langPath}${tool.PDF_to_WORD.to}`,
      color: tool.PDF_to_WORD.color as string,
      icon: DocumentIcon,
    },
    {
      title: tool.Ocr_PDF.title,
      description: tool.Ocr_PDF.description as string,
      to: `${langPath}${tool.Ocr_PDF.to}`,
      color: tool.Ocr_PDF.color as string,
      icon: OcrIcon,
    },
    {
      title: tool.POWERPOINT_to_PDF.title,
      description: tool.POWERPOINT_to_PDF.description as string,
      to: `${langPath}${tool.POWERPOINT_to_PDF.to}`,
      color: tool.POWERPOINT_to_PDF.color as string,
      icon: PresentationChartBarIcon,
    },
    {
      title: tool.Add_Watermark.title,
      description: tool.Add_Watermark.description as string,
      to: `${langPath}${tool.Add_Watermark.to}`,
      color: tool.Add_Watermark.color as string,
      icon: StampIcon,
    },
    {
      title: tool.Rotate_PDF.title,
      description: tool.Rotate_PDF.description as string,
      to: `${langPath}${tool.Rotate_PDF.to}`,
      color: tool.Rotate_PDF.color as string,
      icon: RefreshIcon,
    },
    {
      title: tool.PDF_to_JPG.title,
      description: tool.PDF_to_JPG.description as string,
      to: `${langPath}${tool.PDF_to_JPG.to}`,
      color: tool.PDF_to_JPG.color as string,
      icon: PhotographIcon,
    },
    {
      title: tool.Markdown_to_PDF.title,
      description: tool.Markdown_to_PDF.description as string,
      to: `${langPath}${tool.Markdown_to_PDF.to}`,
      color: tool.Markdown_to_PDF.color as string,
      icon: MarkdownIcon,
    },
    {
      title: tool.Lock_PDF.title,
      description: tool.Lock_PDF.description as string,
      to: `${langPath}${tool.Lock_PDF.to}`,
      color: tool.Lock_PDF.color as string,
      icon: LockClosedIcon,
    },
    {
      title: tool.Unlock_PDF.title,
      description: tool.Unlock_PDF.description as string,
      to: `${langPath}${tool.Unlock_PDF.to}`,
      color: tool.Unlock_PDF.color as string,
      icon: LockOpenIcon,
    },
    {
      title: tool.Organize_PDF.title,
      description: tool.Organize_PDF.description as string,
      to: `${langPath}${tool.Organize_PDF.to}`,
      color: tool.Organize_PDF.color as string,
      icon: OrganizePDFIcon,
    },
    {
      title: tool.Number_PDF.title,
      description: tool.Number_PDF.description as string,
      to: `${langPath}${tool.Number_PDF.to}`,
      color: tool.Number_PDF.color as string,
      icon: NumbersIcon,
    },
    {
      title: tool.PDF_to_PDF_A.title,
      description: tool.PDF_to_PDF_A.description as string,
      to: `${langPath}${tool.PDF_to_PDF_A.to}`,
      color: tool.PDF_to_PDF_A.color as string,
      icon: DocumentAddIcon,
    },
    {
      title: tool.Web_to_PDF.title,
      description: tool.Web_to_PDF.description as string,
      to: `${langPath}${tool.Web_to_PDF.to}`,
      color: tool.Web_to_PDF.color as string,
      icon: GlobeIcon,
    },
    {
      title: tool.PDF_to_HTML.title,
      description: tool.PDF_to_HTML.description as string,
      to: `${langPath}${tool.PDF_to_HTML.to}`,
      color: tool.PDF_to_HTML.color as string,
      icon: CodeIcon,
    },
    {
      title: tool.JPG_to_PDF.title,
      description: tool.JPG_to_PDF.description as string,
      to: `${langPath}${tool.JPG_to_PDF.to}`,
      color: tool.JPG_to_PDF.color as string,
      icon: PhotographIcon,
    },
    {
      title: tool.PDF_to_Markdown.title,
      description: tool.PDF_to_Markdown.description as string,
      to: `${langPath}${tool.PDF_to_Markdown.to}`,
      color: tool.PDF_to_Markdown.color as string,
      icon: MarkdownIcon,
    },
  ];

  return (
    <section className="features-section py-5">
      <div className="container">
        <h2 className="title">{title}</h2>{" "}
        <p className="descripiton">{description}</p>
        <div className="features">
          {featureCards.map((card, index) => (
            <div key={index} className="feature">
              <div className={`text-decoration-none text-dark ${card.to}`}>
                <a
                  href={
                    // "https://3000-sanusihassan-pdfequips-x5kvhyduops.ws-eu107.gitpod.io/" +
                    card.to + "/"
                  }
                  className="link"
                  title={card.title}
                // onClick={() => {
                //   return dispatch(setPath(path));
                // }}
                >
                  <div className={`feature-card card ${card.to.replace(regex, "")}`}>
                    <div className="feature-icon">
                      {React.createElement(card.icon as FunctionComponent<{ className: string; style: { [x: string]: string; }; }>, {
                        className: "h6 w6",
                        style: {
                          [card.icon === CompressIcon ||
                            card.icon === StampIcon ||
                            card.icon === OcrIcon ||
                            card.icon === NumbersIcon ||
                            card.icon === OrganizePDFIcon
                            ? "fill"
                            : "color"]: card.color,
                        },
                      })}
                    </div>
                    <div className="card-body">
                      <div className="card-title _h3">
                        <bdi>{card.title}</bdi>
                      </div>
                      <p className="card-text">
                        <bdi>{card.description}</bdi>
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
