import React from 'react'
import {animalPhoto, empty} from "../data/Static";

class Field extends React.Component {
    render() {
        return(
            <div className="field" style={{
                gridColumn: this.props.field.vector2D.x + 1,
                gridRow: this.props.field.vector2D.y + 1,
                background: this.props.field.isGrassed ? '#145A32' : this.props.isJungle ? '#1E8449' : '#F9E79F'
            }} >
                {this.props.field.animals.length === 0 && <img src={empty} alt={JSON.stringify(this.props.field.vector2D) + "0"}/> }
                {this.props.field.animals.length === 1 && <img src={animalPhoto} alt={JSON.stringify(this.props.field.vector2D) + "1"} style={{opacity: 0.5}}/> }
                {this.props.field.animals.length === 2 && <img src={animalPhoto} alt={JSON.stringify(this.props.field.vector2D) + "2"} style={{opacity: 0.6}}/> }
                {this.props.field.animals.length === 3 && <img src={animalPhoto} alt={JSON.stringify(this.props.field.vector2D) + "3"} style={{opacity: 0.7}}/> }
                {this.props.field.animals.length === 4 && <img src={animalPhoto} alt={JSON.stringify(this.props.field.vector2D) + "4"} style={{opacity: 0.8}}/> }
                {this.props.field.animals.length === 5 && <img src={animalPhoto} alt={JSON.stringify(this.props.field.vector2D) + "5"} style={{opacity: 0.9}}/> }
                {this.props.field.animals.length === 6 && <img src={animalPhoto} alt={JSON.stringify(this.props.field.vector2D) + "6"} style={{opacity: 0.99}}/> }


            </div>
        )
    }
}

export default Field;