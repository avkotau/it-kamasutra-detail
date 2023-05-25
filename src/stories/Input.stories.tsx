import React, { ChangeEvent, useRef, useState } from "react";

export default {
    title: 'input',
};

export const UnControlledInput = () => <input value={'hello'}/>;

export const TrackingValueOfUnControlledInput = () => {
    const [value, setValue] = useState('')


    const valueInputHandle = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return <>
        <input onChange={valueInputHandle}/>{value}
    </>

};


export const GetValueOfUnControlledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)


    const valueInputHandle = () => {
        const el = inputRef.current as HTMLInputElement

        setValue(el.value)
    }
    return <>
        <input ref={inputRef}/>
        <button onClick={valueInputHandle}

        >press
        </button>
        {value}
    </>

};
