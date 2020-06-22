import React, {FC, useState} from "react";
import {TaskType} from "./todoList";

type PropsType = {
    list: TaskType
    deleteTask: (id: number) => void
    setComplete: (id: number, isComplete: boolean) => void
}

export const TodoItem: FC<PropsType> = (props) =>{
    return (
        <div>
            <span>{props.list.body}</span>
            {!props.list.isCompleted ?
                <button onClick={() => props.setComplete(props.list.id, true)}>Complete task</button>
                :
                <button onClick={() => props.setComplete(props.list.id, false)}>Uncomplete task</button>
            }
            <button onClick={() => props.deleteTask(props.list.id)}>Delete task</button>
        </div>
    );
}

