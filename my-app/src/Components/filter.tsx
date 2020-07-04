import React, {FC, useState} from "react";

type PropsType = {
    filter: (filter: boolean | null) => void
    filtered: boolean | null
}

export const FilterButtons: FC<PropsType> = (props) => {
    const setFilter = (filter: boolean | null) => {
        props.filter(filter)
    }
    return (
        <div>
            <label>All</label>
            <input onClick={() => setFilter(null)} name={'filter'} type="radio" checked={props.filtered === null}/>
            <label>Completed</label>
            <input onClick={() => setFilter(true)} name={'filter'} type="radio" checked={props.filtered === true}/>
            <label>Not completed</label>
            <input onClick={() => setFilter(false)} name={'filter'} type="radio" checked={props.filtered === false}/>
        </div>
    )
}