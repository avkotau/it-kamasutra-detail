import React, { FC } from 'react';

type StarType = {
    selected: boolean | number
    value: number
    onClickHandle: (value: number) => void
}

const Star: FC<StarType> = (props) => {

    return (
        <span onClick={() => props.onClickHandle(props.value)}>
            {props.selected
                ? <b>star </b>
                : ' star'}
        </span>
    )

};

export default Star;
