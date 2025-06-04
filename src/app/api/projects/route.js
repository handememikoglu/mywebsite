// app/api/projects/route.js

const projects = [
  {
    title: "Kütüphane Uygulaması",
    imageSrc: "/baskent.png",
    description:
      "Kullanıcıların kitap ekleyip okuma verilerini takip ettiği bir uygulama.",
    technologies: ["React", "Tailwind", "localStorage"],
    github: "https://github.com/kullanici/library-app",
    vercel: "https://library-app.vercel.app",
  },
  {
    title: "IP Konum Haritası",
    imageSrc: "/baskent.png",
    description:
      "Kullanıcının IP adresini kullanarak konumunu haritada gösteren uygulama.",
    technologies: ["JavaScript", "Leaflet.js", "ipapi"],
    github: "https://github.com/kullanici/ip-tracker",
    vercel: "https://ip-tracker.vercel.app",
  },
];

export async function GET() {
  return Response.json(projects);
}
