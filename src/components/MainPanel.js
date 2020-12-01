import React from 'react';
import MapPanel from "./MapPanel";
import SettingsPanel from "./SettingsPanel";

class MainPanel extends React.Component {
    socket = new WebSocket("ws://127.0.0.1:8081")
    constructor() {
        super();
        this.state = {
            simulationIsOn: false
        }
        this.startSimulation = this.startSimulation.bind(this)
    }

    startSimulation(){
        this.setState({
            simulationIsOn: true
        })
    }

    render() {
        return (
            <div>
                {!this.state.simulationIsOn && <SettingsPanel socket={this.socket} startSim={this.startSimulation}/>}
                {this.state.simulationIsOn && <MapPanel socket={this.socket}/> }
            </div>
        )
    }
}

export default MainPanel;