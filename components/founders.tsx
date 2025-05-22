import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Twitter, FileText } from "lucide-react"

export default function Founders() {
  return (
    <section id="founders" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Founders</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <Card className="border-0 shadow-lg overflow-hidden">
            <div className="aspect-[3/4] relative">
              <Image src="https://brycesandlund.com/images/bryce-cropped-small.jpg" alt="Dr. Sarah Chen" fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Dr. Bryce Sandlund</h3>
              <p className="text-purple-600 font-medium mb-3">Co-Founder & Research Scientist</p>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Lin Myat Ko</h3>
              <p className="text-purple-600 font-medium mb-3">Co-Founder & Research Engineer</p>
              <p className="text-gray-600 mb-4">
                Research Engineer, deeply passionate in solving challenging problems. Believe RL is the way to AGI
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
