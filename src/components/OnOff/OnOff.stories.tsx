
import React, { useState } from 'react';
import SquareOnOff from '../SquareOnOff/SquareOnOff';

export default {
    title: 'SquareOnOff',
};

export const SquareOnStory = () => {

    return <SquareOnOff clickButton={true} />;
};

export const SquareOffStory = () => {

    return <SquareOnOff  clickButton={false} />;
};

export const SquareOnOffStory = () => {
    const [clickButton, setClickButton] = useState(true);

    const onClickHandle = () => {
        setClickButton(!clickButton);
    };

    return <SquareOnOff onClickHandle={onClickHandle} clickButton={clickButton} />;
};

