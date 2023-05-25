import React, { FC, useState } from 'react';
import s from './SquareOnOff.module.css'

type SquareOnOffType = {
    // value: boolean
    onClickHandle?: () => void
    clickButton: boolean
}

const SquareOnOff: FC<SquareOnOffType> = (props) => {



    return (
        <div className={s.square}>
            <button onClick={props.onClickHandle} className={s.square +` ${props.clickButton && s.squareOn}`}>On</button>
            <button onClick={props.onClickHandle} className={s.square +` ${!props.clickButton && s.squareOff}`}>Off</button>
            <div className={s.circle +` ${props.clickButton && s.squareOn || s.squareOff}`}>Circle</div>
        </div>
    );
};

export default SquareOnOff;
