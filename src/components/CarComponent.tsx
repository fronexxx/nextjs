import {ICar} from "@/models/ICar";

interface CarComponentProps {
    car: ICar
}

const CarComponent = ({car}: CarComponentProps) => {
    return (
        <div>
            {car.id}. {car.brand}, {car.year}, ${car.price}
        </div>
    );
};

export default CarComponent;
