import DaypassSection from "@/components/our-solutions-section-item";
import { Check, X } from "lucide-react";
const daypassData = {
    title: "Hotel Daypasses",
    subtitle: "Take a break without booking a night",
    features: [
      {
        icon: "clock",
        title: "Book by the hour or day",
        description: "Flexible scheduling to fit your needs",
      },
      {
        icon: "users",
        title: "Couples & families welcome",
        description: "Perfect for everyone to enjoy",
      },
      {
        icon: "checkCircle",
        title: "Facilities adapted to your values",
        description: "Personalized experiences for your preferences",
      },
      {
        icon: "map",
        title: "Ideal for staycations & short escapes",
        description: "Enjoy luxury amenities close to home",
      },
    ],
    ctaText: "Browse Daypass Offers",
    ctaLink: "/daypass-offers",
  }

const overnightData = {
  title: "Overnight stays",
  subtitle: "Sleep with peace of mind — wherever you go",
  features: [
    {
      icon: "hotel",
      title: "Hotels with halal services, private pools, prayer areas",
      description: "Find verified accommodations that respect your values: from 5-star hotel suites to private villas and apartments, all curated with care.",
    },
    {
      icon: "home",
      title: "Homes & villas for total privacy and family comfort",
      description: "Homes & villas for total privacy and family comfort",
    },
    {
      icon: "shieldCheck",
      title: "No surprises, just verified peaceful stays",
      description: "No surprises, just verified peaceful stays",
    },
    {
      icon: "users",
      title: "Designed for Muslim travelers, couples & families",
      description: "Designed for Muslim travelers, couples & families",
    },
  ],
  ctaText: "Explore All Stays",
  ctaLink: "/overnight-stays",
}

const experiencesData = {
  title: "Experiences",
  subtitle: "Live your journey with meaning",
  features: [
    {
      icon: "users",
      title: "Hosted by trusted locals and Muslim-friendly providers",
      description: "Book memorable halal-friendly experiences: culinary workshops, cultural tours, nature escapes or wellness sessions — all aligned with your beliefs.",
    },
    {
      icon: "heart",
      title: "Family and couple-friendly",
      description: "Family and couple-friendly",
    },
    {
      icon: "shieldOff",
      title: "No inappropriate activities or environments",
      description: "No inappropriate activities or environments",
    },
    {
      icon: "star",
      title: "Rooted in authenticity, designed for joy",
      description: "Rooted in authenticity, designed for joy",
    },
  ],
  ctaText: "Discover Experiences",
  ctaLink: "/experiences",
}

export default function OurSolutions() {
  return (
    <main className="max-w-7xl p-8 container mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        {/* Section gauche : texte */}
        <section className="md:w-1/2 w-full flex flex-col gap-6">
            <h1 className="text-5xl font-bold leading-tight text-black">
            Enjoy the flex<br />of luxury
            </h1>
            <p className="text-2xl text-black">
            Flexury offers you the opportunity to access our partners amenities without booking an overnight stay
            </p>
            <p className="text-base text-black mt-2">
            Our platform includes a wide range of services from Muslim-friendly leisure to sports, food and beverage and professional services.
            </p>
        </section>
        {/* Section droite : mockup */}
        <section className="md:w-1/2 w-full flex items-center justify-center mt-8 md:mt-0">
            <div className="bg-[#f3f7f5] rounded-3xl p-6 w-[500px] max-w-full">
            {/* Simule un écran d'ordinateur add iamge */}

            </div>
        </section>
      </div>

      <div className="py-8">
        <header className="flex justify-between items-center mb-8">
            <h1 className="text-5xl font-bold">Why Flexury ?</h1>
        </header>

        <hr className="border-gray-200 my-6" />

        <div className="grid grid-cols-3 gap-0">
            <div className="col-span-1"></div>
            <div className="text-center font-semibold text-xl bg-[#e8f5e9] py-4 rounded-t-lg">Flexury</div>
            <div className="text-center font-semibold text-xl py-4">Others</div>
        </div>

        <div className="grid grid-cols-3 gap-0">
            <div className="py-6">
            <div className="flex items-center gap-2">
                <h3 className="text-xl font-semibold">100% Muslim-friendly offers only</h3>
            </div>
            <p className="text-gray-700 mt-1">
                Private wellness circuit or private-pass ensuring no gender mixing and no alcohol
            </p>
            </div>
            <div className="flex justify-center items-center bg-[#e8f5e9] py-6">
            <div className="bg-[#4caf50] rounded-full p-1">
                <Check className="h-6 w-6 text-white" />
            </div>
            </div>
            <div className="flex justify-center items-center py-6">
            <div className="bg-black rounded-full p-1">
                <X className="h-6 w-6 text-white" />
            </div>
            </div>
        </div>

        <hr className="border-gray-200" />

        <div className="grid grid-cols-3 gap-0">
            <div className="py-6">
            <div className="flex items-center gap-2">
                <h3 className="text-xl font-semibold">Verified partners, trusted by our community</h3>
            </div>
            <p className="text-gray-700 mt-1">Daypass to services and activities</p>
            </div>
            <div className="flex justify-center items-center bg-[#e8f5e9] py-6">
            <div className="bg-[#4caf50] rounded-full p-1">
                <Check className="h-6 w-6 text-white" />
            </div>
            </div>
            <div className="flex justify-center items-center py-6">
            <div className="bg-black rounded-full p-1">
                <X className="h-6 w-6 text-white" />
            </div>
            </div>
        </div>

        <hr className="border-gray-200" />

        <div className="grid grid-cols-3 gap-0">
            <div className="py-6">
            <div className="flex items-center gap-2">
                <h3 className="text-xl font-semibold">Instant booking, secure payments, multi-device</h3>
            </div>
            <p className="text-gray-700 mt-1">Activities for a safe and enjoyable experience</p>
            </div>
            <div className="flex justify-center items-center bg-[#e8f5e9] py-6">
            <div className="bg-[#4caf50] rounded-full p-1">
                <Check className="h-6 w-6 text-white" />
            </div>
            </div>
            <div className="flex justify-center items-center py-6">
            <div className="bg-black rounded-full p-1">
                <X className="h-6 w-6 text-white" />
            </div>
            </div>
        </div>
      </div>

      <div className="py-8">
        <DaypassSection {...daypassData} />
        <DaypassSection {...overnightData} className="bg-gray-100" />
        <DaypassSection {...experiencesData} />
      </div>
      
      <div className="py-8">
          <h2 className="text-5xl font-bold text-center mb-8">Travel. Reconnect. Stay true</h2>
          <hr className="my-8 border-gray-200" />
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold leading-tight">Flexury helps you explore the world without compromising your beliefs.
             <br /> We believe you deserve both comfort and conscience</h3>
            </div>
            <div className="flex justify-center md:justify-end">
              <button className="border-2 border-black rounded-full px-10 py-4 text-xl font-medium hover:bg-black hover:text-white transition">Learn more</button>
            </div>
          </div>
      </div>
    </main>
  );
} 