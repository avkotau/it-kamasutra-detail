import React, { useEffect, useState } from 'react';
import s from './Clock.module.css'

export const Clock = () => {
    const [date, setDate] = useState(new Date())

    const formatClock = (num: number) => num < 10 ? '0' + num : num

    const hours = date.getHours() * 30;
    const minutes = date.getMinutes() * 6;
    const seconds = date.getSeconds() * 6;


    useEffect(() => {
        const setIntervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => clearInterval(setIntervalId)
    }, [])


    return (
        <div className={s.clock}>
            <div className={s.hourHand}
                 style={{transform: "rotate(" + formatClock(hours) + "deg)"}}
            ></div>
            <div className={s.minuteHand}
                 style={{transform: "rotate(" + formatClock(minutes) + "deg)"}}
            ></div>
            <div className={s.secondHand}
                 style={{transform: "rotate(" + formatClock(seconds) + "deg)"}}
            ></div>
        </div>
    )
}

