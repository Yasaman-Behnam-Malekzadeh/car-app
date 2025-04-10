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

export default function CarDetail({ car }: { car: carType }) {
  return (
    <div className="flex flex-col p-5 bg-white">
        <img src="/car2.jpg" alt="car-detail" className="m-3 h-[180px]" />
      <span>
        Make:<strong>{car.make}</strong>
      </span>
      <span>
        Model:<strong>{car.model}</strong>
      </span>
      <span>
        Trancy: <strong>{car.trancy}</strong>
      </span>
      <span>
        VClass:<strong>{car.vclass}</strong>
      </span>
      <span>
        Year:<strong>{car.year}</strong>
      </span>
      <span>
        Fuel type:<strong>{car.fueltype}</strong>
      </span>
      <span>
        Drive:<strong>{car.drive}</strong>
      </span>
      <span>
        Base model:<strong>{car.basemodel}</strong>
      </span>
    </div>
  );
}
