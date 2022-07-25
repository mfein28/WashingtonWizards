import React, { PureComponent } from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Bar} from 'recharts';
import boxScores from "../Data/boxscores.json";

//Takes player selection as a props and renders a few simple visuals showing plus/minus to fg/points comparisons
export default function PlayerVisuals(props) {
    let player = props.selection
    let title = props.chartTile
    let yAxis = props.yAxis
    let yAxisTitle = props.yAxisTitle
    let playerBoxScores = boxScores.filter(x => x.personId === player)
    console.log(playerBoxScores)

    return (
            <div>
                <h3 align="center"> {title}</h3>
            <ResponsiveContainer width="100%" height="100%" aspect={3}>

                <LineChart
                    width={500}
                    height={400}
                    data={playerBoxScores}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="gameDate" dy={10}/>
                    <YAxis label={{ value: yAxisTitle, angle: -90, position: 'insideLeft' }}/>
                    <Tooltip />
                    <Legend layout="vertical" verticalAlign="top" align="right" wrapperStyle={{paddingLeft: "10px"}}/>
                    <Line type="natural" strokeWidth={1} dataKey={yAxis} name={yAxisTitle} stroke="#002B5C" activeDot={{ r: 8 }} />
                    <Line type="natural" strokeWidth={3} dataKey="plusMinus" name={"Plus/Minus"} stroke="#E31837" />
                    {/*<Line type="monotone" dataKey="plusMinus" stroke="#82ca9d" />*/}
                </LineChart>
            </ResponsiveContainer>
            </div>
        );
    }

