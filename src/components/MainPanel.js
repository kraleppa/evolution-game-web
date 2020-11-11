import React from 'react';
import MapPanel from "./MapPanel";
import SettingsPanel from "./SettingsPanel";

class MainPanel extends React.Component {
    socket = new WebSocket("ws://127.0.0.1:8081")


    render() {
        return (
            <div>
                <SettingsPanel socket={this.socket}/>
                <MapPanel socket={this.socket}/>
            </div>
        )
    }
}

export default MainPanel;