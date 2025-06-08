import { useLanguage } from "../LanguageContext";
import ProjectCard from "./ProjectCard";

export default function ProjectsPage() {
  const {t} = useLanguage();

  const projects = [
    {
      title: t("project1_title"),
      images: ["/card-1.jpg", "/card-2.jpg", "/card-3.jpg", "/card-4.jpg"],
      description: t("project1_description"),
      techs: ["Next.js", "Tailwind CSS", "Shadcn UI", "Zod"],
      github: "https://github.com/handememikoglu/interactive-card.git",
      demo: "https://interactive-card-2po5.vercel.app/",
    },
    {
      title: t("project2_title"),
      images: ["/space-1.jpg", "/space-2.jpg", "/space-3.jpg"],
      description: t("project2_description"),
      techs: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/handememikoglu/space.git",
      demo: "https://space-rust-gamma.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="scroll-mt-24 pt-20">
      <a
        href="#projects"
        className="hover:underline text-4xl font-medium flex justify-center mb-10"
      >
        {t("projects_title")}
      </a>
      <div className="grid gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
