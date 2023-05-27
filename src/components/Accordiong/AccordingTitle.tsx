import React from 'react';

type AccordingTitlePropsType = {
    value: string
    toggleSelect?: () => void

}

const AccordingTitle: React.FC<AccordingTitlePropsType> = (
    {
        value,
        toggleSelect
    }
) => {

    return (
        <div onClick={toggleSelect}>
            <h1>{value}</h1>
        </div>
    );
};

export default AccordingTitle;
