import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return(
            <div className='navbar bg-light navbar-expand-lg navbar-light'>
                <div className="container">
                    <Link to='/' className='navbar-brand'>qTilda</Link>
                    <div className='collapse navbar-collapse'>
                        <ul className='navbar-nav mr-auto'>
                            <li className='nav-item'>
                                <Link to="/addSite" className='nav-link'>Add Site</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/settings" className='nav-link'>Settings</Link>
                            </li>
                        </ul>
                        <div className="user">
                            <div className='user__name'>{this.props.user.name}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}