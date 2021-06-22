import React from 'react';
import ProjectItem from './projectItem'

const data = [
    {   
        id: '1',
        title: "ListBook",
		url: "https://github.com/ngocthaipham/listbooks"
    },
    { 
        id: '2',
        title: "Tic Tac Toe",
		url: "https://github.com/ngocthaipham/tic-tac-toe"
    },
    {
        id: '3',
        title: "Restful Api",
		url: "https://github.com/ngocthaipham/restful-api"
    }
];

const Projects = () => {
    return (
        <div>
            <h3>All my projects</h3>
            <div className='projects'>
                {data.map((item, i) => (
                    <ProjectItem key={i} project={item} />
                ))}
            </div>
        </div>
    )
} 

export default Projects;