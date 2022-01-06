import { makeStyles, createStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import { FormControl, Grid, TextField, InputLabel, InputAdornment, OutlinedInput, IconButton, MenuItem, Divider, Button, Alert } from "@mui/material";
import LeftBackground from '../../assets/signup1.svg';
import RightBackground from '../../assets/signup2.svg';
import { useEffect, useState } from "react";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { UserRole } from "../../constant";
import Logo from '../../assets/logo.png';
import { useDispatch, useSelector } from "react-redux";
import { verify, resendOTP } from '../../services';
import ErrorAlert from '../../components/error-alert';
import CountdownAlert from '../../components/count-down-alert';
import SuccessAlert from '../../components/success-alert';
import { setUserEmail } from '../../store/auth';

const useStyles = makeStyles((theme) => {
    return createStyles({
        root: {
            minHeight: '100vh',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
        },
        signUpContainer: {
            zIndex: 5,
        },
        background: {
            maxWidth: '100%',
            height: 'auto',
        },
        logoHeader: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
            marginBottom: 20,
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
        title: {
            alignSelf: 'center',
        },
        guidedText: {
            alignSelf: 'center',
            marginTop: 10,
            marginBottom: 0,
            fontWeight: 300,
        },
    });
});

export const VerifyPage = () => {
    const defaultEmail = useSelector((state) => state.auth.user.email);
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [trash, setTrash] = useState(null);
    const [verifyRequest, setVerifyRequest] = useState(false);
    const [resendRequest, setResendRequest] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [resendSuccessMessage, setResendSuccessMessage] = useState('');
    const [verified, setVerified] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        setEmail(defaultEmail);
        dispatch(setUserEmail(''));
    }, [trash]);

    useEffect(() => {
        async function verifyOtpFunc() {
            if (otp) {
                const response = await verify(email, otp);
                if (response.verified) {
                    if (response.message) setSuccessMessage(response.message);
                    else setSuccessMessage('Verified successfully. Please login.');
                    setErrorMessage('');
                    dispatch(setUserEmail(email));
                    setVerified(true);
                } else {
                    setErrorMessage(response.message);
                }
            }
        };
        if (otp) {
            verifyOtpFunc();
        }
    }, [verifyRequest]);

    useEffect(() => {
        async function resendFunc() {
            const response = await resendOTP(email);
            if (response.message) {
                setErrorMessage(response.message);
            } else {
                setErrorMessage('');
                setResendSuccessMessage('OTP sent!');
            }
        }
        if (resendRequest) {
            resendFunc();
        }
    }, [resendRequest]);

    const verifyRequestFunc = () => {
        if (!email) {
            setErrorMessage('Email cannot be empty.');
        } else if (!otp) {
            setErrorMessage('Otp cannot be empty.');
        } else {
            setVerifyRequest(!verifyRequest);
        }
    }
    
    const resendRequestFunc = () => {
        if (!email) {
            setErrorMessage('Please enter email.');
        } else {
            setResendRequest(true);
        }
    }

    const classes = useStyles();
    const navigate = useNavigate();

    const handleChange = (type) => {
        return (event) => {
            const value = event.target.value;
            if (type === 'email') setEmail(value);
            if (type === 'otp') setOtp(value);
        }
    }

    const signup = () => {
        navigate('/signup');
    }

    const login = () => {
        navigate('/login');
    }

    const toLandingPage = () => {
        navigate('/landing');
    }

    return (
        <Grid container className={classes.root}>
            {
                verified ? 
                    <CountdownAlert
                    message={successMessage}
                    navigate={navigate}
                    redirectPath={"/login"}/>
                    : null
            }
            <SuccessAlert successMessage={resendSuccessMessage} setSuccessMessage={setResendSuccessMessage}/>
            <ErrorAlert errorMessage={errorMessage} setErrorMessage={setErrorMessage}/>
            <Grid item xs={4}>
                <img className={classes.background} src={LeftBackground} alt="signup background 1"/>
            </Grid>
            <Grid item xs={4} className={classes.signUpContainer} container direction="column">
                <div 
                    className={classes.logoHeader}
                    onClick={toLandingPage}>
                    <img className={classes.logo} src={Logo} alt='Logo'/>
                    <h3 className={classes.logoText}>iTravel</h3>
                </div>
                <h3 className={classes.title}>Verify account to start iTravelling!</h3>
                <TextField
                    sx={style.infoContainer}
                    required 
                    label="Email" 
                    value={email}
                    variant="outlined" 
                    color="secondary"
                    onChange={handleChange('email')}/>
                <TextField
                    sx={style.infoContainer}
                    required 
                    label="OTP" 
                    variant="outlined" 
                    color="secondary"
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    onChange={handleChange('otp')}/>
                <Button
                    variant="contained"
                    sx={style.authButton}
                    color="secondary"
                    onClick={verifyRequestFunc}>
                    Verify account
                </Button>
                <Button
                    variant="contained"
                    sx={style.authButton}
                    onClick={resendRequestFunc}>
                    Resend OTP
                </Button>
                <Divider sx={{margin: 10}}/>
                <h5 className={classes.guidedText}>Haven't registered?</h5>
                <Button
                    variant="outlined"
                    sx={style.unrelatedAuthButton}
                    color="secondary"
                    onClick={signup}>
                    Create new account
                </Button>
                <h5 className={classes.guidedText}>Already have a verified account?</h5>
                <Button
                    sx={style.unrelatedAuthButton}
                    variant="outlined"
                    onClick={login}>
                    Log in
                </Button>
            </Grid>
            <Grid item xs={4}>
                <img className={classes.background} src={RightBackground} alt="signup background 2"/>
            </Grid>
        </Grid>
    );
};

const style = {
    authButton: {
        paddingTop: 2,
        paddingBottom: 2,
        paddingStart: 10,
        paddingEnd: 10,
        marginTop: 2,
        fontFamily: 'Poppins',
    },
    unrelatedAuthButton: {
        paddingTop: 2,
        paddingBottom: 2,
        paddingStart: 10,
        paddingEnd: 10,
        marginTop: 0,
        fontFamily: 'Poppins',
    },
    infoContainer: {
        marginTop: 2,
        marginBottom: 2,
    }
};