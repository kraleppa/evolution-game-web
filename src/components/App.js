import React from 'react'
import MapPanel from "./MapPanel";

class App extends React.Component{
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row-cols-12 text-center">Hello world!</div>
                </div>
                <MapPanel/>
            </div>
        );
    }
}

export default App;