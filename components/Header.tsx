import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-B5qXrsNUK3tvElD9RrGaC6lKV1LntN.png"
            alt="Ulul Arham Premier League"
            width={60}
            height={60}
            className="h-12 w-auto"
          />
          <h1 className="text-xl font-bold hidden md:block">
            Ulul Arham Premier League 2025
          </h1>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </header>
  )
}

