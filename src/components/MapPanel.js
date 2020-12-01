import React from 'react'
import Field from "./Field";
import SettingsPanel from "./SettingsPanel";


class MapPanel extends React.Component {
    constructor() {
        super();
        this.state = {
            fieldsList: [],
            day: 0,
            animals: 0,
            totalBorn: 0,
            totalDeaths: 0,
            totalAnimals: 0,
        }
    }

    componentDidMount() {
        this.props.socket.onmessage = (event) => {
            const json = JSON.parse(event.data);
            this.setState( {
                fieldsList: json.fields,
                day: json.day,
                animals: json.animals,
                totalBorn: json.totalBorn,
                totalDeaths: json.totalDeaths,
                totalAnimals: json.totalAnimals
            })
        }

        console.log(this.state.fieldsList)
    }


    render() {
        const htmlList = this.state.fieldsList.map(field => <Field field={field} key={JSON.stringify(field.vector2D)}/>)
        return(
            <div className="container mt-5">
                <div className="row-cols-1 text-center">
                    <h1>Day: {this.state.day}</h1>

                </div>
                <div className="row mt-4">
                    <div className="offset-2 col-8">
                        <table className="table text-center">
                            <thead>
                            <tr>
                                <th scope="col">Current animals</th>
                                <th scope="col">Total births</th>
                                <th scope="col">Total deaths</th>
                                <th scope="col">Total animals</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{this.state.animals}</td>
                                <td>{this.state.totalBorn}</td>
                                <td>{this.state.totalDeaths}</td>
                                <td>{this.state.totalAnimals}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>


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