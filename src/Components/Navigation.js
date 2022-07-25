import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import logo from '../Data/wiz-primary.png'
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import Root from "./Root";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Grid} from "@mui/material";

function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};
const useStyles = makeStyles({
    logo: {
        margin: 'auto',
        textAlign: 'center',
        maxWidth: '50%',
        maxHeight: '70%',
    },
    logoHorizontallyCenter: {
        position: 'absolute',
        left: '50%',
        top: '50%',

    },
    title: {
        margin: "auto"
    }

});
export default function Navigation(props) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar sx={{backgroundColor : "#002B5C", justifyContent: "center", alignItems: "center", display: 'flex'}}>

                    <Toolbar sx={{justifyContent: "center", alignItems: "center", display: 'flex'}}>
                        <Grid
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <img height={'60'} width={'60'} src={logo}/>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar />
            <Container>

                <Root/>
            </Container>
        </React.Fragment>
    );
}