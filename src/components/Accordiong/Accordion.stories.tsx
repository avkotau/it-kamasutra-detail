import AccordingTitle from "./AccordingTitle";
import AccordionBody, { ValuePropsType } from "./AccordionBody"
import React, { useState } from "react";
import { handleClickUser, headerTitle, users, UsersType, ValueType } from "./According";

export default {
    title: 'Accordion',
}

export const Title: React.FC<ValueType> = () => {
    return <AccordingTitle value={headerTitle}/>
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

        <AccordingTitle value={'Users'} toggleSelect={toggleSelect}/>

        {
            show &&
            <AccordionBody value={users} handleClickUser={handleClickUser}/>
        }
    </>
}

