import React, { useState } from "react";


export default {
    title: 'React.memo demo'
}

type StateProps = {
    count: number
}

type UsersType = {
    users: string[]
}


export const NewMessageCounter: React.FC<StateProps> = ({
    count
}) => {
    return <div>{count}</div>
}

export const UsersList: React.FC<UsersType> = ({
    users
}) => {
    return <div>{users.map((user, i) => <p key={i}>{user}</p>)}</div>
}

const MemoizedUsersList = React.memo(UsersList)
const MemoizedNewMessageCounter = React.memo(NewMessageCounter)

export const Example1 = () => {

    const [count, setCount] = useState<number>(0)
    const [users, setUsers] = useState(['Sasha', 'Petia', 'Kola'])

    const addUser = () => {
        return (
            setUsers([...users, 'Sveta'+' '+ new Date().getTime()])
        )
    }

    return <>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={addUser}>addUser</button>
        <MemoizedNewMessageCounter count={count}/>
        <MemoizedUsersList users={users}/>
    </>

}
