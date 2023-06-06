import { CustomSelector } from "./CustomSelector";
import { useState } from "react";


let items = [
    {value: '0', capital: 'London'},
    {value: '1', capital: 'Paris'},
    {value: '2', capital: 'New York City'},
    {value: '3', capital: 'Tokyo'}
]


export default {
    title: 'CustomSelector',
    component: CustomSelector
}


export const WithValue = () => {
    const [selectedValue, stateSelected] = useState('1');

    const onchange = (value: string) => {

        stateSelected(value)
    }


    return <>
        <CustomSelector
            items={items}
            value={selectedValue}
            onchange={onchange}
        />
    </>
}

