import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm() {
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onCancel = () => {
        setOpenModal(false);    
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    };

    return(
    <form onSubmit={onSubmit}>
        <label>Enter your new TODO</label>
        <textarea placeholder="Build the proof" 
        value={newTodoValue}
        onChange={onChange}
        />
        <div className="TodoForm-buttonContainer">
            <button 
            type="button"
            className="TodoForm-button
            TodoForm-button--cancel"
            onClick={onCancel}>
                Cancel
            </button>
            <button 
            type="submit"
            className="TodoForm-button
            TodoForm-button--add">
                Add
            </button>
        </div>
    </form>
    );
}

export { TodoForm };