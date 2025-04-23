"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { MobileMenu } from "@/components/mobile-menu"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { ChevronDown, ChevronUp, Heart } from "lucide-react"

export default function ResortsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("all")

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Synchroniser l'état activeTab avec le header
  useEffect(() => {
    // Fonction pour mettre à jour l'état activeTab basé sur le header
    const handleHeaderTabChange = (e: Event) => {
      const customEvent = e as CustomEvent<{tab: string}>;
      if (customEvent.detail && customEvent.detail.tab) {
        setActiveTab(customEvent.detail.tab);
      }
    };

    // Écouter l'événement personnalisé
    window.addEventListener('header-tab-change', handleHeaderTabChange as EventListener);

    return () => {
      window.removeEventListener('header-tab-change', handleHeaderTabChange as EventListener);
    };
  }, []);

  // Featured resorts - pour l'affichage en mode "All"
  const featuredResorts = [
    {
      id: 1,
      name: "Arizona Grand Resort & Spa",
      rating: 4.3,
      reviews: "2.7k",
      location: "Phoenix, Arizona",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Hilton Orlando",
      rating: 4.6,
      reviews: "2.3k",
      location: "Orlando, Florida",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2025&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Hilton Waikoloa Village",
      rating: 4.2,
      reviews: "1.9k", 
      location: "Kailua-Kona, Hawaii",
      image: "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "Margaritaville Hollywood Beach Resort",
      rating: 4.6,
      reviews: "1.7k",
      location: "Hollywood, Florida",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop",
    },
  ]

  // Popular resorts
  const popularResorts = [
    {
      id: 1,
      name: "Fairmont Scottsdale Princess",
      rating: 4.7,
      reviews: "1.7k",
      location: "Phoenix, Arizona",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Omni Orlando Resort",
      rating: 4.7,
      reviews: "1.5k",
      location: "Orlando, Florida",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Town and Country San Diego",
      rating: 4.5,
      reviews: "1.3k",
      location: "San Diego, California",
      image: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?q=80&w=2074&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "Grand Hyatt Scottsdale Resort",
      rating: 4.5,
      reviews: "1.1k",
      location: "Phoenix, Arizona",
      image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=2074&auto=format&fit=crop",
    },
  ]

  // New resorts
  const newResorts = [
    {
      id: 1,
      name: "Auburn Marriott Opelika Resort & Spa",
      rating: 4.4,
      reviews: "980",
      location: "Auburn, AL",
      image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "DoubleTree by Hilton Phoenix",
      rating: 4.3,
      reviews: "850",
      location: "Phoenix, AZ",
      image: "https://images.unsplash.com/photo-1562790351-d273a961e0e9?q=80&w=2065&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Hyatt Place Tempe/Phoenix Airport",
      rating: 4.2,
      reviews: "720",
      location: "Phoenix, AZ",
      image: "https://images.unsplash.com/photo-1455587734955-081b22074882?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "Naturopathica Spa & Healing Center",
      rating: 4.8,
      reviews: "650",
      location: "Phoenix, AZ",
      image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070&auto=format&fit=crop",
    },
  ]

  // Rendu d'une carte de resort pour l'affichage en mode "All"
  const renderResortCard = (resort: {
    id: number;
    name: string;
    rating: number;
    reviews: string;
    location: string;
    image: string;
  }) => (
    <div key={resort.id} className="group cursor-pointer">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-2">
        <Image
          src={resort.image}
          alt={resort.name}
          width={500}
          height={375}
          className="object-cover w-full h-full transition-transform group-hover:scale-105"
        />
        <button className="absolute top-2 right-2 p-1.5 bg-white rounded-full opacity-80 hover:opacity-100">
          <Heart className="h-5 w-5 text-gray-700" />
        </button>
      </div>
      <h3 className="font-semibold text-gray-900">{resort.name}</h3>
      <div className="flex items-center mt-1">
        <span className="text-yellow-400 mr-1">★</span>
        <span className="mr-1">{resort.rating}</span>
        <span className="text-gray-500">({resort.reviews})</span>
        <span className="mx-1 text-gray-500">|</span>
        <span className="text-gray-500">{resort.location}</span>
      </div>
    </div>
  )

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      {/* Mobile Menu */}
      {isMenuOpen && <MobileMenu toggleMenu={toggleMenu} />}

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-8 mt-36">
        {activeTab === "all" ? (
          <div className="space-y-12">
            {/* Featured Section */}
            <div>
              <h2 className="text-2xl font-bold mb-6">En vedette</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {featuredResorts.map(resort => renderResortCard(resort))}
              </div>
            </div>

            {/* Popular Section */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Populaires à Phoenix</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {popularResorts.map(resort => renderResortCard(resort))}
              </div>
            </div>

            {/* New Section */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Nouveautés</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {newResorts.map(resort => renderResortCard(resort))}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar Filters */}
            <div className="w-full md:w-64 flex-shrink-0">
              {/* Availability Filter */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium">Disponibilité</h3>
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="availability" />
                  <label
                    htmlFor="availability"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Afficher uniquement les hôtels disponibles
                  </label>
                </div>
              </div>

              {/* Hotel Class Filter */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium">Catégorie d&apos;hôtel</h3>
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Button
                    variant="outline"
                    className="rounded-full bg-cyan-50 text-cyan-500 border-cyan-200 hover:bg-cyan-100"
                  >
                    Tous
                  </Button>
                  <Button variant="outline" className="rounded-full">
                    Hôtels 5 étoiles
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" className="rounded-full">
                    Hôtels 4+ étoiles
                  </Button>
                  <Button variant="outline" className="rounded-full">
                    Hôtels 3+ étoiles
                  </Button>
                </div>
              </div>

              {/* Amenities Filter */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium">Équipements</h3>
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="all-inclusive" />
                    <label htmlFor="all-inclusive" className="text-sm font-medium leading-none">
                      Tout compris
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="beach-access" />
                    <label htmlFor="beach-access" className="text-sm font-medium leading-none">
                      Accès plage
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="gym" />
                    <label htmlFor="gym" className="text-sm font-medium leading-none">
                      Salle de sport
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="spa" />
                    <label htmlFor="spa" className="text-sm font-medium leading-none">
                      Spa
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="rooftop-pool" />
                    <label htmlFor="rooftop-pool" className="text-sm font-medium leading-none">
                      Piscine sur le toit
                    </label>
                  </div>
                </div>
              </div>

              {/* Vibes Filter */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium">Ambiance</h3>
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="family-friendly" />
                    <label htmlFor="family-friendly" className="text-sm font-medium leading-none">
                      Familial
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="party" />
                    <label htmlFor="party" className="text-sm font-medium leading-none">
                      Festif
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="serene" />
                    <label htmlFor="serene" className="text-sm font-medium leading-none">
                      Paisible
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="luxe" />
                    <label htmlFor="luxe" className="text-sm font-medium leading-none">
                      Luxe
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Resort Cards for specific tabs */}
            <div className="flex-1">
              <h1 className="text-2xl font-bold mb-6">
                {activeTab === "pool" && "Hôtels avec piscine"}
                {activeTab === "spa" && "Hôtels avec spa"}
                {activeTab === "dayroom" && "Hôtels avec chambres à la journée"}
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {activeTab === "pool" && featuredResorts.slice(0, 3).map(resort => renderResortCard(resort))}
                {activeTab === "spa" && newResorts.slice(0, 3).map(resort => renderResortCard(resort))}
                {activeTab === "dayroom" && popularResorts.slice(0, 3).map(resort => renderResortCard(resort))}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
