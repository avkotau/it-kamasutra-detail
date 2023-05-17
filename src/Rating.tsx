import React, { FC, useState } from 'react';
import Star from "./Star";

// type RatingType = {
//     value: 0 | 1 | 2 | 3 | 4
// }

const Rating = () => {
    const [valueState, setValueState] = useState(4)

    const onClickHandle = (value: number) => {
        setValueState(value)
    }

    return (
        <div>
            <Star value={1} selected={valueState > 0} onClickHandle={onClickHandle} />
            <Star value={2} selected={valueState > 1} onClickHandle={onClickHandle} />
            <Star value={3} selected={valueState > 2} onClickHandle={onClickHandle} />
            <Star value={4} selected={valueState > 3} onClickHandle={onClickHandle} />
            <Star value={5} selected={valueState > 4} onClickHandle={onClickHandle} />

        </div>
    );
};

export default Rating;
