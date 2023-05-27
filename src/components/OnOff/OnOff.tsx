import React, { useState } from 'react';

import SquareOnOff from "../SquareOnOff/SquareOnOff";


const OnOff = () => {
    const [clickButton, setClickButton] = useState(false);

    const onClickHandle = () => {
        setClickButton(!clickButton)
    }
    return (
        <div style={{width: '300px', height: '250px'}}>
            <SquareOnOff onClickHandle={onClickHandle} clickButton={clickButton}/>
        </div>
    );
};

export default OnOff;
