import {ICar} from "@/models/ICar";
import {revalidatePath} from "next/cache";

const BASE_URL = 'http://owu.linkpc.net/carsAPI/v1/'

export const getAllCars = async (): Promise<ICar[]> => {
    return await fetch(BASE_URL + '/cars')
        .then((response) => response.json())
};

type Cars = { brand: string, price: number, year: number };
export const createCars = async (data: Cars) => {
    await fetch(BASE_URL + '/cars', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
    });
    revalidatePath('/cars')
}


