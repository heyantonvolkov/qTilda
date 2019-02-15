import React, {Component} from 'react';

class WebPageEdit extends Component {
    render() {
        return(
            <>
                <section className="section">
                    <div className="container">
                        <div className="section__header">
                            <h1>{this.props.projectName}</h1>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default WebPageEdit;