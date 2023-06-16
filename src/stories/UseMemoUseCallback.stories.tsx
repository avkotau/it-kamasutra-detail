import React, { useCallback, useMemo, useState } from "react";

export default {
    title: 'UseMemo, Like useCallback'
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


export const LikeUseCallback = () => {

    const [counter, setCounter] = useState<number>(0)
    const [books, setBooks] = useState(['React', 'Js', 'CSS', 'Html'])

    const newArray = useMemo(() => {
        const newArray = books.filter(u => u.toLocaleLowerCase().indexOf('a') > -1)
        return newArray
    }, [books])

    const memorisedAddBook = useMemo(() => {
        console.log(books)
        return () => {
            setBooks([...books, 'Angular' + ' ' + new Date().getTime()])

        }
    }, [books])

    const memorisedAddBook2 = useCallback(() => {
        setBooks([...books, 'Angular' + ' ' + new Date().getTime()])
    }, [books])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Book books={books} addBook={memorisedAddBook2}/>
    </>

}

type BooksPropsType = {
    books: Array<string>
    addBook: () => void
}

const Books: React.FC<BooksPropsType> = ({books, addBook}) => {

    return (
        <div>
            <button onClick={() => addBook()}>addBook</button>
            {
                books.map((book, i) => <div key={i}>{book}</div>)
            }</div>
    )
}

const Book = React.memo(Books)
