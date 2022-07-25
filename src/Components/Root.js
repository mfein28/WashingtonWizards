import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import FilterSelect from "./FilterSelect";
import PlayerName from "./PlayerName";
import PlayerDetails from "./PlayerDetails";
import makeStyles from "@material-ui/core/styles/makeStyles";
import PlayerStats from "./PlayerStats";
import PlayerVisuals from "./PlayerVisuals";
import {useTheme} from "@mui/material/styles";



const useStyles = makeStyles({
    root: {

        // margin: "auto"
    },
    grid_item:{
        padding: 3,
        display: 'flex',
        flexDirection: 'column',
        height: "100%",
        // width: 450,
        justifyContent: "center"
    }

});

//The primary app file. All components(besides navigation) are called here
export default function Root() {
    const [selection, setSelection] = React.useState(5696);
    const classes = useStyles();

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container
                  direction="row"
                  spacing={4}
                  alignItems={"stretch"}
                  height={"100%"}

            >
                <Grid item xs={12} md={8} lg={8}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                        elevation={3}
                    >
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-evenly"
                            alignItems={'center'}

                        >
                            <Grid item lg={6}   align={'center'}>
                                <PlayerName selection = {selection}/>
                                <FilterSelect
                                    selection = {selection}
                                    setSelection = {setSelection}>
                                </FilterSelect>
                            </Grid>
                            <Grid item lg={3} alignSelf={'center'} >
                                <PlayerDetails selection = {selection} side = {1}/>
                            </Grid>
                            <Grid item lg={3} alignSelf={'center'}>
                                <PlayerDetails selection = {selection} side = {2}/>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item classes={classes.grid_item} xs={12} md={4} lg={4}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: "100%",

                        }}
                        elevation={3}
                    >
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-evenly"

                        >
                            <Grid item xs>
                                <PlayerStats selection = {selection} side = {1}/>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container
                  direction="row"
                  spacing={4}
                  alignItems={"stretch"}
                  height={"100%"}
                  sx={{ mt: 3, mb: 4 }}

            >
                <Grid item xs>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                        elevation={3}
                    >
                        <PlayerVisuals selection = {selection} yAxisTitle={"Points"} chartTile={"Points vs. Plus/Minus"} yAxis={"points"} />
                    </Paper>

                </Grid>
            </Grid>
            <Grid container
                  direction="row"
                  spacing={4}
                  alignItems={"stretch"}
                  height={"100%"}
                  sx={{ mt: 3, mb: 4 }}

            >
                <Grid item xs>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            // height: "100%",
                            // width: 450,

                        }}
                        elevation={3}
                    >
                        <PlayerVisuals selection = {selection} chartTile={"FGA vs. Plus/Minus"} yAxisTitle={"FGA"} yAxis={"fieldGoalsAttempted"}/>
                    </Paper>

                </Grid>
            </Grid>
        </Container>
    );
}

