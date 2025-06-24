import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Twitter, FileText, Github, Globe } from "lucide-react"

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
              <Image src="https://brycesandlund.com/images/bryce-cropped-small.jpg" alt="Bryce" fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Dr. Bryce Sandlund</h3>
              <p className="text-purple-600 font-medium mb-3">Co-Founder & Research Scientist</p>
              <p className="text-gray-600 mb-2 h-32">
                Bryce holds a PhD in Theoretical Computer Science from Waterloo. He pairs core algorithmic insights with practical engineering, previously leading Optimization at Gopuff.
              </p>
              <div className="flex space-x-3">
                <a href="https://brycesandlund.com/" target="_blank" className="text-gray-500 hover:text-purple-600 transition-colors">
                  <Globe size={20} />
                </a>
                <a href="https://www.linkedin.com/in/brycesandlund/" target="_blank" className="text-gray-500 hover:text-purple-600 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="https://github.com/brycesandlund" target="_blank" className="text-gray-500 hover:text-purple-600 transition-colors">
                  <Github size={20} />
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg overflow-hidden">
            <div className="aspect-[3/4] relative">
              <Image src="https://i.imgur.com/4vd9aLe.jpeg" alt="Light" fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Lin Myat Ko</h3>
              <p className="text-purple-600 font-medium mb-3">Co-Founder & Research Engineer</p>
              <p className="text-gray-600 mb-4 h-32">
                Lin is an experienced Research Engineer, deeply passionate in solving intelligence. He believes Reinforcement Learning is the best path to AGI!
              </p>
              <div className="flex space-x-3">
                <a href="https://www.linkedin.com/in/coderlight/" target="_blank" className="text-gray-500 hover:text-purple-600 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="https://github.com/L16H7" target="_blank" className="text-gray-500 hover:text-purple-600 transition-colors">
                  <Github size={20} />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
