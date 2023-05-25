import React from 'react';
import logo from './logo.svg';
import './App.css';
import According from "./components/Accordiong/According";
import Rating from "./Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordiong from '../src/components/UncontrolledAccordiong/UncontrolledAccordiong'

function App() {
    return (
        //className="App"
        <div className="App">
            <According titleValue={'Menu'} collapsed={false}/>
            {/*<UncontrolledAccordiong titleValue={'Users'} collapsed={false}/>*/}
            <Rating />
            <OnOff/>
        </div>
    );
}

export default App;
