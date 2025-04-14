"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import CarCard from "./CarCard";
import SearchBox from "./SearchBox";
import Pagination from "react-js-pagination";

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
  const [searchData, setSearchData] = useState<string>("");

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemPerPage = 10;
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;

  const filteredCar = data.filter((car) => {
    return car.make.toLowerCase().includes(searchData.toLowerCase());
  });

  const currentItems = filteredCar.slice(indexOfFirstItem, indexOfLastItem);

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

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container m-auto">
      <SearchBox onSearch={setSearchData} />
      <div className="flex flex-wrap ml-[-14px]">
        {currentItems.map((item) => (
          <CarCard key={item.id} car={item} />
        ))}
      </div>
      <div className="flex justify-center my-8 ">
        <Pagination
          activePage={currentPage}
          onChange={handlePageChange}
          itemsCountPerPage={itemPerPage}
          totalItemsCount={filteredCar.length}
          pageRangeDisplayed={10}
          itemClass="mx-1"
          activeLinkClass="rounded-lg !bg-blue-500 !text-white"
         
          linkClass="px-3 py-1 rounded-lg bg-gray-100 hover:bg-blue-500 hover:text-white text-sm text-gray-800 transition-colors"
          innerClass="flex gap-2"
          
        />
      </div>
    </div>
  );
}
