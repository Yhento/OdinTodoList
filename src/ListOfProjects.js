import { Project } from "./Project.js";
const ListOfProjects = (function() {

    let list_of_projects = [];

    const getProjectList = () => {return list_of_projects};

    const addProject = (project_name) => {
        let new_project = Project(project_name);
        list_of_projects.push(new_project);
    }

    const changeProjectName = (project, new_name) =>{
        project.project_name = new_name;
    }

    const removeProject = (project_index) => {
        list_of_projects.splice(project_index, 1);
    }



return{getProjectList, addProject, changeProjectName, removeProject}


})();

export {ListOfProjects};