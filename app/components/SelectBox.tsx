export default function SelectBox({ options }: { options: string[] }) {
  return (
    <select className="ml-5 border-2 p-4 rounded-sm border-gray-200 ">
      {options.map((item, index) => (
        <option key={index}>{item}</option>
      ))}
    </select>
  );
}
