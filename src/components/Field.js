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
                {this.props.field.animals.length === 0 && <img src={empty} alt={"Animal photo"}/> }
                {this.props.field.animals.length !== 0 && <img src={animalPhoto} alt={"Animal photo"}/> }
            </div>
        )
    }
}

export default Field;