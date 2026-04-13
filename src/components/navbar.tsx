import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-black/95 backdrop-blur-md border-b border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="font-orbitron text-xl font-bold text-white">
              KNI<span className="text-red-500">FE</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#about" className="font-geist text-white hover:text-red-500 transition-colors duration-200">
                Биография
              </a>
              <a href="#join" className="font-geist text-white hover:text-red-500 transition-colors duration-200">
                Участие в съёмках
              </a>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <a href="https://www.youtube.com/@KNIFE_stanik" target="_blank" rel="noopener noreferrer">
              <Button className="bg-red-500 hover:bg-red-600 text-white font-geist border-0">YouTube</Button>
            </a>
            <a href="https://t.me/knife_stonic" target="_blank" rel="noopener noreferrer">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white font-geist border-0">Telegram</Button>
            </a>
            <a href="https://discord.gg/aATeagGf4y" target="_blank" rel="noopener noreferrer">
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white font-geist border-0">Discord</Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-red-500 transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/98 border-t border-red-500/20">
              <a
                href="#about"
                className="block px-3 py-2 font-geist text-white hover:text-red-500 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Биография
              </a>
              <a
                href="#join"
                className="block px-3 py-2 font-geist text-white hover:text-red-500 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Участие в съёмках
              </a>
              <div className="px-3 py-2 flex flex-col gap-2">
                <a href="https://www.youtube.com/@KNIFE_stanik" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-red-500 hover:bg-red-600 text-white font-geist border-0">YouTube</Button>
                </a>
                <a href="https://t.me/knife_stonic" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-geist border-0">Telegram</Button>
                </a>
                <a href="https://discord.gg/aATeagGf4y" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-geist border-0">Discord</Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}