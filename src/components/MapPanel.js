import React from 'react'
import {state} from "../data/MockData";
import Field from "./Field";


class MapPanel extends React.Component {
    constructor() {
        super();
        this.state = {
            upperRight: {x: 10, y: 10},
            jungleLowerLeft: {x: 2, y: 2},
            jungleUpperRight: {x: 7, y: 7},
        }
    }

    isJungle(position){
        return position.x > this.state.jungleLowerLeft.x &&
            position.y > this.state.jungleLowerLeft.y &&
            position.x < this.state.jungleUpperRight.x &&
            position.y < this.state.jungleUpperRight.y
    }

    render() {
        const htmlList = state.fields.map(field => <Field field={field} isJungle={this.isJungle(field.vector2D)} key={JSON.stringify(field.vector2D)}/>)
        return(
            <div className="container row-cols-12">
                <div className="grid-map">
                    {htmlList}
                </div>
            </div>
        )
    }

}

export default MapPanel;