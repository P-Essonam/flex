"use client"

import Link from "next/link"
import { X, Search, MapPin, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface MobileMenuProps {
  toggleMenu: () => void
}

export function MobileMenu({ toggleMenu }: MobileMenuProps) {
  return (
    <>
      {/* Overlay semi-transparent */}
      <div className="fixed inset-0 bg-black/50 z-40" onClick={toggleMenu} />
      
      {/* Menu Sheet */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white rounded-b-[20px] shadow-lg">
        {/* Header */}
        <div className="border-b">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16 md:h-20">
              <div className="flex items-center">
                {/* Close Button */}
                <button onClick={toggleMenu} className="p-2 rounded-full hover:bg-gray-100" aria-label="Close menu">
                  <X className="h-6 w-6 text-gray-600" />
                </button>

                {/* Logo */}
                <Link href="/" className="font-bold text-2xl tracking-wider text-cyan-500 ml-6">
                  RESORTPASS
                </Link>
              </div>

              {/* Search Bar */}
              <div className="flex-1 max-w-xl mx-4">
                <div className="flex items-center gap-2">
                  <div className="flex-1 relative">
                    <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input defaultValue="Phoenix, Arizona" className="pl-10 h-12" />
                  </div>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input defaultValue="Apr 24" className="pl-10 h-12 w-32" />
                  </div>
                  <Button size="icon" className="h-12 w-12 bg-navy-900 hover:bg-navy-800">
                    <Search className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Right Side - Login & Cart */}
              <div className="flex items-center gap-2">
                <Button variant="outline" className="rounded-full border-gray-300">
                  Login
                </Button>
                <div className="relative">
                  <Button variant="ghost" size="icon" className="rounded-full relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-shopping-cart"
                    >
                      <circle cx="8" cy="21" r="1" />
                      <circle cx="19" cy="21" r="1" />
                      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                    </svg>
                    <span className="absolute -top-1 -right-1 bg-cyan-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      2
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Content */}
        <div className="container mx-auto px-4 py-8 max-h-[calc(100vh-200px)] overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-serif text-navy-900 mb-4">Unforgettable resorts and memories await</h2>
              <Link href="#" className="text-cyan-500 hover:text-cyan-600 font-medium block mb-6">
                Unlock Savings
              </Link>
              <Link href="#" className="text-gray-800 hover:text-gray-600 font-medium block mb-6">
                About ResortPass
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              <div>
                <h3 className="text-gray-500 font-medium mb-4">Guests</h3>
                <nav className="flex flex-col space-y-4">
                  <Link href="#" className="text-gray-800 hover:text-gray-600">
                    Currency
                  </Link>
                  <Link href="#" className="text-gray-800 hover:text-gray-600">
                    My Favorites
                  </Link>
                  <Link href="#" className="text-gray-800 hover:text-gray-600">
                    Give $20, Get $20
                  </Link>
                  <Link href="#" className="text-gray-800 hover:text-gray-600">
                    Browse Hotels
                  </Link>
                  <Link href="#" className="text-gray-800 hover:text-gray-600">
                    Gift Cards
                  </Link>
                  <Link href="#" className="text-gray-800 hover:text-gray-600">
                    Help
                  </Link>
                </nav>
              </div>
              <div>
                <h3 className="text-gray-500 font-medium mb-4">Hotels</h3>
                <nav className="flex flex-col space-y-4">
                  <Link href="#" className="text-gray-800 hover:text-gray-600">
                    List My Hotel
                  </Link>
                  <Link href="#" className="text-gray-800 hover:text-gray-600">
                    Press
                  </Link>
                  <Link href="#" className="text-gray-800 hover:text-gray-600">
                    Help
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
