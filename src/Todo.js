const Todo = (title, description, dueDate, priority) => {
    return {title, description, dueDate, priority};
};

let test_todo = Todo("Todo Title", "This is a test todo.", "10/27/1991", "High");

console.table(test_todo);