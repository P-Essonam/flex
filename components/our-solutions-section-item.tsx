import Link from "next/link"
import { Clock, Users, CheckCircle, Map, type LucideIcon, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Define types for our props
interface Feature {
  icon: string
  title: string
  description: string
}

interface DaypassSectionProps {
  title: string
  subtitle: string
  features: Feature[]
  ctaText: string
  ctaLink: string
  className?: string
}

// Map of icon names to Lucide icon components
const iconMap: Record<string, LucideIcon> = {
  clock: Clock,
  users: Users,
  checkCircle: CheckCircle,
  map: Map,
}

export default function DaypassSection({ title, subtitle, features, ctaText, ctaLink, className="bg-[#e8f5e9]" }: DaypassSectionProps) {
  return (
    <section className="w-full py-6 md:py-12">
      <div className="container px-4 md:px-6">
        <div className={cn("max-w-3xl mx-auto  rounded-xl p-6 md:p-8", className)}>
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-xl font-bold tracking-tighter sm:text-3xl md:text-4xl">{title}</h2>
            <p className="text-xl text-muted-foreground max-w-[700px] md:text-2xl">{subtitle}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-3xl">
              {features.map((feature, index) => {
                const IconComponent = iconMap[feature.icon] || CheckCircle

                return (
                  <div key={index} className="flex items-start space-x-4">
                    <IconComponent className="h-6 w-6 text-primary flex-shrink-0" />
                    <div className="text-left">
                      <h3 className="font-medium">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-10">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href={ctaLink}>
                  {ctaText}
                  <span className="ml-2">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
