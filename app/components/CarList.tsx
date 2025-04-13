"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import CarCard from "./CarCard";
import SearchBox from "./SearchBox";

interface car {
  id: string;
  make: string;
  model: string;
  trancy: string;
  vclass: string;
  year: string;
  fueltype: string;
  drive: string;
  basemodel: string;
}

export default function CarList() {
  const [data, setData] = useState<car[]>([]);
  const [searchData,setSearchData]= useState<string>('')

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

  const filteredCar= data.filter((car)=>{
    return car.make.toLowerCase().includes(searchData.toLowerCase())
  })


  
  return (
    <div className="container m-auto">
      <SearchBox onSearch={setSearchData}/>
      <div className="flex flex-wrap justify-between">
        {filteredCar.map((item) => (
          <CarCard key={item.id} car={item} />
        ))}
      </div>
    </div>
  );
}
