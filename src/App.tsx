import React from 'react';
import './App.css';
import According from "./components/Accordiong/According";
import Rating from "./Rating";
import OnOff from "./components/OnOff/OnOff";
import SelectFoo from "./components/Select/Select";
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
        </div>
    );
}

export default App;
