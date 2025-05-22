import { Card, CardContent } from "@/components/ui/card"
import { Brain, Shield, Lightbulb } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Research Area</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="rounded-full bg-purple-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Reinforcement Learning</h3>
              <p className="text-gray-600">
                We push the boundaries of reinforcement learning algorithms, developing systems that learn through experience and adapt to complex environments.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="rounded-full bg-blue-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Large Language Models</h3>
              <p className="text-gray-600">
                We finetune and train LLMs to be able to perform novel and complex tasks.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="rounded-full bg-green-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Lightbulb className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Reasoning</h3>
              <p className="text-gray-600">
                Our research focuses on improving reasoning capababilities of LLMs. We are creating a perfect blend of RL and LLMs.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
