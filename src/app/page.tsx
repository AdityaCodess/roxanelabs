import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/home/Hero";
import ProductShowcase from "../components/sections/home/ProductShowcase"; // <--- Add this

export default function Home() {
  return (
    <main className="min-h-screen bg-pharma-light">
      <Navbar />
      <Hero />
      <ProductShowcase /> {/* <--- Render it here */}
    </main>
  );
}
