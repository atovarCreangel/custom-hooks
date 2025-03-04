import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = [];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {
    
    const [todos, dispatch ] = useReducer(todoReducer, initialState, init);
    
        useEffect(() => {
            localStorage.setItem('todos', JSON.stringify(todos));
        }, [todos])
        
    
        const handleAddTodo = (newTodo) => {
            dispatch({ type: 'add',payload: newTodo,});
        }
    
        const handleDeleteTodo = (todoId) => {
            dispatch({type: 'delete',payload: todoId,});
        }
    
        const handleToggleTodo = (todoId) => {
            dispatch({type: 'toggle',payload: todoId,});
        }

        const handlePendingTodo = todos.filter(todo => !todo.done).length;

    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: handlePendingTodo,
        handleAddTodo,
        handleDeleteTodo,
        handleToggleTodo,
        handlePendingTodo
    }
}
