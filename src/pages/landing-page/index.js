import { createStyles, makeStyles } from "@mui/styles";
import { Grid, Button } from "@mui/material";
import LandingImage from '../../assets/landing.png';
import LandingBackground from '../../assets/landingbg.svg';
import Logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => {
    return createStyles({
        root: {
            maxHeight: '100vh',
            backgroundColor: `${theme.palette.primary.main}0f`
        },
        landingImage: {
            zIndex: 2,
            position: 'absolute',
            top: '10.5%',
            right: '7%',
            maxWidth: '60%',
            maxHeight: '60%'
        },
        landingBackground: {
            zIndex: 1,
            position: 'absolute',
            top: '-15%',
            right: '-10%',
            maxWidth: '150%',
            maxHeight: '150%'
        },
        leftSide: {
            height: '100vh',
            paddingLeft: 100,
            position: 'relative',
        },
        logoHeader: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifySelf: 'start',
            position: 'absolute',
            top: '7vh',
        },
        logo: {
            width: 50,
            height: 50,
        },
        logoText: {
            fontSize: 25,
            margin: 0,
            padding: 0
        },
        leftText: {
            position: 'absolute',
            top: '30vh',
        },
        title: {
            fontWeight: 700,
            fontSize: 50,
        },
        description: {
            fontWeight: 400,
            fontSize: 20,
        },
        rightSide: {
            alignItems: 'right'
        },
        footer: {
            minHeight: 100,
            backgroundColor: '#000000',
        }
    });
});

export const LandingPage = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    const login = () => {
        navigate('/login');
    }
    const signup = () => {
        navigate('/signup');
    }

    return (
        <Grid container className={classes.root}>
            <Grid item xs={6} className={classes.leftSide}>
                <div className={classes.logoHeader}>
                    <img className={classes.logo} src={Logo} alt='Logo'/>
                    <h3 className={classes.logoText}>iTravel</h3>
                    <Button variant="contained" sx={style.authButton} onClick={login}>
                        Log in
                    </Button>
                    <Button variant="outlined" sx={style.authButton} onClick={signup}>
                        Sign up
                    </Button>
                </div>
                <div className={classes.leftText}>
                    <h1 className={classes.title}>
                        The easiest <br/> way to plan <br/> your trip
                    </h1>
                    <h4 className={classes.description}>
                        Build, organize and map your intineraries in <br/>a travel website designed for vacations and road trips.
                    </h4>
                    <Button variant="contained" color="secondary" sx={style.startNowButton} onClick={signup}>
                        Start now &gt;&gt;
                    </Button>
                </div>
            </Grid>
            <Grid item xs={6} className={classes.rightSide}>
                <img className={classes.landingImage} src={LandingImage} alt='Landing'/>
                <img className={classes.landingBackground} src={LandingBackground} alt='Landing background'/>
            </Grid>
        </Grid>
    );
}

const style = {
    authButton: {
        fontFamily: 'Poppins',
        marginLeft: 5,
    },
    startNowButton: {
        fontFamily: 'Poppins',
        fontSize: 15,
        marginTop: 5,
        paddingTop: 2,
        paddingBottom: 2,
        paddingStart: 10,
        paddingEnd: 10,
    },
};