// eslint-disable-next-line no-unused-vars
import React from 'react';
import ProjectDetailComponents from '../../components/ProjectDetailComponents/ProjectDetailComponents';
import { TypeAnimation } from 'react-type-animation';
import './Projects.css'

const Projects = () => {
    return (
        <main role='main'>
            <header className='m-5 projectSectionHeader'>
                <h5>My Projects</h5>
                <TypeAnimation
                    sequence={[
                        "Hello, Greetings. Here you can find some of my projects that I have done most recently. In some of those projects, I have done the frontend and the backend parts both. If you really want to deep dive into the coding behind those projects then consider a visit to the github client side and github server side codes links provided with each project's cards. Thank you to consider a visit to my Project page."
                    ]}
                />
            </header>
            <ProjectDetailComponents />
        </main>
    );
};

export default Projects;