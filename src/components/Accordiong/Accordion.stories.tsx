import AccordingTitle from "./AccordingTitle";
import AccordionBody, { ValuePropsType } from "./AccordionBody"
import React from "react";

export default {
  title: 'Accordion',
  component: AccordingTitle
}


const AccordingTitleStory = () => {
  return <AccordingTitle value={'Menu'}/>
}

const AccordionBodyStory: React.FC<ValuePropsType> = (props) => {
  return <AccordionBody value={['Dima', 'Anna', 'Sasha', 'Janna']}/>
}

export const Title = () => <AccordingTitleStory/>
export const Body = () => <AccordionBodyStory value={['Dima', 'Anna', 'Sasha', 'Janna']}/>
