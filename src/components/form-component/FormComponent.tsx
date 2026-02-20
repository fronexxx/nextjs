'use client'

import React from "react";
import Form from "next/form";
import {useForm} from "react-hook-form";
import {createCarActions} from "@/Server-Actions/serverActions";
import {carValidator} from "@/validators/car-validator";
import {joiResolver} from "@hookform/resolvers/joi";

interface IFormProps {
    brand: string,
    price: number,
    year: number
}

const FormComponent = () => {

    const {handleSubmit, register, formState: {errors, isValid}} = useForm<IFormProps>({mode: 'all', resolver: joiResolver(carValidator)});

    const handler = handleSubmit((formDataProps: IFormProps) => {
        console.log(formDataProps);
    });

    return (
        <div>
            <Form onSubmit={handler} action={createCarActions}>
                <label>
                    <input type="text" {...register('brand')} placeholder={'brand'}/>
                    {errors.brand && <div>{errors.brand.message}</div>}
                </label>
                <label>
                    <input type="number" {...register('price')} placeholder={'price'}/>
                    {errors.price && <div>{errors.price.message}</div>}
                </label>
                <label>
                    <input type="number" {...register('year')} placeholder={'year'}/>
                    {errors.year && <div>{errors.year.message}</div>}
                </label>
                <button disabled={!isValid}>submit</button>
            </Form>
        </div>
    );
};

export default FormComponent;
