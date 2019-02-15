import React, {Component} from 'react';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import Navbar from './components/Navbar/Navbar.jsx';
import { Route } from 'react-router-dom';
import AddSite from './components/AddSite/AddSite.jsx';
import Settings from './components/Settings/Settings.jsx';
import ProjectList from './components/ProjectList/ProjectList.jsx';
// import WebPageEdit from './components/WebPage/WebPageEdit/WebPageEdit.jsx';

class App extends Component {
    constructor() {
        super();
        this.state = {
            projects: [
                {
                    name: 'Test project',
                    link: 'tet_project',
                    type: 'landing',
                    desc: 'This is the default project to see how constructor works',
                    author: 'qTilda'
                },
                {
                    name: 'Another test project',
                    link: 'another_test',
                    type: 'landing',
                    desc: 'This is the default project to see how constructor works',
                    author: 'qTilda'
                }
            ],
            user: {
                name: 'Anton the warior',
                avatar: 'https://69.media.tumblr.com/7d1ce5790b9e0595cefbdf225ac468ad/tumblr_pm4cembSHw1qz9v0to1_1280.png'
            }
        };
    }

    render() {
        return (
            <>
                <Navbar user={this.state.user}/>
                <Route exact path='/'
                    render={(props) => <ProjectList {...props} projects={this.state.projects}/>}
                />
                <Route path='/addSite' component={AddSite}/>
                <Route path='/settings' component={Settings}/>
                {/*<Route path='/editPage/:pageName'>*/}
                    {/*<WebPageEdit projectName={'Имя страницы'}/>*/}
                {/*</Route>*/}
            </>
        );
    }
}

export default App;
