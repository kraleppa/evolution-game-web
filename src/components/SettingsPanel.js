import React from 'react';

class SettingsPanel extends React.Component{
    constructor() {
        super();
        this.state = {
            upperRight: {x: 20, y: 20},
            jungleLowerLeft: {x: 4, y: 4},
            jungleUpperRight: {x: 15, y: 15},
            days: 1000,
            animalsNumber: 30,
            movementCost: 2,
            maxEnergy: 120,
            plantEnergy: 40,
            time: 50
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(){
        this.props.socket.send(JSON.stringify(this.state));
        this.props.startSim();
    }

    handleChange(event){
        const {name, value} = event.target;
        const val = value === "" ? 0 : parseInt(value)



        if (name === "mapSize"){
            this.setState({
                upperRight: {x: val, y: val},
                jungleLowerLeft: {x: Math.round(val/4) - 1, y: Math.round(val/4) - 1},
                jungleUpperRight: {x: Math.round(3*val/4), y: Math.round(3*val/4)}
            })
        } else {
            this.setState({[name]: val})
        }
        console.log(this.state)

    }

    render() {
        return(
            <div className="container mt-5">
                <form onSubmit={this.handleSubmit}>
                    <div className="row-cols-1 text-center ">
                        <h2>Simulation settings</h2>
                    </div>
                    <div className="row mt-4">
                        <div className="col-3">
                            <label htmlFor="mapSizeInput">Size of square map</label>
                            <input type="text" className="form-control" id="mapSizeInput"
                                   name={"mapSize"} value={this.state.upperRight.x} onChange={this.handleChange} required/>
                        </div>

                        <div className="col-3">
                            <label htmlFor="daysInput">Number of days</label>
                            <input type="text" className="form-control" id="daysInput"
                                   name={"days"} value={this.state.days} onChange={this.handleChange} required/>
                        </div>

                        <div className="col-3">
                            <label htmlFor="animalsNumberInput">Day 0 animals number</label>
                            <input type="text" className="form-control" id="animalsNumberInput"
                                   name={"animalsNumber"} value={this.state.animalsNumber} onChange={this.handleChange} required/>
                        </div>

                        <div className="col-3">
                            <label htmlFor="timeInput">Refresh time (ms)</label>
                            <input type="text" className="form-control" id="timeInput"
                                   name={"time"} value={this.state.time} onChange={this.handleChange} required/>
                        </div>


                    </div>
                    <div className="row mt-4">
                        <div className="offset-2 col-3">
                            <label htmlFor="maxEnergyInput">Maximal energy of animal</label>
                            <input type="text" className="form-control" id="maxEnergyInput"
                                   name={"maxEnergy"} value={this.state.maxEnergy} onChange={this.handleChange} required/>
                        </div>

                        <div className="col-3">
                            <label htmlFor="plantEnergyInput">Plant energy</label>
                            <input type="text" className="form-control" id="plantEnergyInput"
                                   name={"plantEnergy"} value={this.state.plantEnergy} onChange={this.handleChange} required/>
                        </div>

                        <div className="col-3">
                            <label htmlFor="movementCostInput">Cost of move</label>
                            <input type="text" className="form-control" id="timeInput"
                                   name={"movementCost"} value={this.state.movementCost} onChange={this.handleChange} required/>
                        </div>

                    </div>

                    <div className="row-cols-1 text-center mt-5">
                        <button className="btn btn-dark" type="submit">Start simulation</button>
                    </div>
                </form>
            </div>

        )
    }
}

export default SettingsPanel;