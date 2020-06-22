import React, {ButtonHTMLAttributes, FC, useState} from "react";

type PropsType = {
    addTask: (event: any) => void | undefined
}

export const TodoForm: FC<PropsType> = (props) =>{
    const [inputText, setInputText] = useState('')
    let ref = React.createRef<HTMLInputElement>()
    const onChangeText = () => {
        ref.current && setInputText(ref.current.value)
    }
    const post = () => {
        props.addTask(inputText)
        if (ref.current) {
            ref.current.value = ''
            setInputText(ref.current.value)
        }
    }
    return (
        <div>
                <input value={inputText} onChange={onChangeText} ref={ref} placeholder={'Write new task'}/>
                <button onClick={post}><span>Add task</span></button>
        </div>
    );
}

