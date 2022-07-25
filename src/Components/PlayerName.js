import * as React from 'react';
import playerData from "../Data/players.json"

//Renders player picture
export default function PlayerNamePlayerName(props) {
    let player = props.selection

    let playerSelection = playerData.filter(x => x.personId === player)[0]
    return (
        <div align={"center"}>
            <img width={"75%"} src={playerSelection.imageUrl}/>
        </div>
    );
}