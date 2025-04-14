"use client";

import { useState } from "react";

interface SearchBoxProps {
    onSearch:(value : string) => void
}

export default function SearchBox({onSearch}:SearchBoxProps) {
  
  return (
    <input
      className="search-box w-1/2 mb-5 border-2 p-3 rounded-sm border-gray-200"
      placeholder="Search car's name..."
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}
