import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "../LanguageContext";

export default function AboutSection() {
    const {t} = useLanguage();
  return (
    <main id="about" className="flex flex-col md:flex-row justify-between items-start gap-10 px-6 py-20 max-w-6xl mx-auto">
          <section className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4 text-gray-100 flex items-center gap-4">
                    <GraduationCap /> {t("about_edu")}</h2>
            <Card className="bg-black text-white pl-2 hover:border-purple-500 transition-colors duration-300 mb-4">
                <div className="flex items-center gap-4">
                    <Image src="/baskent2.jpg" width={60} height={60} alt="Başkent Üniversitesi" />
                    
                    <div className=" text-sm md:text-lg text-gray-300 whitespace-nowrap">
                    {t("edu_one")}<br />
                    {t("edu_section_one")}
                    </div>
                </div>
            </Card>
            <Card className="bg-black text-white pl-2 hover:border-purple-500 transition-colors duration-300">
                <div className="flex items-center gap-4">
                    <Image src="/acunmedya.png" width={50} height={50} alt="Acunmedya Akademi" />
                    
                    <div className=" text-sm md:text-lg text-gray-300 whitespace-nowrap">
                    {t("edu_two")}<br />
                    {t("edu_section_two")}
                    </div>
                </div>
            </Card>
          </section>

          <section className="w-full md:w-1/2 space-y-4">
            <h1 className="text-3xl md:text-4xl font-light text-gray-100">
              {t("hero_title")} <span className="italic font-semibold whitespace-nowrap text-2xl md:text-3xl">Hande Eylül Memikoğlu</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed space-y-2 text-justify">
                {t("hero_description_part1")}{" "}
                <span className="relative inline-block">
                    <span className="relative z-10 italic">{t("hero_highlight_bring_to_life")}</span>
                    <svg
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                    className="absolute bottom-0 left-0 w-full h-2 z-0"
                    >
                    <path d="M0,5 C20,10 80,0 100,5" fill="none" stroke="#4ade80" strokeWidth="4" />
                    </svg>
                </span>{" "}
                {t("hero_description_part2")}{" "}
                <span className="relative inline-block">
                    <span className="relative z-10 italic">{t("hero_highlight_passion")}</span>
                    <svg
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                    className="absolute bottom-0 left-0 w-full h-2 z-0"
                    >
                    <path d="M0,5 C20,10 80,0 100,5" fill="none" stroke="#4ade80" strokeWidth="4" />
                    </svg>
                </span>
                .{t("hero_description_part3")},{" "}
                <span className="relative inline-block">
                    <span className="relative z-10 italic">{t("hero_highlight_user_friendly")}</span>
                    <svg
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                    className="absolute bottom-0 left-0 w-full h-2 z-0"
                    >
                    <path d="M0,5 C20,10 80,0 100,5" fill="none" stroke="#4ade80" strokeWidth="4" />
                    </svg>
                </span>{" "}
                {t("hero_description_part4")}{" "}
                <span className="relative inline-block">
                    <span className="relative z-10 italic">{t("hero_highlight_learning")}</span>
                    <svg
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                    className="absolute bottom-0 left-0 w-full h-2 z-0"
                    >
                    <path d="M0,5 C20,10 80,0 100,5" fill="none" stroke="#4ade80" strokeWidth="4" />
                    </svg>
                </span>{" "}
                {t("hero_description_part5")}{" "}
                <span className="relative inline-block">
                    <span className="relative z-10 italic">{t("hero_highlight_aesthetics")}</span>
                    <svg
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                    className="absolute bottom-0 left-0 w-full h-2 z-0"
                    >
                    <path d="M0,5 C20,10 80,0 100,5" fill="none" stroke="#4ade80" strokeWidth="4" />
                    </svg>
                </span>{" "}
                {t("hero_description_part6")}
            </p>

          </section>
    </main>
  );
}