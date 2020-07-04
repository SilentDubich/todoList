import React, {ButtonHTMLAttributes, FC, useState} from "react";
import Common from "./../Styles/common.module.css"
import FormSt from "./../Styles/todoFormStyles.module.css"

type PropsType = {
    addTask: (event: any) => void | undefined
}

export const TodoForm: FC<PropsType> = (props) => {
    const [inputText, setInputText] = useState('')
    let ref = React.createRef<HTMLInputElement>()
    const onChangeText = () => {
        ref.current && setInputText(ref.current.value)
    }
    const post = () => {
        if (ref.current && ref.current.value) {
            props.addTask(inputText)
            ref.current.value = ''
            setInputText(ref.current.value)
        }
    }
    const buttonClasses = `${Common.container_commonLookButton__marginLeft} ${Common.container_commonLookButton__purpleButton}`
    return (
        <div className={Common.container_bodyTasks__marginBot}>
            <input className={FormSt.container_commonLookInput__largeInput} value={inputText} onChange={onChangeText} ref={ref} placeholder={'Write new task'}/>
            <button className={buttonClasses} onClick={post}><span>Add task</span></button>
        </div>
    );
}

