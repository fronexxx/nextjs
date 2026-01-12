import React from 'react';
import {CarsComponent} from "@/components/CarsComponent";
import Form from "next/form";
import {createCarActions} from "@/Server-Actions/serverActions";

const CreateCarPage = () => {
    return (
        <div>
            <Form action={createCarActions}>
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
