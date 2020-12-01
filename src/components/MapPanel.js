import React from 'react'
import Field from "./Field";
import SettingsPanel from "./SettingsPanel";


class MapPanel extends React.Component {
    constructor() {
        super();
        this.state = {
            fieldsList: [],
            day: 0,
            animals: 0
        }
    }

    componentDidMount() {
        this.props.socket.onmessage = (event) => {
            const json = JSON.parse(event.data);
            this.setState( {
                fieldsList: json.fields,
                day: json.day,
                animals: json.animals
            })
        }

        console.log(this.state.fieldsList)
    }


    render() {
        const htmlList = this.state.fieldsList.map(field => <Field field={field} key={JSON.stringify(field.vector2D)}/>)
        return(
            <div className="container mt-5">
                <div className="row">
                    Day: {this.state.day}
                    <br/>
                    Animals: {this.state.animals}
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="grid-map">
                        {htmlList}
                    </div>
                </div>

            </div>
        )
    }

}

export default MapPanel;