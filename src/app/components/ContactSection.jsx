import { BorderBeam } from "@/components/magicui/border-beam"
import { Button } from "@/components/ui/button"
import { Github, Linkedin } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="max-w-3xl mx-auto px-6 py-24 text-center space-y-8 relative">
      <h2 className="text-4xl md:text-5xl font-bold"> Benimle İletişime Geçin!</h2>
      <p className="text-muted-foreground text-lg">
        Her türlü soru, proje teklifi ya da iş birliği için bana ulaşabilirsiniz.
      </p>

      {/* Border Beam Buton */}
      <div className="inline-block relative">
        <a href="mailto:handememikoglu@gmail.com">
          <Button className="relative overflow-hidden" size="lg">
            Mail Göndermek İçin Tıklayın
            <BorderBeam
                size={50} duration={4} delay={0} reverse
            />
        </Button>
        </a>
      </div>

      <div className="flex justify-center gap-6 pt-6">
        <a
          href="https://github.com/handememikoglu"
          target="_blank"
          rel="noopener noreferrer"
          className="border p-4 rounded-lg"
        >
          <Github className="w-8 h-8" />
        </a>
        <a
          href="https://linkedin.com/in/handeeylulmemikoglu"
          target="_blank"
          rel="noopener noreferrer"
          className="border p-4 rounded-lg "
        >
          <Linkedin  className="w-8 h-8" />
        </a>
      </div>
    </section>
  )
}
