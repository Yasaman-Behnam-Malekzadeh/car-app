import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import CarCard from "./components/CarList";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <CarCard/>
    </div>
  );
}
