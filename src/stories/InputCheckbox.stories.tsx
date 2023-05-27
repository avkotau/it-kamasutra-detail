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


export default {
    type: 'Input, checkbox, select',
    component: InputFoo
}
