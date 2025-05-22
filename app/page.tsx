import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Founders from "@/components/founders"
import Research from "@/components/research"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Founders />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
