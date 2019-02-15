import React, { Component } from 'react';
import Project from '../Project/Project.jsx';

class ProjectList extends Component{
    render() {
        let projetList = this.props.projects.map(project => {
            return(
                <Project key={project.name} data={project}/>
            );
        });

        return(
            <>
                <section className="section">
                    <div className="container">
                        <div className="section__header">
                            <h1>All your projects</h1>
                        </div>
                        <div className="row">
                            {projetList}
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default ProjectList;