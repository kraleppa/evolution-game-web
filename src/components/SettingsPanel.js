import React from 'react';

class SettingsPanel extends React.Component{
    constructor() {
        super();
        this.state = {
            upperRight: {x: 40, y: 40},
            jungleLowerLeft: {x: 16, y: 16},
            jungleUpperRight: {x: 24, y: 24},
            days: 100,
            animalsNumber: 1000
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