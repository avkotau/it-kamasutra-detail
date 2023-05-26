import React, { ChangeEvent, useState } from "react";


export const InputFoo = () => {

    const [value, setValue] = useState<string>('');

    const onchangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <div>
            <input
                value={value} onChange={onchangeInput}
            />
            {value}
        </div>)
}

export const InputCheckboxFoo = () => {

    const [value, setValue] = useState<boolean>(false);

    const onchangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.checked)
    }

    return (
        <div>
            <input
                type={'checkbox'}
                checked={value} onChange={onchangeInput}
            />
            {value}
        </div>)
}


export const SelectFoo = () => {

    const [value, setValue] = useState('0');

    const onchangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <select onChange={onchangeSelect} value={value}>
            <option>default</option>
            <option value={'1'}>Minsk</option>
            <option value={'2'}>Legnica</option>
            <option value={'3'}>Wroclaw</option>
        </select>

    )
}


export default {
    type: 'Input, checkbox, select',
    component: InputFoo
}
