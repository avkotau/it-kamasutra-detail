import React, { KeyboardEvent, useEffect, useState } from "react";
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

    const [hoveredElement, setHoveredElement] = useState(value);
    console.log('hoveredElement',hoveredElement)
    const changedItem = items.find(cp => cp.value === value)
    const hoveredItem = items.find(cp => cp.value === hoveredElement)

    useEffect(() => {
        setHoveredElement(value)
    },[value])

    const onKeyUpHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp'){

    }
        for (let i = 0; i < items.length; i++) {
            if (items[i].value === hoveredElement){
                const pretendentElement = e.key === 'ArrowDown'
                ? items[i+1].value
                    : items[i-1].value
                if (pretendentElement) {
                    console.log('items[i+1]',  items[i+1].value)
                    onchange(items[i+1].value)
                }

            }
        }
    }


    const onchangeValueHandler = () => {
        setActive(!active)
    }

    const callMultipleFunctions = (value: string) => {
        onchange(value)
        onchangeValueHandler()
    }

    return (
        <>
            <div className={st.selector}>

                <span onClick={onchangeValueHandler}>{changedItem && changedItem.capital}</span>
                <div className={active ? st.show : st.toggle}
                    onKeyUp={onKeyUpHandler}
                     tabIndex={0}
                >
                    {items.map((ct, i) => (

                        <div key={ct.value}
                             tabIndex={i+1}
                             onMouseEnter={() => setHoveredElement(ct.value)}
                             onClick={() => callMultipleFunctions(ct.value)}
                             className={hoveredItem === items[i] ? st.items + ' ' + st.itemSelected : st.items}
                        >{ct.capital}</div>

                    ))}
                </div>

            </div>

        </>
    )
}
