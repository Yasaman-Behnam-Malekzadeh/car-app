"use client";

import { useState } from "react";
import CarDetail from "./CarDetail";
interface carType {
  make: string;
  model: string;
  trancy: string;
  vclass: string;
  year: string;
  fueltype: string;
  drive: string;
  basemodel: string;
}

export default function CarCard({ car }: { car: carType }) {
  const [isOpen, setIsOpen] = useState(false);
  const carImage: Record<string, string> = {
    "Ford Escape FWD": "/Ford - Escape.jpg",
    "Chevrolet Silverado 15 Hybrid 4WD": "/Chevrlot-Silverado.jpg",
    "Kia Rio": "/Kia_Rio.jpg",
    "Subaru Outback AWD": "/Subaro-Outback.png",
    "Hyundai Tucson FWD": "/Hyundai-Tucson.png",
    "Cadillac XTS Limo": "/Cadilac-XTS.png",
    "Chevrolet T10 (S10) Pickup 4WD": "/Chevrolet-T10.jpeg",
    "Honda Accord": "/Hunda-Accourd.png",
    "GMC Sierra C15 2WD": "/GMC-Sierra.jpg",
    "Buick Envision AWD": "/Buick-Envision.jpg",
    "Cadillac Escalade 4WD": "/Cadillac-Escalade.jpg",
    "Audi S5": "/Audi-S5.png",
    "Fiat 500 L": "/Fiat-500L.jpg",
    "MINI Cooper S Clubman": "/Mini-Cooper.jpeg",
    "Dodge Durango AWD": "/Dodge-Durango.png",
    "Chevrolet Sonic": "/Chevrolet-Sonic.jpg",
    "MINI Cooper S Convertible": "/Mini-Cooper.jpeg",
    "Mercedes-Benz AMG C63 Coupe": "/Mercedes-Benz-AMG.jpg",
    "Kia Forte Koup": "/Kia-Forte.jpg",
    "Chevrolet Malibu Hybrid": "/Chevrolet-Malibu.jpg",
    "Mitsubishi Lancer": "/Mitsubishi-Lancer.jpg",
    "Audi A3 Cabriolet quattro": "/Audi-A3-Cabriolet.jpeg",
    "Saab 900": "/Saab-900.jpg",
    "Lexus GS 350 F Sport": "/Lexus-GS-350.jpeg",
    "Infiniti QX60 Hybrid AWD": "/Infiniti-QX60 Hybrid AWD.jpg",
    "Honda Civic 2Dr": "/Honda-Civic 2Dr.jpg",
    "Volkswagen Beetle Dune": "/Volkswagen-Golf SportWagen 4motion.jpg",
    "GMC V15 Pickup 4WD": "/GMC-V15 Pickup 4WD.jpeg",
    "Volkswagen Golf SportWagen 4motion":
      "/Volkswagen-Golf SportWagen 4motion.jpg",
    "Ford F150 3.5L 2WD GVWR>7599 LBS":
      "/Ford-F150 3.5L 2WD GVWR>7599 LBS.jpeg",
    "Toyota Sequoia 2WD": "/Toyota-Sequoia 2WD.png",
    "Nissan Juke": "/Nissan-Juke.jpeg",
    "Subaru Impreza 5-Door": "/Subaru-Impreza 5-Door.jpeg",
    "Chevrolet Colorado 2WD": "/Chevrolet-Colorado 2WD.jpg",
    "Alfa Romeo 4C": "/Alfa Romeo-4C.jpg",
    "Mercedes-Benz AMG GLC43 4matic": "/Mercedes-Benz-AMG GLC43 4matic.jpg",
    "Honda CR-V FWD": "/Honda-CR-V FWD.jpeg",
  };

  const key = `${car.make} ${car.model}`;
  const imgUrl = carImage[key] || "/car2.jpg";

  return (
    <div className="car-card flex flex-col rounded-sm bg-gray-100 border-0 w-60  ml-3 mb-5">
      <img src={imgUrl} alt={key} className="m-3 h-[200px] w-[220px]" />
      <div className="flex flex-col mx-3">
        <span>
          Name: <strong>{car.make}</strong>
        </span>
        <span className="w-[200px] overflow-x-hidden whitespace-nowrap text-ellipsis">
          Model: <strong className="">{car.model}</strong>
        </span>
        <span>
          Year: <strong>{car.year}</strong>
        </span>
      </div>
      <button
        className="bg-blue-500 text-white rounded-2xl m-3 py-1 hover:cursor-pointer hover:bg-blue-400 "
        onClick={() => setIsOpen(true)}
      >
        more
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-gray-300/75 z-50 flex items-center justify-center">
          <button
            className="text-white bg-red-500 absolute top-0 p-3 rounded-full h-12 w-12 text-xl shadow-2xl hover:cursor-pointer hover:bg-red-400 "
            onClick={() => setIsOpen(false)}
          >
            X
          </button>
          <CarDetail car={car} />
        </div>
      )}
    </div>
  );
}
