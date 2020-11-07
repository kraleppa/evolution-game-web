import React from 'react'

class Field extends React.Component {
    render() {
        return(
            <div className="field" style={{
                gridColumn: this.props.field.vector2D.x + 1,
                gridRow: this.props.field.vector2D.y + 1,
                background: this.props.isJungle ? 'green' : 'gray'
            }} >
                <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Square_-_black_simple.svg/1200px-Square_-_black_simple.svg.png'}/>
            </div>
        )
    }
}

export default Field;