import { Navbar, Home, Services } from "@/components";
import Image from "next/image";

export default function LandingPage() {
  return (
    <main>
      <Navbar />
      <Home />
      <Services />
    </main>
  );
}
