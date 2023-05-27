import React, { FC } from 'react';
import UncontrolledAccordiongBody from "./UncontrolledAccordiongBody";

type AccordingTitlePropsType = {
    title: string
    onClickHandle: () => void

}

const UncontrolledAccordiongTitle: FC<AccordingTitlePropsType> = (props) => {

    return (
        <div onClick={props.onClickHandle} >
            <h1>{props.title}</h1>
        </div>
    );
};

export default UncontrolledAccordiongTitle;
