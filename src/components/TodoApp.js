import React, { useReducer, useState } from 'react';
import Todo from './Todo';
export const ACTIONS = {
    CREATE_TODO: 'createTodo',
    TOGGLE_TODO: 'toggleTodo',
    DELETE_TODO: 'deleteTodo'
};

const reducer = (todos, action) => {
    if(action.type === ACTIONS.CREATE_TODO) {
        return [...todos, newTodo(action.payload.name)];
    }
    else if(action.type === ACTIONS.TOGGLE_TODO) {
        return todos.map(todo => {
            if(todo.id === action.payload.id) {
                return {...todo, complete: !todo.complete};
            }
            return todo;
        })
    }
    else if(action.type === ACTIONS.DELETE_TODO) {
        return todos.filter(todo => {
            return todo.id !== action.payload.id;
        });
    }
}

const newTodo = (name) => {
    return {
        id: Date.now(),
        name: name,
        complete: false,
    };
}

export default function TodoApp() {
    const [todos, dispatch] = useReducer(reducer, []);
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type : ACTIONS.CREATE_TODO, payload: {name: name} });
        setName('');
    }

    return (
        <div>
            <form
                onSubmit={handleSubmit}
            >
                <input 
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </form>
            <div>
                {todos.map(todo => {
                    return (
                        <Todo 
                            key = {todo.id}
                            todo = {todo}
                            dispatch = {dispatch}
                        />
                    )
                })}
            </div>
        </div>
    )
}
