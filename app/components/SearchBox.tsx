"use client";

import { useState } from "react";

export default function SearchBox() {
  const [searchData, setSearchData] = useState("");
  console.log(searchData)
  return (
    <input
      className="w-2/3 mb-5 ml-4 border-2 p-3 rounded-sm border-gray-200"
      placeholder="Search about your car..."
      onChange={(e) => setSearchData(e.target.value)}
    />
  );
}
