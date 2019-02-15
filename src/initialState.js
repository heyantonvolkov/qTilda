class AppState{
    constructor() {
        // eslint-disable-next-line
        const state = {
            projects: [
                {
                    name: 'Test project',
                    type: 'landing',
                    desc: 'This is the default project to see how constructor works',
                    author: 'qTilda'
                },
                {
                    name: 'Another test project',
                    type: 'landing',
                    desc: 'This is the default project to see how constructor works',
                    author: 'qTilda'
                }
            ],
            user: {
                name: 'Unknown Author',
                avatar: 'https://69.media.tumblr.com/7d1ce5790b9e0595cefbdf225ac468ad/tumblr_pm4cembSHw1qz9v0to1_1280.png'
            }
        };
    }

    get appState() {
        return this.state;
    }

    get projectList() {
        return this.state.projects;
    }
}

export default AppState;