import React from 'react';
import { UsersType } from "./According";

export type ValuePropsType = {
    value: UsersType[]
    handleClickUser: (userId: string, title: string) => void
}

const AccordionBody: React.FC<ValuePropsType> = (
    {
        value,
        handleClickUser
    }
) => {

    return (
        <ul>
            {
                value.map((i, index) => <li key={index} onClick={() => handleClickUser(i.id, i.title)}>{i.title}</li>)
            }
        </ul>
    );
};

export default AccordionBody;
