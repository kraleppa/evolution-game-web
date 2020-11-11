import React from 'react'
import Field from "./Field";
import SettingsPanel from "./SettingsPanel";


class MapPanel extends React.Component {
    jungleLowerLeft = {x: 14, y: 14}
    jungleUpperRight = {x: 26, y: 26}

    constructor() {
        super();
        this.state = {
            fieldsList: [],
            day: 0
        }
    }

    componentDidMount() {
        this.props.socket.onmessage = (event) => {
            const json = JSON.parse(event.data);
            this.setState( {
                fieldsList: json.fields,
                day: json.day
            })
        }
    }

    isJungle(position){
        return position.x > this.jungleLowerLeft.x &&
            position.y > this.jungleLowerLeft.y &&
            position.x < this.jungleUpperRight.x &&
            position.y < this.jungleUpperRight.y
    }

    render() {
        const htmlList = this.state.fieldsList.map(field => <Field field={field} isJungle={this.isJungle(field.vector2D)} key={JSON.stringify(field.vector2D)}/>)
        return(
            <div className="container">
                <div className="row-cols-1 text-center">
                    Day: {this.state.day}
                </div>
                <div className="row-cols-1 ">
                    <div className="grid-map">
                        {htmlList}
                    </div>
                </div>

            </div>
        )
    }

}

export default MapPanel;