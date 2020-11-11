import React from 'react'
import Field from "./Field";
import SettingsPanel from "./SettingsPanel";


class MapPanel extends React.Component {
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


    render() {
        const htmlList = this.state.fieldsList.map(field => <Field field={field} key={JSON.stringify(field.vector2D)}/>)
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