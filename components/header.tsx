"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, ShoppingCart, ChevronDown, ChevronUp, Search, MapPin, Calendar, Building2, Waves, Flower2, BedDouble } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface HeaderProps {
  isMenuOpen: boolean
  toggleMenu: () => void
}

export function Header({ isMenuOpen, toggleMenu }: HeaderProps) {
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  const [activeTab, setActiveTab] = useState("all")
  const pathname = usePathname()

  // Check if we're on the resorts page
  const isResortsPage = pathname === "/resorts"

  const toggleLogin = () => {
    setIsLoginOpen(!isLoginOpen)
  }

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
    
    // Émettre un événement personnalisé pour la page des resorts
    const event = new CustomEvent('header-tab-change', { 
      detail: { tab }
    });
    window.dispatchEvent(event);
  }

  useEffect(() => {
    const handleScroll = () => {
      // On resorts page, make header sticky immediately
      if (isResortsPage) {
        setIsSticky(window.scrollY > 10)
        return
      }

      // On home page, make header sticky after hero section
      const heroSection = document.getElementById("hero-section")
      const heroHeight = heroSection?.offsetHeight || 600

      if (window.scrollY > heroHeight - 100) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Initial check for resorts page
    if (isResortsPage) {
      setIsSticky(true)
    }

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isResortsPage])

  return (
    <header
      className={cn(
        "w-full z-50 transition-all duration-300",
        isSticky || isResortsPage
          ? "fixed top-0 left-0 bg-white text-gray-900 border-b"
          : "absolute top-0 left-0 bg-transparent text-white",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            {/* Menu Button / Close Button */}
            <button
              onClick={toggleMenu}
              className={cn(
                "p-2 rounded-full",
                isSticky || isResortsPage ? "hover:bg-gray-100" : "hover:bg-black/10",
                isMenuOpen ? "hidden" : "block",
              )}
              aria-label="Open menu"
            >
              <Menu className={cn("h-6 w-6", isSticky || isResortsPage ? "text-gray-600" : "text-white")} />
            </button>

            {/* Logo */}
            <Link
              href="/"
              className={cn(
                "font-bold text-2xl tracking-wider",
                isSticky || isResortsPage ? "text-cyan-500" : "text-white",
                isMenuOpen ? "ml-0" : "ml-6",
              )}
            >
              RESORTPASS
            </Link>
          </div>

          {/* Search Bar - Always visible on resorts page, only when sticky on home page */}
          {(isSticky || isResortsPage) && (
            <div className="hidden md:flex items-center flex-1 max-w-xl mx-4">
              <div className="flex w-full">
                <div className="relative flex-1">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    defaultValue="Phoenix, Arizona"
                    className="pl-10 h-12 rounded-l-md rounded-r-none border-r-0"
                  />
                </div>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input defaultValue="Apr 24" className="pl-10 h-12 w-32 rounded-none border-l-0" />
                </div>
                <Button
                  size="icon"
                  className="h-12 w-12 bg-navy-900 hover:bg-navy-800 rounded-l-none"
                  onClick={() => {
                    if (pathname !== "/resorts") {
                      window.location.href = "/resorts"
                    }
                  }}
                >
                  <Search className="h-5 w-5" />
                </Button>
              </div>
            </div>
          )}

          {/* Right Side - Login & Cart */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <Button
                variant={isSticky || isResortsPage ? "outline" : "secondary"}
                className={cn(
                  "rounded-full",
                  isSticky || isResortsPage ? "border-gray-300" : "bg-white/20 hover:bg-white/30 backdrop-blur-sm",
                )}
                onClick={toggleLogin}
              >
                Login {isLoginOpen ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />}
              </Button>

              {/* Login Dropdown */}
              {isLoginOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-50">
                  <div className="py-2">
                    <Link href="/login" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                      Login
                    </Link>
                    <Link href="/signup" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                      Sign Up
                    </Link>
                    <Link href="/hotel-login" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                      Hotel Login
                    </Link>
                    <Link href="/list-hotel" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                      List My Hotel
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <div className="relative">
              <Button variant="ghost" size="icon" className="rounded-full relative">
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 bg-cyan-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  2
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs - Only show on resorts page */}
      {isResortsPage && (
        <div className="border-t border-b bg-white mt-[1px]">
          <div className="container mx-auto px-4">
            <div className="flex justify-center">
              <div className="flex space-x-8">
                <button
                  className={`flex items-center py-4 px-2 ${
                    activeTab === "all" ? "border-b-2 border-cyan-500 text-cyan-500" : "text-gray-600"
                  }`}
                  onClick={() => handleTabChange("all")}
                >
                  <Building2 className="mr-2 h-5 w-5" />
                  All
                </button>
                <button
                  className={`flex items-center py-4 px-2 ${
                    activeTab === "pool" ? "border-b-2 border-cyan-500 text-cyan-500" : "text-gray-600"
                  }`}
                  onClick={() => handleTabChange("pool")}
                >
                  <Waves className="mr-2 h-5 w-5" />
                  Pool
                </button>
                <button
                  className={`flex items-center py-4 px-2 ${
                    activeTab === "spa" ? "border-b-2 border-cyan-500 text-cyan-500" : "text-gray-600"
                  }`}
                  onClick={() => handleTabChange("spa")}
                >
                  <Flower2 className="mr-2 h-5 w-5" />
                  Spa
                </button>
                <button
                  className={`flex items-center py-4 px-2 ${
                    activeTab === "dayroom" ? "border-b-2 border-cyan-500 text-cyan-500" : "text-gray-600"
                  }`}
                  onClick={() => handleTabChange("dayroom")}
                >
                  <BedDouble className="mr-2 h-5 w-5" />
                  Day Room
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
