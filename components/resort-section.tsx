import { ResortCard } from "./resort-card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

interface ResortSectionProps {
  title: string
  resorts: {
    name: string
    rating: number
    reviews: string
    location: string
    image: string
    hasMultipleImages?: boolean
    amenities?: string
  }[]
  showSeeAll?: boolean
}

export function ResortSection({ title, resorts, showSeeAll = false }: ResortSectionProps) {
  return (
    <div className="py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        {showSeeAll && (
          <Button variant="ghost" className="text-gray-900 flex items-center gap-1">
            See All <ChevronRight className="h-4 w-4" />
          </Button>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {resorts.map((resort, index) => (
          <ResortCard key={index} {...resort} />
        ))}
      </div>
    </div>
  )
}
