import React, { FC } from 'react';
import AccordionBody from "./AccordionBody";

type AccordingTitlePropsType = {
    value: string

}

const AccordingTitle: FC<AccordingTitlePropsType> = (props) => {
    console.log(props)
    return (
        <div>
            <h1>{props.value}</h1>
        </div>
    );
};

export default AccordingTitle;
