import { Todo } from "./Todo.js";

const Project = (name) => {
    const project_name = name;
    let list_of_todos = [];

    const getListOfTodos = () => {
        return list_of_todos;
    }

    const addTodo = (title, description, dueDate, priority) => {
        let new_todo = Todo(title, description, dueDate, priority);
        list_of_todos.push(new_todo);
    }

    const editTodo = (todo, title, description, dueDate, priority) => {
        todo.title = title;
        todo.description = description;
        todo.dueDate = dueDate;
        todo.priority = priority;
    }

    const removeTodo = (todo) => {
        list_of_todos.splice(todo, 1);
    }
    return {project_name, getListOfTodos, addTodo, editTodo, removeTodo};
}

export{Project};