import React, {useState, ChangeEvent, MouseEvent} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";
import {rename} from "fs";
import {v1} from "uuid";

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}
// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value)
        setError('')// need to fix
    }

    const addUser = () => {
        const trimmedName = name.trim()
        if (trimmedName !== '') {
            addUserCallback(name)
            alert(`Hello ${name}!`)
            setName('')
        } else {
            setError('Name is required!')
        }
        // need to fix
    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
