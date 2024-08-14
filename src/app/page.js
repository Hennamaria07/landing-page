import { Navbar, Home, Services, Testimonial, About, Contact } from "@/components";

export default function LandingPage() {
  return (
    <main>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Testimonial />
      <Contact />
    </main>
  );
}
