import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"

interface ResortCardProps {
  name: string
  rating: number
  reviews: string
  location: string
  image: string
  hasMultipleImages?: boolean
  amenities?: string
}

export function ResortCard({
  name,
  rating,
  reviews,
  location,
  image,
  hasMultipleImages = false,
  amenities,
}: ResortCardProps) {
  return (
    <div className="group relative">
      <div className="relative overflow-hidden rounded-lg">
        <Link href={`/resort/${name.toLowerCase().replace(/\s+/g, "-")}`}>
          <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-200">
            <Image
              src={image || "/placeholder.svg"}
              alt={name}
              width={400}
              height={300}
              className="h-full w-full object-cover object-center group-hover:opacity-90 transition-opacity"
            />
          </div>
        </Link>
        <button
          className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white"
          aria-label="Add to favorites"
        >
          <Heart className="h-5 w-5 text-gray-600" />
        </button>
        {hasMultipleImages && (
          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
            {[...Array(3)].map((_, i) => (
              <span key={i} className={`h-1.5 w-1.5 rounded-full ${i === 0 ? "bg-white" : "bg-white/50"}`}></span>
            ))}
          </div>
        )}
      </div>
      <div className="mt-2">
        <h3 className="text-base font-medium text-gray-900">{name}</h3>
        <div className="flex items-center mt-1">
          <span className="text-sm font-medium text-gray-900 mr-1">{rating}</span>
          <div className="flex items-center">
            <svg
              className="h-4 w-4 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <span className="text-sm text-gray-500 ml-1">({reviews})</span>
          <span className="text-sm text-gray-500 ml-2">| {location}</span>
        </div>
        {amenities && <p className="text-sm text-gray-500 mt-1">{amenities}</p>}
      </div>
    </div>
  )
}
