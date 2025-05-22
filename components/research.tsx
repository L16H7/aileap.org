import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function Research() {
  return (
    <section id="research" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Research Areas</h2>
          <p className="text-xl text-gray-600">
            Exploring the frontiers of AI to develop more capable, interpretable, and beneficial systems.
          </p>
        </div>

        {/* Add current research highlight section */}
        <div className="max-w-4xl mx-auto mb-16 bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-xl border border-purple-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Current Focus: ARC AGI Challenge</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            We are currently tackling the Abstraction and Reasoning Corpus (ARC) AGI challenge, combining the strengths
            of Large Language Models and Reinforcement Learning. Our approach leverages LLMs for abstract reasoning and
            pattern recognition, while RL techniques optimize decision-making processes across diverse problem spaces.
            This research represents a significant step toward developing systems with human-like reasoning capabilities
            that can generalize across novel tasks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Natural Language Understanding",
              description:
                "Developing models that can comprehend and generate human language with greater nuance and contextual awareness.",
            },
            {
              title: "Multimodal Learning",
              description:
                "Creating systems that can process and reason across different types of data, including text, images, and audio.",
            },
            {
              title: "Reinforcement Learning",
              description:
                "Advancing techniques for training agents that can learn from interaction and make better decisions over time.",
            },
            {
              title: "AI Alignment",
              description:
                "Ensuring AI systems act in accordance with human values and intentions, even as they become more capable.",
            },
            {
              title: "Interpretable AI",
              description:
                "Building models whose decisions can be understood and explained to humans, increasing trust and safety.",
            },
            {
              title: "AI for Scientific Discovery",
              description:
                "Applying AI to accelerate progress in fields like medicine, materials science, and climate modeling.",
            },
          ].map((area, index) => (
            <Card key={index} className="border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{area.title}</h3>
                <p className="text-gray-600 mb-4">{area.description}</p>
                <a href="#" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
