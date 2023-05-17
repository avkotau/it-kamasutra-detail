
import React, { useState } from 'react';
import SquareOnOff from '../components/SquareOnOff/SquareOnOff';

export default {
    title: 'SquareOnOff',
    component: SquareOnOff,
};

const SquareOnOffStory = () => {
    const [clickButton, setClickButton] = useState(true);

    const onClickHandle = () => {
        setClickButton(!clickButton);
    };

    return <SquareOnOff onClickHandle={onClickHandle} clickButton={clickButton} />;
};

export const Default = () => <SquareOnOffStory />;
export const Default2 = () => <SquareOnOffStory />;
