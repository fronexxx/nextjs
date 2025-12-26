import {IUser} from "@/models/IUser";

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getAllUsers = async (): Promise<IUser[]> => {
    return await fetch(BASE_URL + '/users')
        .then((response) => response.json())
};
