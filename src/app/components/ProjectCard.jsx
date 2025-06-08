"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Github, Triangle } from "lucide-react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import Image from "next/image"

export default function ProjectCard({ title, images = [], description, techs = [], github, demo }) {
  const [open, setOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openModal = (index) => {
    setCurrentIndex(index)
    setOpen(true)
  }

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <>
      <Card className="w-full max-w-5xl mx-auto mb-8 shadow-md hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-[45%] space-y-2">
            <div
              className="aspect-video w-full overflow-hidden rounded-lg  cursor-pointer"
              onClick={() => openModal(0)}
            >
              <img
                src={images?.[0] || "/placeholder.jpg"}
                alt={`${title} görsel 1`}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex gap-2 overflow-x-auto">
              {images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`thumb-${i}`}
                  className="w-16 h-16 object-cover rounded-md cursor-pointer hover:ring-2 ring-primary"
                  onClick={() => openModal(i)}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between gap-4 md:w-1/2">
            <div className="flex flex-wrap gap-2">
              {techs.map((tech, i) => (
                <Badge key={i} variant="outline">{tech}</Badge>
              ))}
            </div>

            <Separator />

            <p className="text-muted-foreground text-sm text-justify">{description}</p>

            <div className="flex gap-3 mt-4 items-center">
              {github && (
                <Button variant="outline" asChild>
                  <a href={github} target="_blank" rel="noopener noreferrer"><Github className="mr-2" /> GitHub</a>
                </Button>
              )}
              {demo && (
                <Button asChild>
                  <a href={demo} target="_blank" rel="noopener noreferrer"> <Image src="./vercel-icon.svg" width={12} height={12}alt="vercel icon" />  Vercel</a>
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-full max-w-4xl p-4">
          <DialogTitle className="hidden">Dialog Başlığı</DialogTitle>
          <div className="relative w-full h-[500px]  flex items-center justify-center rounded-lg">
            <img
              src={images[currentIndex]}
              alt={`Modal görsel ${currentIndex + 1}`}
              className="max-w-full max-h-full object-contain"
            />

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700"
              onClick={prevImage}
            >
              ‹
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700"
              onClick={nextImage}
            >
              ›
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
