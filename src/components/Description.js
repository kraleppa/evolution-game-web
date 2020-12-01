import React from 'react';
import photo from '../data/mapScreen.png'

class Description extends React.Component {
    render() {
        return (
            <div className="container mt-5">
                <div className="row-cols-1">
                    <h1>What is evolution game?</h1>
                    <div className="mt-4" style={{textAlign: "justify"}}>
                        Evolution game is simple simulation of evolution. Imagine endless steppes
                        and dense jungles full of animals which fight with each other for food and space.
                        Only strongest will survive and pass their genes and you have one and only opportunity to observe this
                        beautiful and terrifying process.

                        <h3 className="mt-4">Map</h3>
                        <img className="ml-5" src={photo} alt="map" style={{float: "right", height: "50%", width: "50%"}}/>

                        Map is really simple it has two parts:
                        <ul>
                            <li>Jungle - green field in the center of map</li>
                            <li>Steppe - rest of the map</li>
                        </ul>


                        <h3 className="mt-4">Plants</h3>
                        Plants are marked as a dark green fields. Every day one plant is growing in the jungle and on the steppe.

                        <h3 className="mt-4">Animals</h3>
                        Animals are marked as a numbers on the fields. There can be many animals on one field.
                        The number on the field shows how many animals currently occupies this field. <br />
                        Animals lose their energy when they move and restore it when they eat plant.
                        When meet another animal on the same field and if they have enough energy they can procreate.

                        <h3 className="mt-4">Hierarchy</h3>
                        Animals have their hierarchy. When there are many animals on the field with grass only the strongest can eat a grass.
                        Similar situation is with procreation - only two strongest animals on the field can procreate


                    </div>
                </div>
            </div>
        )
    }
}

export default Description;