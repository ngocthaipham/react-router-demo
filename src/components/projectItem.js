import React from 'react';
import { Link } from 'react-router-dom';

const ProjectItem = ({ project }) => {
    return (
        <div className='project-item'>
            <Link to={`projects/${project.id}`}>
                <h3>{project.title}</h3>
                <h3>{project.url}</h3>
            </Link>
        </div>
    )
}

export default ProjectItem;