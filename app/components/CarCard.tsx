interface carType {
    make: string,
    model: string,
    trancy: string,
    vclass: string,
    year: string,
    fueltype:string,
    drive:string,
    basemodel:string
}

export default function CarCard({car}:{car:carType}) {

  return (
    <div className="car-detail flex flex-col rounded-sm bg-gray-100 border-0 h-[300px] w-[300px] ml-5 mb-5">
        <img src="/car2.jpg" alt="car-detail" className="m-3 h-[180px]"/>
        <div className="flex flex-col mx-3">
            <span>Name: <strong>{car.make}</strong></span>
            <span>Model: <strong>{car.model}</strong></span>
            <span>Year: <strong>{car.year}</strong></span>
        </div>
    </div>
  );
}
