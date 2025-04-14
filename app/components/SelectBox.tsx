interface filteredYearProps {
  filteredYear: string[];
  onYear: (value: string) => void;
}

export default function SelectBox({ filteredYear, onYear }: filteredYearProps) {
  console.log(onYear);
  return (
    <select
      defaultValue={"All cars"}
      onChange={(e) => onYear(e.target.value)}
      className="select-box w-1/5 mb-5 mr-7 border-2 p-3 rounded-sm border-gray-200"
    >
      {filteredYear.map((year) => (
        <option key={year}>{year}</option>
      ))}
    </select>
  );
}
