import React, { FC, useState } from 'react';
import UncontrolledAccordiongBody from "./UncontrolledAccordiongBody";
import UncontrolledAccordiongTitle from "./UncontrolledAccordiongTitle";

type AccordingPropsType = {
    titleValue: string
    collapsed: boolean
}

const UncontrolledAccordiong: FC<AccordingPropsType> = (props) => {

    const [trueCollapse, setTrueCollapse] = useState(false);

    const onClickHandle = () => {
        setTrueCollapse(!trueCollapse)
    }

    return (
        <div>
            <UncontrolledAccordiongTitle onClickHandle={onClickHandle} title={props.titleValue}/>
            {
                trueCollapse
                    ? ''
                    : <UncontrolledAccordiongBody/>

            }
        {/*<button>Collapse</button>*/}

        </div>
    );
};

export default UncontrolledAccordiong;
