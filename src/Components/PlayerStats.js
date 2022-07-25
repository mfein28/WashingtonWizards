import * as React from 'react';
import boxScores from "../Data/boxscores.json"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


function calculateAverage(array) {
    let total = 0;
    let count = 0;

    array.forEach(function(item, index) {
        total += item;
        count++;
    });

    return (total / count).toFixed(2);
}
//Simple summary table showing career stats vs. 19-20 stats
export default function PlayerStats(props) {

    let player = props.selection

    // Get Selected player and put all stats into flat array
    let playerBoxScores = boxScores.filter(x => x.personId === player)
    let pointsArray = []
    let fieldGoalsArray = []
    playerBoxScores.forEach(game => {
        pointsArray.push(game.points)
        fieldGoalsArray.push(game.fieldGoalsAttempted)
    })

    let pointsPerGame = calculateAverage(pointsArray)
    let fgaPerGame = calculateAverage(fieldGoalsArray)
    let gamesPlayed = (playerBoxScores.length)

    return (
        <TableContainer>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell align="right"><i>19-20</i></TableCell>
                        <TableCell align="right"><i>Career</i></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                Points
                            </TableCell>
                            <TableCell align="right"><b>{pointsPerGame}</b></TableCell>
                            <TableCell align="right"><b>25.23</b></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                FGA
                            </TableCell>
                            <TableCell align="right"><b>{fgaPerGame}</b></TableCell>
                            <TableCell align="right"><b>18.54</b></TableCell>
                        </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            Games Played
                        </TableCell>
                        <TableCell align="right"><b>{gamesPlayed}</b></TableCell>
                        <TableCell align="right"><b>250</b></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}