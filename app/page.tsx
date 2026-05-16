import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Comparison from "@/components/Comparison"
import Platforms from "@/components/Platforms"
import Mockups from "@/components/Mockups"
import Methodology from "@/components/Methodology"
import Levels from "@/components/Levels"
import Carousel from "@/components/Carousel"
import Placement from "@/components/Placement"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Comparison />
      <Platforms />
      <Mockups />
      <Methodology />
      <Levels />
      <Carousel />
      <Placement />
      <Footer />
    </main>
  )
}