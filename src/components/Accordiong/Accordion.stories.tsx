import AccordingTitle from "./AccordingTitle";
import AccordionBody, { ValuePropsType } from "./AccordionBody"
import React, { useState } from "react";
import { handleClickUser, titleHeader, users, UsersType, ValueType } from "./According";

export default {
    title: 'Accordion',
}

export const Title: React.FC<ValueType> = () => {
    return <AccordingTitle value={titleHeader}/>
}

export const Users: React.FC<UsersType[]> = () => {
    return <AccordionBody value={users} handleClickUser={handleClickUser}/>
}

export const Accordion: React.FC<ValueType & UsersType[]> = () => {
    const [show, setShow] = useState<boolean>(true);

    const toggleSelect = () => {
        setShow(!show)
    }

    return <>
        <div onClick={toggleSelect}>
            <AccordingTitle value={'Users'}/>
        </div>
        {
            show &&
            <AccordionBody value={users} handleClickUser={handleClickUser}/>
        }
    </>
}

