import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <main id="about" className="flex flex-col md:flex-row justify-between items-start gap-10 px-6 py-20 max-w-6xl mx-auto">
          <section className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4 text-gray-100 flex items-center gap-4">
                    <GraduationCap /> Eğitim</h2>
            <Card className="bg-black text-white pl-2 hover:border-purple-500 transition-colors duration-300 mb-4">
                <div className="flex items-center gap-4">
                    <Image src="/baskent2.jpg" width={60} height={60} alt="Başkent Üniversitesi" />
                    
                    <div className="text-lg text-gray-300">
                    Başkent Üniversitesi<br />
                    Biyomedikal Mühendisliği
                    </div>
                </div>
            </Card>
            <Card className="bg-black text-white pl-2 hover:border-purple-500 transition-colors duration-300">
                <div className="flex items-center gap-4">
                    <Image src="/acunmedya.png" width={50} height={50} alt="Acunmedya Akademi" />
                    
                    <div className="text-lg text-gray-300">
                    Acunmedya Akademi<br />
                    Front-End Eğitimi
                    </div>
                </div>
            </Card>
          </section>

          <section className="w-full md:w-1/2 space-y-4">
            <h1 className="text-3xl md:text-4xl font-light text-gray-100">
              Merhaba! Ben <span className="italic font-semibold">Hande Eylül Memikoğlu</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed space-y-2 text-justify">
                Web arayüzleri kodlamak ve onları{" "}
                <span className="relative inline-block">
                    <span className="relative z-10 italic">hayata geçirmek</span>
                    <svg
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                    className="absolute bottom-0 left-0 w-full h-2 z-0"
                    >
                    <path d="M0,5 C20,10 80,0 100,5" fill="none" stroke="#4ade80" strokeWidth="4" />
                    </svg>
                </span>{" "}
                benim için hem bir iş hem de bir{" "}
                <span className="relative inline-block">
                    <span className="relative z-10 italic">tutku</span>
                    <svg
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                    className="absolute bottom-0 left-0 w-full h-2 z-0"
                    >
                    <path d="M0,5 C20,10 80,0 100,5" fill="none" stroke="#4ade80" strokeWidth="4" />
                    </svg>
                </span>
                . Modern,{" "}
                <span className="relative inline-block">
                    <span className="relative z-10 italic">kullanıcı dostu</span>
                    <svg
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                    className="absolute bottom-0 left-0 w-full h-2 z-0"
                    >
                    <path d="M0,5 C20,10 80,0 100,5" fill="none" stroke="#4ade80" strokeWidth="4" />
                    </svg>
                </span>{" "}
                ve şık tasarımlar yapmak için kodlarla ve tasarımla oynamayı çok seviyorum. Her gün{" "}
                <span className="relative inline-block">
                    <span className="relative z-10 italic">yeni şeyler öğrenmek</span>
                    <svg
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                    className="absolute bottom-0 left-0 w-full h-2 z-0"
                    >
                    <path d="M0,5 C20,10 80,0 100,5" fill="none" stroke="#4ade80" strokeWidth="4" />
                    </svg>
                </span>{" "}
                ve projeler üretmek beni heyecanlandırıyor. Teknolojiyi{" "}
                <span className="relative inline-block">
                    <span className="relative z-10 italic">estetikle birleştirerek</span>
                    <svg
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                    className="absolute bottom-0 left-0 w-full h-2 z-0"
                    >
                    <path d="M0,5 C20,10 80,0 100,5" fill="none" stroke="#4ade80" strokeWidth="4" />
                    </svg>
                </span>{" "}
                herkesin keyifle kullanacağı dijital deneyimler yaratmak benim hedefim!
            </p>

          </section>
    </main>
  );
}