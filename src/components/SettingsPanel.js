import React from 'react';

class SettingsPanel extends React.Component{
    constructor() {
        super();
        this.state = {
            upperRight: {x: 20, y: 20},
            jungleLowerLeft: {x: 5, y: 5},
            jungleUpperRight: {x: 15, y: 15},
            days: 1000,
            animalsNumber: 30
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event){
        this.props.socket.send(JSON.stringify(this.state))
    }

    render() {
        return(
            <div className="row-cols-1 text-center">
                <button className="btn btn-dark mt-5 mb-4" onClick={this.handleClick}>Start</button>
            </div>
        )
    }
}

export default SettingsPanel;