import * as React from 'react';
import Box from '@mui/material/Box';
import {Card, Container, Grid, Paper} from "@mui/material";
import PlayerInfo from "./PlayerName";

const drawerWidth = 240;

export default function HomeContent() {
    return (
            <Grid container spacing={3}>
                <Grid item xs={12} md={4} lg={3}>
                    <Card>
                        Lorem Ipsum
                    </Card>
                </Grid>
            </Grid>

    );
}