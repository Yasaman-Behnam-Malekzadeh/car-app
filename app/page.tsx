import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import CarList from "./components/CarList";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <CarList/>
      <Footer/>
    </div>
  );
}
