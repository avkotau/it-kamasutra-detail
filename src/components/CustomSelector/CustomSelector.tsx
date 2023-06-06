import React, { useState } from "react";
import st from './CustomSelector.module.css'


type ItemType = {
    value: string
    capital: string
}

type SelectPropsType = {
    items: ItemType[]
    value: string
    onchange: (value: string) => void
}


export const CustomSelector: React.FC<SelectPropsType> = ({
    items,
    value,
    onchange
}) => {

    const [active, setActive] = useState(false);

    const [] = useState();


    const onchangeValueHandler = () => {
        setActive(!active)
    }

    const changedItem = items.find(cp => cp.value === value)

    const callMultipleFunctions = (value: string) => {
        onchange(value)
        onchangeValueHandler()
    }

    return (
        <>
            <div className={st.selector}>

                <span onClick={onchangeValueHandler}>{changedItem && changedItem.capital}</span>
                <div className={active ? st.show : st.toggle}>
                    {items.map((ct, i) => (

                        <div key={ct.value}
                             onClick={() => callMultipleFunctions(ct.value)}
                             className={st.items}
                        >{ct.capital}</div>

                    ))}
                </div>

            </div>

        </>
    )
}
