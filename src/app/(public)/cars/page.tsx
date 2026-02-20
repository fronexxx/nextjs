import React from 'react';
import {CarsComponent} from "@/components/CarsComponent";
import FormComponent from "@/components/form-component/FormComponent";


const CreateCarPage = () => {


    return (
        <div>
            <div>
                <FormComponent/>
                <CarsComponent/>
            </div>
        </div>
    );
};

export default CreateCarPage;
