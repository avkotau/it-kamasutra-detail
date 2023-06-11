import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import React, { useMemo, useState } from "react";
import InputLabel from "@mui/material/InputLabel";

export default {
    title: 'Select countries'
}

type CounterIncreaseType = {
    count1?: number
}

export const CounterIncrease: React.FC<CounterIncreaseType> = ({
    count1
}) => {
    const [count, setCount] = useState(0);
    const handlerCounter = () => {
        setCount(count + 1)
    }
    console.log('rerender CounterIncrease')

    return (
        <div>
            <button onClick={handlerCounter}>+</button>
            <hr/>
            <span>{count}</span>
        </div>
    )
}

const MemorizedCounterIncrease = React.memo(CounterIncrease)

export const ReactMemoUseMemoSelectCountries = () => {
    const [cities, setCities] = useState([
        {id: '1', city: 'Minsk', population: 2000000},
        {id: '2', city: 'Brest', population: 520000},
        {id: '3', city: 'Mogilev', population: 500000},
        {id: '4', city: 'Tokio', population: 20000000},
        {id: '5', city: 'Paris', population: 1200000},
        {id: '6', city: 'Singapore', population: 5500000},
        {id: '7', city: 'Peking', population: 21500000},
        {id: '8', city: 'Kiev', population: 3080000},
        {id: '9', city: 'Philadelphia', population: 1680000},
    ]);

    const selectorNames = [
        'cities of Belarus',
        'first letter of the city is "P"',
        'cities with a population of more than 2,000,000 people'
    ];


    const idCitiesBel = ['1', '2', '3']

    const citiesBel = useMemo(() => cities
        .filter(ct => idCitiesBel.includes(ct.id))
        .map((ct, i) => {
            console.log('rerender CitiesBel')
            return (
                <MenuItem key={i} value={ct.city}>{ct.city}</MenuItem>
            )
        }), [cities])


    const firstLetterP = useMemo(() => cities
        .filter(ct => ct.city[0] === 'P')
        .map((ct, i) => {
            console.log('rerender firstLetterP')
            return (
                <MenuItem key={i} value={ct.city}>{ct.city}</MenuItem>
            )
        }), [cities])


    const populationMore = cities
        .filter(ct => ct.population > 2000000)
        .map((ct, i) => {
            console.log('rerender population')
            return (
                <MenuItem key={i} value={ct.city}>{ct.city}</MenuItem>
            )
        })

    const handlerAddCity = () => {
        setCities([...cities, {
            id: Math.random().toString(36).slice(2),
            city: 'Guantanamo',
            population: 34000
        }])
    }

    return (
        <>
            <InputLabel id="demo-simple-select-label" style={{fontSize: 22}}>{selectorNames[0]}</InputLabel>
            <Select>
                {citiesBel}
            </Select>
            <InputLabel id="demo-simple-select-label" style={{fontSize: 22}}>{selectorNames[0]}</InputLabel>
            <Select>
                {firstLetterP}
            </Select>
            <InputLabel id="demo-simple-select-label" style={{fontSize: 22}}>{selectorNames[0]}</InputLabel>
            <Select>
                {populationMore}
            </Select>
            <button onClick={handlerAddCity}>add city</button>
            <MemorizedCounterIncrease/>
        </>
    )
}
