import { useMemo, useState } from "react";


export default {
    title: 'UseMemo'
}

export const Example1 = () => {

    const [paramA, setParamA] = useState<number>(1)
    const [paramB, setParamB] = useState<number>(1)


    let resultB = 1;

    let resultA = useMemo(() => {
        let takeNumberA = 1;
        for (let i = 1; i <= paramA; i++) {
            let fake = 0;
            while (fake <= 1000000000) {
                fake++
            }
            takeNumberA *= i
        }
        return takeNumberA
    }, [paramA])


    for (let i = 1; i <= paramB; i++) {
        resultB *= i
    }

    return (
        <>
            <div>
                <input value={paramA} onChange={(e) => setParamA(Number(e.currentTarget.value))}/>
            </div>
            <div>
                <input value={paramB} onChange={(e) => setParamB(+e.currentTarget.value)}/>
            </div>
            <div>result a: {resultA}</div>
            <div>result b: {resultB}</div>
        </>
    )
}
