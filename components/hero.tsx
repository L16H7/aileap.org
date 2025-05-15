import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-blue-50" />
        <div className="absolute inset-0 bg-[url('/placeholder-96n2b.png')] opacity-10 bg-cover bg-center" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            What is <span className="text-purple-600">intelligence?</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            AI Leap is asking the fundament question about the nature of intelligence. We are devoted to understanding and creating intelligence.
          </p>
        </div>
      </div>
    </section>
  )
}
