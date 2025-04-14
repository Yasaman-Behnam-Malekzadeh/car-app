interface filteredYearProps {
    filteredYear: string[]
}

export default function SelectBox({ filteredYear }:filteredYearProps) {
  return (
    <select className="select-box w-1/5 mb-5 mr-5 border-2 p-3 rounded-sm border-gray-200">
      {filteredYear.map((year) => (
        <option key={year}>{year}</option>
      ))}
    </select>
  );
}
