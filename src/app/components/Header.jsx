"use client";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { BookUser, Code, Menu, Phone } from "lucide-react";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { useLanguage } from "../LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const { t, language, setLanguage } = useLanguage();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black text-white flex justify-between items-center px-6 py-4 shadow-md">
      <ScrollProgress className="fixed top-0 left-0 right-0 h-1 z-50" />

      <div className="text-lg font-bold">Hande Eylül Memikoğlu</div>

      <nav className="hidden md:flex items-center space-x-6">
        <Link href="#about" className="hover:underline">
          {t("menu_about")}
        </Link>
        <Link href="#projects" className="hover:underline">
          {t("menu_projects")}
        </Link>
        <Link href="#contact" className="hover:underline">
          {t("menu_contact")}
        </Link>

        <div className="ml-4">
          <LanguageSwitcher/>
        </div>

      </nav>

      <div className="md:hidden flex items-center gap-2">
        <LanguageSwitcher/>
        <Sheet>
          <SheetTrigger>
            <Menu className="w-6 h-6" />
          </SheetTrigger>
          <SheetContent side="left" className="bg-black/70 text-white backdrop-blur-md">
            <nav className="flex flex-col gap-4 mt-8">
              <Link href="#about" className="flex items-center gap-2">
                <BookUser className="w-[22px] h-[22px] ml-2" />
                {t("menu_about")}
              </Link>
              <Link href="#projects" className="flex items-center gap-2">
                <Code className="w-[22px] h-[22px] ml-2" />
                {t("menu_projects")}
              </Link>
              <Link href="#contact" className="flex items-center gap-2">
                <Phone className="w-[22px] h-[22px] ml-2" />
                {t("menu_contact")}
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
