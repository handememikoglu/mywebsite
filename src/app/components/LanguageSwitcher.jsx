import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/app/LanguageContext"
import { ChevronDown } from "lucide-react"

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const flagSrc = {
    tr: "https://flagcdn.com/tr.svg",
    en: "https://flagcdn.com/gb.svg",
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2  rounded-md">
          <img
            src={flagSrc[language]}
            alt={language === "tr" ? "Türkçe" : "English"}
            className="w-8 h-4 rounded-sm"
          />
          <ChevronDown className="w-4 h-4"/>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="bg-white text-black">
        <DropdownMenuItem
          onClick={() => setLanguage("tr")}
          className="flex items-center gap-2"
        >
          <img src={flagSrc.tr} alt="Türkçe" className="w-6 h-4 rounded-sm" />
          Türkçe
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage("en")}
          className="flex items-center gap-2"
        >
          <img src={flagSrc.en} alt="English" className="w-6 h-4 rounded-sm" />
          English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
