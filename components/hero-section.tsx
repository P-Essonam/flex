"use client"

import { useState } from "react"
import Image from "next/image"
import { CalendarIcon, MapPinIcon, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import { Header } from "./header"
import { MobileMenu } from "./mobile-menu"
import { useRouter } from "next/navigation"

export function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleSearch = () => {
    router.push("/resorts")
  }

  return (
    <div id="hero-section" className="relative w-full h-[600px] md:h-[700px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2070&auto=format&fit=crop"
          alt="Resort swimming pool"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-cyan-900/30" />
      </div>

      {/* Header */}
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      {/* Mobile Menu */}
      {isMenuOpen && <MobileMenu toggleMenu={toggleMenu} />}

      {/* Hero Content */}
      <div
        className={cn(
          "relative z-10 container mx-auto px-4 pt-32 md:pt-40 max-w-6xl w-full flex flex-col items-center",
          isMenuOpen && "hidden",
        )}
      >
        <div className="max-w-3xl text-white text-center w-full">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Experience the best hotel amenities for the day
          </h1>
          <p className="text-xl md:text-2xl mb-8">No overnight stay needed, starting at $25.</p>
        </div>

        {/* Search Form */}
        <div className="bg-white rounded-lg p-4 shadow-lg max-w-4xl mx-auto w-full">
          <Tabs defaultValue="all">
            <TabsList className="grid grid-cols-4 mb-4">
              <TabsTrigger value="all" className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-hotel"
                >
                  <path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z" />
                  <path d="m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16" />
                  <path d="M8 7h.01" />
                  <path d="M16 7h.01" />
                  <path d="M12 7h.01" />
                  <path d="M12 11h.01" />
                  <path d="M16 11h.01" />
                  <path d="M8 11h.01" />
                  <path d="M10 22v-6.5m4 0V22" />
                </svg>
                All
              </TabsTrigger>
              <TabsTrigger value="pool" className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-waves"
                >
                  <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
                  <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
                  <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
                </svg>
                Pool
              </TabsTrigger>
              <TabsTrigger value="spa" className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-flower"
                >
                  <path d="M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V9m-4.5 3a4.5 4.5 0 1 0 4.5 4.5M7.5 12H9m7.5 0a4.5 4.5 0 1 1-4.5 4.5m4.5-4.5H15m-3 4.5V15" />
                  <circle cx="12" cy="12" r="3" />
                  <path d="m8 16 1.5-1.5" />
                  <path d="M14.5 9.5 16 8" />
                  <path d="m8 8 1.5 1.5" />
                  <path d="M14.5 14.5 16 16" />
                </svg>
                Spa
              </TabsTrigger>
              <TabsTrigger value="dayroom" className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-bed-double"
                >
                  <path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" />
                  <path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
                  <path d="M12 4v6" />
                  <path d="M2 18h20" />
                </svg>
                Day Room
              </TabsTrigger>
            </TabsList>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <MapPinIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input defaultValue="Phoenix, Arizona" className="pl-10 h-12" />
              </div>
              <div className="relative">
                <CalendarIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input defaultValue="Apr 24" className="pl-10 h-12 w-full md:w-40" />
              </div>
              <Button className="h-12 px-8 bg-navy-900 hover:bg-navy-800" onClick={handleSearch}>
                <Search className="mr-2 h-5 w-5" />
                Search
              </Button>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
