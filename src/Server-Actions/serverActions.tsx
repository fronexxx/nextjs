'use server';

import {createCar} from "@/services/service.api";

export const createCarActions = async (formData: FormData) => {
    await createCar({
        brand: formData.get('brand') as string,
        price: Number(formData.get('price')),
        year: Number(formData.get('year'))
    })
}
