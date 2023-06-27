import React from 'react';
import './App.css';
import According from "./components/Accordiong/According";
import Rating from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import SelectFoo from "./components/Select/Select";
import { CustomSelector } from "./components/CustomSelector/CustomSelector";
import { Clock } from "./components/Clock/Clock";
// import UncontrolledAccordiong from '../src/components/UncontrolledAccordiong/UncontrolledAccordiong'

function App() {
    return (
        //className="App"
        <div className="App">
            {/*@ts-ignore*/}
            <According />
            {/*<UncontrolledAccordiong titleValue={'Users'} collapsed={false}/>*/}
            <Rating />
            <OnOff/>
            <SelectFoo/>
            <CustomSelector/>
            <Clock/>
        </div>
    );
}

export default App;
