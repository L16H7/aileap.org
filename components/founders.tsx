import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Twitter, FileText } from "lucide-react"

export default function Founders() {
  return (
    <section id="founders" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Founders</h2>
          <p className="text-xl text-gray-600">
            Visionary leaders with decades of combined experience in AI research and development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <Card className="border-0 shadow-lg overflow-hidden">
            <div className="aspect-[3/4] relative">
              <Image src="/professional-ai-researcher.png" alt="Dr. Sarah Chen" fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Dr. Sarah Chen</h3>
              <p className="text-purple-600 font-medium mb-3">Co-Founder & Chief Scientist</p>
              <p className="text-gray-600 mb-4">
                Former research lead at DeepMind with a Ph.D. in Computer Science from Stanford. Specializes in
                reinforcement learning and neural networks.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors">
                  <FileText size={20} />
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg overflow-hidden">
            <div className="aspect-[3/4] relative">
              <Image src="/placeholder-lqm5l.png" alt="Dr. Marcus Johnson" fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Dr. Marcus Johnson</h3>
              <p className="text-purple-600 font-medium mb-3">Co-Founder & CEO</p>
              <p className="text-gray-600 mb-4">
                Previously led AI ethics at Google with a Ph.D. in Cognitive Science from MIT. Expert in human-AI
                interaction and ethical computing.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors">
                  <FileText size={20} />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
