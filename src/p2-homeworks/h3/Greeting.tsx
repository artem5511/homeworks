import React, {ChangeEvent, MouseEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {

    const inputClass = error ? s.inputerror : s.noerror
    return (
        <div className={s.greeting}>
            <div>
                <input value={name} onChange={setNameCallback} className={inputClass}/>
                <div className={s.error}>{error}</div>
            </div>

            <button className={s.button} onClick={addUser} disabled={!name}>add</button>
            <div className={s.tU}>{totalUsers}</div>
        </div>
    )
}

export default Greeting
