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

  return (
    <div className="car-detail flex flex-col rounded-sm bg-gray-100 border-0 h-[330px] w-[300px] mb-5">
      <img src="/car2.jpg" alt="car-detail" className="m-3 h-[180px]" />
      <div className="flex flex-col mx-3">
        <span>
          Name: <strong>{car.make}</strong>
        </span>
        <span>
          Model: <strong>{car.model}</strong>
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
