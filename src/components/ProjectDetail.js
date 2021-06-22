import React from 'react';
import { useParams } from 'react-router-dom'

const ProjectDetail = () => {
    const { id } = useParams();
    return (
        <div>
            <h4>Project Details - {id}</h4>
            <p>
                
			</p>

        </div>
    )
}

export default ProjectDetail;