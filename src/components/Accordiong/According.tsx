import React, { FC, useState } from 'react';
import AccordionBody from "./AccordionBody";
import AccordingTitle from "./AccordingTitle";


export type UsersType = {
    title: string
    id: string
}

export type ValueType = {
    titleHeader: string
}

export const users: UsersType[] = [
    {title: 'Dima', id: '1'},
    {title: 'Anna', id: '2'},
    {title: 'Sasha', id: '3'},
    {title: 'Janna', id: '4'}
]

export const titleHeader = 'Users'

export const handleClickUser = (userId: string, title: string) => {
    alert(`Will be happy ${title} with id ${userId}`)
}

const According: React.FC<ValueType & UsersType[]> = () => {

    const [collapsed, stateCollapsed] = useState<boolean>(false)

    const toggleSelect = () => {
        stateCollapsed(!collapsed)
    }

    return (
        <>
            <div onChange={toggleSelect}>
                <AccordingTitle value={titleHeader}/>
            </div>

            {collapsed && <AccordionBody
                value={users}
                handleClickUser={handleClickUser}
            />}
        </>
    );
};

export default According;
