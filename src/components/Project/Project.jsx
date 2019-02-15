import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Project extends Component {
    render() {
        return(
            <div className='col-md-4'>
                <div className='card'>
                    <div className="card-header">
                        <div className="card-title">{this.props.data.name}</div>
                        <div className="card-subtitle">{this.props.data.type}</div>
                    </div>
                    <div className="card-body">
                        <p>{this.props.data.desc}</p>
                        <Link to={this.props.data.link} className='card-link'>К проекту</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Project;