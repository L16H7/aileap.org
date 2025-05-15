import { Card, CardContent } from "@/components/ui/card"
import { Brain, Shield, Lightbulb } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About NexusAI Lab</h2>
          <p className="text-xl text-gray-600">
            Founded in 2023, NexusAI Lab is dedicated to pushing the boundaries of artificial intelligence while
            ensuring its development benefits humanity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="rounded-full bg-purple-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Cutting-Edge Research</h3>
              <p className="text-gray-600">
                Our team explores novel approaches to machine learning, natural language processing, and computer vision
                to develop more capable AI systems.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="rounded-full bg-blue-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ethical AI Development</h3>
              <p className="text-gray-600">
                We prioritize responsible AI development, focusing on fairness, transparency, privacy, and the societal
                impact of our technologies.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="rounded-full bg-green-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Lightbulb className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Collaborative Innovation</h3>
              <p className="text-gray-600">
                We partner with academic institutions, industry leaders, and policymakers to ensure our research
                translates into real-world benefits.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
