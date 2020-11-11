import React from 'react';

class SettingsPanel extends React.Component{
    constructor() {
        super();
        this.state = {
            upperRight: {x: 40, y: 40},
            jungleLowerLeft: {x: 14, y: 14},
            jungleUpperRight: {x: 26, y: 26},
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
                <button onClick={this.handleClick}>Start</button>
            </div>
        )
    }
}

export default SettingsPanel;