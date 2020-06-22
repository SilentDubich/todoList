import React, {FC, useState} from "react";
import {TodoItem} from "./todoItem";

export type TaskType = {
    id: number
    body: string
    isCompleted: boolean
}

type PropsType = {
    list: Array<TaskType>
    deleteTask: (id: number) => void
    setComplete: (id: number, isComplete: boolean) => void
}

export const TodoList: FC<PropsType> = (props) =>{
    const list = props.list.map(el => <TodoItem
        setComplete={props.setComplete}
        deleteTask={props.deleteTask}
        key={el.id}
        list={{id: el.id, body: el.body, isCompleted: el.isCompleted}}
    />)
    return (
        <div>
            {list}
        </div>
    )
}

