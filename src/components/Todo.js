import React from 'react'
import { ACTIONS } from './TodoApp'

export default function Todo({ todo, dispatch }) {
    function handleToggleClick() {
        dispatch({ 
            type: ACTIONS.TOGGLE_TODO, 
            payload: {
                id : todo.id,
            }
        })
    }

    function handleDeleteClick() {
        dispatch({
            type: ACTIONS.DELETE_TODO,
            payload: {
                id : todo.id
            }
        })
    }

    return (
        <div>
            <span
                style = {{color: todo.complete ? 'green' : 'red'}}
            >
                {todo.name}
            </span>
            <button
                onClick={handleToggleClick}
            >
                Toggle
            </button>
            <button
                onClick={handleDeleteClick}
            >
                Delete
            </button>
        </div>
    )
}
