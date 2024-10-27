import { ListOfProjects } from "./ListOfProjects.js";

const UIController = (function(){


const displayProjects = () => {

    let list_of_projects = ListOfProjects.getProjectList();

    list_of_projects.forEach((project) => {
        // UI/DOM logic for displaying projects goes here
        console.log(project.project_name);
    })
}

const displayTodos = (project_index) => {

    let list_of_projects = ListOfProjects.getProjectList();
    let selected_project = list_of_projects[project_index];
    let project_todos = selected_project.getListOfTodos();
    project_todos.forEach((todo)=> {
        // UI DOM logic for displaying the selected project todos goes here.
        console.table(todo);
    })

}



return {displayProjects, displayTodos}

})();

export {UIController};