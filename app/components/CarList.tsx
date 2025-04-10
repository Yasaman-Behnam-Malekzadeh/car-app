"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import CarCard from "./CarCard"


interface car {
  id:string,
  make: string,
  model: string,
  trancy: string,
  vclass: string,
  year: string,
  fueltype:string,
  drive:string,
  basemodel:string

}

export default function CarList() {
  const [data, setData] = useState<car[]>([]);

  useEffect(() => {
    async function fetchData() {
      const options = {
        method: "GET",
        url: "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records?limit=40",
      };

      try {
        const response = await axios.request(options);
        setData(response.data.results);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap container m-auto">
        
      {data.map((item) => (
        <CarCard key={item.id} car={item} />
      ))}
    </div>
  );
}
