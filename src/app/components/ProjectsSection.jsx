import ProjectCard from "./ProjectCard"

export default function ProjectsPage() {
  const projects = [
    {
    title: "Interactive Card App",
    images: [ 
      "/card-1.jpg",
      "/card-2.jpg",
      "/card-3.jpg",
      "/card-4.jpg"
    ],
    description: "Kullanıcıların kredi veya banka kartı bilgilerini gerçek zamanlı olarak görselleştirmelerine olanak sağlayan interaktif bir kart uygulamasıdır. Kullanıcı, kart numarasını girdikçe kart üzerindeki bilgiler anında güncellenir ve kartın Visa mı yoksa MasterCard mı olduğu otomatik olarak tespit edilir. Kullanıcı dostu arayüzü sayesinde, kart bilgileri yazılırken aynı anda kartın ön yüzünde nasıl görüneceği kolayca görülebilir. Bu uygulama, hem görsel hem de işlevsel açıdan kart bilgilerini kontrol etmek isteyenler için pratik ve eğlenceli bir deneyim sunar.",
    techs: ["Next.js", "Tailwind CSS", "Shadcn UI","Zod"],
    github: "https://github.com/handememikoglu/interactive-card.git",
    demo: "https://interactive-card-2po5.vercel.app/",
  },
  {
    title: "Space Explorer",
    images: [ 
      "/space-1.jpg",
      "/space-2.jpg",
      "/space-3.jpg"
    ],
    description: "Uzay temalı, interaktif bir keşif platformudur. Kullanıcılar; üç farklı gezegen hakkında bilgi edinebilir, astronot ekibini tanıyabilir ve her yolculukta kullanılan gelişmiş teknolojileri keşfedebilirler. Tamamen statik yapıda geliştirilen bu proje, animasyonlar ve gezinme efektleriyle zenginleştirilmiş bir kullanıcı deneyimi sunar. Sayfalar arası geçişlerde, gezegenler, mürettebat ve teknolojiler arasında bağlantılı bir yapı kurulmuştur. Proje, responsive tasarım prensipleriyle uyumlu şekilde çalışır.",
    techs: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/handememikoglu/space.git",
    demo: "https://space-rust-gamma.vercel.app/",
  },
  
]


  return (
    <section id="projects" className="scroll-mt-24 pt-20">
      <a href="#projects" className="hover:underline text-4xl font-medium flex justify-center mb-10">Projelerim</a>
      <div className="grid gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  )
}
