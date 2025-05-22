import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function Research() {
  return (
    <section id="research" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Research Area</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Large Language Model Reasoning with ARC-AGI",
              description:
                "Developing models that can comprehend and generate human language with greater nuance and contextual awareness.",
            }
          ].map((area, index) => (
            <Card key={index} className="border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{area.title}</h3>
                <p className="text-gray-600 mb-4">{area.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
