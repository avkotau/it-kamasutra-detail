
import React, { useState } from 'react';
import SquareOnOff from '../SquareOnOff/SquareOnOff';

export default {
    title: 'SquareOnOff',
    component: SquareOnOff,
};

const SquareOnStory = () => {

    return <SquareOnOff clickButton={true} />;
};

const SquareOffStory = () => {

    return <SquareOnOff  clickButton={false} />;
};


const SquareOnOffStory = () => {
    const [clickButton, setClickButton] = useState(true);

    const onClickHandle = () => {
        setClickButton(!clickButton);
    };

    return <SquareOnOff onClickHandle={onClickHandle} clickButton={clickButton} />;
};

export const SquareOn = () => <SquareOnStory />;
export const SquareOff = () => <SquareOffStory />;
export const SquareForTest = () => <SquareOnOffStory />;
