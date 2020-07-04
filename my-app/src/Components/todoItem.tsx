import React, {FC, useState} from "react";
import {TaskType} from "./todoList";
import Common from "../Styles/common.module.css";
import ItemsStyles from "../Styles/todoItems.module.css"

type PropsType = {
    list: TaskType
    deleteTask: (id: number) => void
    setComplete: (id: number, isComplete: boolean) => void
}

export const TodoItem: FC<PropsType> = (props) =>{
    const itemBodyClasses = `
    ${ItemsStyles.container_commonLookTask__large} 
    ${props.list.isCompleted ? ItemsStyles.container_textBody__greenCompleted : ItemsStyles.container_textBody__whiteNotCompleted}
    `
    const buttonClasses = `${Common.container_commonLookButton__marginLeft} ${Common.container_commonLookButton__purpleButton}`

    return (
        <div className={`${Common.display} ${Common.container_bodyTasks__marginBot}`}>
            <div className={itemBodyClasses}>
                <span>{props.list.body}</span>
            </div>
            <div>
                {!props.list.isCompleted ?
                    <button className={buttonClasses} onClick={() => props.setComplete(props.list.id, true)}>Complete task</button>
                    :
                    <button className={buttonClasses} onClick={() => props.setComplete(props.list.id, false)}>Uncomplete task</button>
                }
                <button className={buttonClasses} onClick={() => props.deleteTask(props.list.id)}>Delete task</button>
            </div>
        </div>
    );
}

