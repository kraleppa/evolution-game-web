import React from 'react'
import Field from "./Field";


class MapPanel extends React.Component {
    socket = null;
    jungleLowerLeft = {x: 2, y: 2};
    jungleUpperRight = {x: 7, y: 7};

    constructor() {
        super();
        this.state = {
            fieldsList: [],
            day: 0
        }
    }

    componentDidMount() {
        this.socket = new WebSocket("ws://127.0.0.1:8081")
        this.socket.onmessage = (event) => {
            const json = JSON.parse(event.data);
            // console.log(json)
            this.setState( {
                fieldsList: json.fields,
                day: json.day
            })
        }
        // console.log(this.state)
    }

    isJungle(position){
        return position.x > this.jungleLowerLeft.x &&
            position.y > this.jungleLowerLeft.y &&
            position.x < this.jungleUpperRight.x &&
            position.y < this.jungleUpperRight.y
    }

    render() {
        console.log(this.state.fieldsList)
        const htmlList = this.state.fieldsList.map(field => <Field field={field} isJungle={this.isJungle(field.vector2D)} key={JSON.stringify(field.vector2D)}/>)
        console.log(htmlList)
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