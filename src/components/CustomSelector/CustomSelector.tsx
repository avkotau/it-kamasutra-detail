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
    const changedItem = items.find(cp => cp.value === value)
    const hoveredItem = items.find(cp => cp.value === hoveredElement)

    useEffect(() => {
        setHoveredElement(value)
    }, [value])

    const onKeyUpHandler = (e: KeyboardEvent<HTMLDivElement>) => {

        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {

            for (let i = 0; i < items.length; i++) {

                const currentIndex = items.findIndex(item => item.value === hoveredElement);
                const nextIndex = e.key === 'ArrowDown' ? currentIndex + 1 : currentIndex - 1;
                const currentElement = items[nextIndex]?.value;

                if (currentElement !== undefined) {
                    onchange(currentElement);
                }
            }
        }
        if (e.key === 'Escape' || e.key === 'Enter') {
            setActive(false)
        }
    }

    const toggleActive = () => {
        setActive(!active)
    }

    const callMultipleFunctions = (value: string) => {
        onchange(value)
        toggleActive()
    }

    return (
        <>
            <div className={st.selector}>

                <div
                    onKeyUp={onKeyUpHandler}
                    tabIndex={0}
                >
                    <div onClick={toggleActive}>{changedItem && changedItem.capital}</div>
                    {active &&

                        items.map((ct, i) => (

                            <div key={ct.value}
                                 onMouseEnter={() => setHoveredElement(ct.value)}
                                 onClick={() => callMultipleFunctions(ct.value)}
                                 className={hoveredItem === items[i] ? st.items + ' ' + st.itemSelected : st.items}
                            >{ct.capital}</div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
