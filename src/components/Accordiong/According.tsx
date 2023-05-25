import React, { FC } from 'react';
import AccordionBody from "./AccordionBody";
import AccordingTitle from "./AccordingTitle";

export type AccordingPropsType = {
    titleValue: string
    collapsed: boolean
}

const According: FC<AccordingPropsType> = (props) => {
    console.log(props)
    return (
        <div>
            <AccordingTitle value={props.titleValue}/>
            {!props.collapsed && <AccordionBody value={['Dima', 'Anna', 'Sasha', 'Janna']} />}
        </div>
    );
};

export default According;
