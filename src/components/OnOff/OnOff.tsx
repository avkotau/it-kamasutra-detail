import React, { useState } from 'react';

import SquareOnOff from "../SquareOnOff/SquareOnOff";


const OnOff = () => {
    const [clickButton, setClickButton] = useState(false);

    const onClickHandle = () => {
        setClickButton(!clickButton)
    }
    return (
        <div style={{width: '500px', height: '500px'}}>
            <SquareOnOff onClickHandle={onClickHandle} clickButton={clickButton}/>
        </div>
    );
};

export default OnOff;
