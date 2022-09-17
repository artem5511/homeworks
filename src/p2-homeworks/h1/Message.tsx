import React from 'react'
import m from './Message.module.css'

type PropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

function Message(props: PropsType) {
    return (
        <div className={m.container}>
            <div className={m.avatar}>
                <img alt={'котэ'} src={props.avatar}/>
            </div>
            <div className={m.mes}>
                <div className={m.block}>
                    <div className={m.name}>{props.name}</div>
                    <div className={m.message}>  {props.message}</div>
                </div>
                <div className={m.time}>
                    {props.time}
                </div>
            </div>
        </div>
    )
}

export default Message
