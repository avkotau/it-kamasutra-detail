import React, { FC } from 'react';
import AccordionBody from "./AccordionBody";
import AccordingTitle from "./AccordingTitle";

type AccordingPropsType = {
    titleValue: string
    collapsed: boolean
}

const According: FC<AccordingPropsType> = (props) => {
    console.log(props)
    return (
        <div>
            <AccordingTitle value={props.titleValue}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    );
};

export default According;
