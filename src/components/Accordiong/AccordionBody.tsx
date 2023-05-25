import React from 'react';

export type ValuePropsType = {
    value: string[]
}

const AccordionBody: React.FC<ValuePropsType> = ({
                                                     value
                                                 }) => {

    return (
        <ul>
            {
                value.map((i, index) => <li key={index}>{i}</li>)
            }
        </ul>
    );
};

export default AccordionBody;
