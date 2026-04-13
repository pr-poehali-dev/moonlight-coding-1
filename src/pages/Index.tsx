import { Hero3DWebGL as Hero3D } from "@/components/hero-webgl"
import { FeaturesSection } from "@/components/features-section"
import { AboutSection } from "@/components/about-section"
import { SafetySection } from "@/components/safety-section"
import { JoinSection } from "@/components/join-section"
import { TeamSection } from "@/components/team-section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function Index() {
  return (
    <div className="dark">
      <Navbar />
      <main>
        <Hero3D />
        <section id="about">
          <FeaturesSection />
        </section>
        <AboutSection />
        <section id="safety">
          <SafetySection />
        </section>
        <JoinSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  )
}