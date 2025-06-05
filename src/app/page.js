"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import { BlurFade } from "@/components/magicui/blur-fade"; // Buradan gelir
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white">
      <Header />

      <BlurFade className="flex flex-col md:flex-row items-center justify-between px-8 pt-32 pb-32 max-w-6xl mx-auto gap-12">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-6xl  leading-tight">
            Yaptığım İşlere Göz Atmaya Ne Dersiniz?
          </h1>
          <p className="border border-white rounded-full inline-block px-6 py-2 text-xs md:text-sm">
            Hande Eylül Memikoğlu / Junior Web Developer
          </p>
          <a href="#contact">
            <Button
              variant="ghost"
              className="text-white ml-4 border border-white rounded-full"
            >
              Benimle Çalışın →
            </Button>
          </a>
        </div>

        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <div className="w-72 h-96 rounded-full overflow-hidden">
            <Image
              src="/avatar.jpg"
              alt="Hande Eylül Memikoğlu"
              width={300}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </BlurFade>

      <BlurFade className="px-8 pt-50">
        <AboutSection />
      </BlurFade>

      <BlurFade className="px-8 pt-12 pb-32">
        <ProjectsSection />
      </BlurFade>
      <BlurFade className="px-8 pt-12 pb-32">
        <ContactSection />
      </BlurFade>
    </main>
  );
}
