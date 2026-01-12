import {getAllCars} from "@/services/service.api";
import CarComponent from "@/components/CarComponent";

export const CarsComponent = async () => {

    const cars = await getAllCars();

    return (
        <div>
            {
                cars.map(car => <CarComponent key={car.id} car={car}/>)
            }
        </div>
    );
};
