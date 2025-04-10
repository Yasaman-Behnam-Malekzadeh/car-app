"use client";

import { useState } from "react";

interface SearchBoxProps {
    onSearch:(value : string) => void
}

export default function SearchBox({onSearch}:SearchBoxProps) {
  
  return (
    <input
      className="w-2/3 mb-5 ml-4 border-2 p-3 rounded-sm border-gray-200"
      placeholder="Search about your car..."
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}
