'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const navigation = [
  { name: 'Início', href: '/' },
  { name: 'Sobre Nós', href: '/sobre-nos' },
  { name: 'O que Fazemos', href: '/o-que-fazemos' },
  { name: 'Transparência', href: '/transparencia' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contato', href: '/contato' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0579d64b-a946-413e-b4b6-51df69919e9b.png" 
                alt="Instituto Impactus" 
                className="h-10 w-auto"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/seja-parceiro">
              <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                Seja Parceiro
              </Button>
            </Link>
            <Link href="/doe-agora">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                Doe Agora
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden p-2">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-amber-600 font-medium py-2 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                  <Link href="/seja-parceiro" onClick={() => setIsOpen(false)}>
                    <Button variant="outline" className="w-full border-amber-600 text-amber-600 hover:bg-amber-50">
                      Seja Parceiro
                    </Button>
                  </Link>
                  <Link href="/doe-agora" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                      Doe Agora
                    </Button>
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
