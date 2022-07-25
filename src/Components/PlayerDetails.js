import * as React from 'react';
import playerData from "../Data/players.json"
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Avatar, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import List from "@mui/material/List";
import CakeIcon from '@mui/icons-material/Cake';
import HeightIcon from '@mui/icons-material/Height';
import ScaleIcon from '@mui/icons-material/Scale';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

const useStyles = makeStyles({
    root: {

        margin: "auto"
    },
    root2: {
        backgroundColor: "green",
        margin: "auto"
    }
});

//Keeping both sides of player info in the same component by using a prop to identify which side to render
export default function PlayerDetails(props) {
    const classes = useStyles();
    let player = props.selection
    let side = props.side

    let playerSelection = playerData.filter(x => x.personId === player)[0]
    if (side === 1){
        return (
            <List sx={{width: '100%'}}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar sx={{ bgcolor: "#E31837" }}>
                            <CakeIcon/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Born" secondary={playerSelection.birthDate}/>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar sx={{ bgcolor: "#E31837" }}>
                            <HeightIcon/>
                        </Avatar>

                    </ListItemAvatar>
                    <ListItemText primary="Height" secondary={playerSelection.height}/>
                </ListItem>
            </List>
        )
    }
    else{
        return (
            <List sx={{width: '100%'}}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar sx={{ bgcolor: "#E31837" }}>
                            <ScaleIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Weight" secondary={String(playerSelection.weight).concat(" ", "lbs")}/>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar sx={{ bgcolor: "#E31837" }}>
                            <EventAvailableIcon/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Active" secondary={String(playerSelection.yearsProService).concat(" ", "years")}/>
                </ListItem>
            </List>
        )
    }
}