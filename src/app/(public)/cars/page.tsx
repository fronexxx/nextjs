import React from 'react';
import {CarsComponent} from "@/components/CarsComponent";
import Form from "next/form";
import {createCarActions} from "@/Server-Actions/serverActions";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "@/validators/car-validator";

interface IFormProps {
    brand: string,
    price: number,
    year: number
}

const CreateCarPage = () => {
    const {handleSubmit, register, formState: {errors, isValid}} = useForm<IFormProps>({mode: 'all', resolver: joiResolver(carValidator)});

    const handler = handleSubmit((formDataProps: IFormProps) => {
        console.log(formDataProps);
    });

    return (
        <div>
            <Form onSubmit={handler} action={createCarActions}>
                <input type="text" name={'brand'} placeholder={'brand'}/>
                <input type="number" name={'price'} placeholder={'price'}/>
                <input type="number" name={'year'} placeholder={'year'}/>
                <button>submit</button>
            </Form>

            <div>
                <CarsComponent/>
            </div>
        </div>
    );
};

export default CreateCarPage;
