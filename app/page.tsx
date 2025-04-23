"use client"

import { useEffect } from "react"
import { HeroSection } from "@/components/hero-section"
import { ResortSection } from "@/components/resort-section"

export default function Home() {
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdowns = document.querySelectorAll(".dropdown-menu")
      dropdowns.forEach((dropdown) => {
        if (!dropdown.contains(event.target as Node)) {
          // Find all open dropdowns and close them
          const openDropdowns = document.querySelectorAll('[data-state="open"]')
          openDropdowns.forEach((openDropdown) => {
            if (openDropdown instanceof HTMLElement) {
              openDropdown.click()
            }
          })
        }
      })
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Featured resorts data
  const featuredResorts = [
    {
      name: "Arizona Grand Resort & Spa",
      rating: 4.3,
      reviews: "2.7k",
      location: "Phoenix, Arizona",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
      hasMultipleImages: true,
    },
    {
      name: "Hilton Orlando",
      rating: 4.6,
      reviews: "2.3k",
      location: "Orlando, Florida",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2025&auto=format&fit=crop",
      hasMultipleImages: true,
    },
    {
      name: "Hilton Waikoloa Village",
      rating: 4.2,
      reviews: "1.9k",
      location: "Kailua-Kona, Hawaii",
      image: "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?q=80&w=2070&auto=format&fit=crop",
      hasMultipleImages: true,
    },
    {
      name: "Margaritaville Hollywood Beach Resort",
      rating: 4.6,
      reviews: "1.7k",
      location: "Hollywood, Florida",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop",
      hasMultipleImages: true,
    },
  ]

  // More resorts data
  const moreResorts = [
    {
      name: "Fairmont Scottsdale Princess",
      rating: 4.7,
      reviews: "1.7k",
      location: "Phoenix, Arizona",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop",
      hasMultipleImages: true,
    },
    {
      name: "Omni Orlando Resort at ChampionsGate",
      rating: 4.7,
      reviews: "1.5k",
      location: "Orlando, Florida",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop",
      hasMultipleImages: true,
    },
    {
      name: "Town and Country San Diego",
      rating: 4.5,
      reviews: "1.3k",
      location: "San Diego, California",
      image: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?q=80&w=2074&auto=format&fit=crop",
      hasMultipleImages: true,
    },
    {
      name: "Grand Hyatt Scottsdale Resort",
      rating: 4.5,
      reviews: "1.1k",
      location: "Phoenix, Arizona",
      image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=2074&auto=format&fit=crop",
      hasMultipleImages: true,
    },
  ]

  // New and notable resorts data
  const newResorts = [
    {
      name: "Auburn Marriott Opelika Resort & Spa",
      rating: 4.4,
      reviews: "980",
      location: "Auburn, AL",
      image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop",
      hasMultipleImages: true,
      amenities: "Pool, Spa, Day Room access",
    },
    {
      name: "DoubleTree by Hilton Phoenix Chandler",
      rating: 4.3,
      reviews: "850",
      location: "Phoenix, AZ",
      image: "https://images.unsplash.com/photo-1562790351-d273a961e0e9?q=80&w=2065&auto=format&fit=crop",
      hasMultipleImages: true,
      amenities: "Pool, Day Room access",
    },
    {
      name: "Hyatt Place Tempe/Phoenix Airport",
      rating: 4.2,
      reviews: "720",
      location: "Phoenix, AZ",
      image: "https://images.unsplash.com/photo-1455587734955-081b22074882?q=80&w=2070&auto=format&fit=crop",
      hasMultipleImages: true,
      amenities: "Pool, Day Room access",
    },
    {
      name: "Naturopathica Spa & Healing Center",
      rating: 4.8,
      reviews: "650",
      location: "Phoenix, AZ",
      image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070&auto=format&fit=crop",
      hasMultipleImages: true,
      amenities: "Spa access",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <div className="container mx-auto px-4 pt-6">
        <ResortSection title="Featured Resorts" resorts={featuredResorts} />
        <ResortSection title="Popular in Phoenix" resorts={moreResorts} />
        <ResortSection title="New and notable" resorts={newResorts} showSeeAll={true} />
      </div>
    </main>
  )
}
