import React from 'react';
import Project from "./../Components/Project";
import {projects} from  "./../Helpers/projectsList";

const Projects = () => {
    return (  <main class="section">
    <div class="container">
        <h2 class="title-1">My Projects</h2>
        <ul class="projects">
            {projects.map((project,index)=>{
                return (<Project key={index}
                     title={project.title}
                    img={project.images[0]}
                    index={index}
                    short_description={project.short_description}>
                 </Project> );
            }
            )}

        </ul>
    </div>
</main>
);
}
 
export default Projects;