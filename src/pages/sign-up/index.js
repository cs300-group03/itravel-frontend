import { makeStyles, createStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import { FormControl, Grid, TextField, InputLabel, InputAdornment, OutlinedInput, IconButton, MenuItem, Divider, Button, Backdrop, FormHelperText } from "@mui/material";
import LeftBackground from '../../assets/signup1.svg';
import RightBackground from '../../assets/signup2.svg';
import { useEffect, useState } from "react";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { UserRole } from "../../constant";
import Logo from '../../assets/logo.png';
import { signUp } from '../../services';
import CountdownAlert from '../../components/count-down-alert';
import ErrorAlert from '../../components/error-alert';
import { useDispatch } from "react-redux";
import { setUserEmail } from "../../store/auth";

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

const userRoles = [
    {
        value: UserRole.TRAVELLER,
        label: 'Traveller',
    },
    {
        value: UserRole.PROVIDER,
        label: 'Service provider',
    },
];

export const SignUpPage = () => {
    const [trash, setTrash] = useState(null);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [userRole, setUserRole] = useState(UserRole.TRAVELLER);
    const [showPassword, setShowPassword] = useState(false);
    const [signupRequest, setSignupRequest] = useState(false);
    const [signupError, setSignupError] = useState('');
    const [successSignup, setSuccessSignup] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setUserEmail(''));
    }, [trash]);

    useEffect(() => {
        async function signupFunc() {
            const response = await signUp(email.trim(), name.trim(), userRole, password);
            if (response.message) {
                setSignupError(response.message);
            } else {
                dispatch(setUserEmail(email));
                setSignupError('');
                setSuccessSignup(true);
            }
        }
        if (email) {
            signupFunc();
        }
    }, [signupRequest]);

    const classes = useStyles();
    const navigate = useNavigate();

    const sendSignupRequest = () => {
        if (email.trim() && name.trim() && password)
            setSignupRequest(!signupRequest);
        else {
            setSignupError('Please fill all information.');
        }
    };

    const handleChange = (type) => {
        return (event) => {
            const value = event.target.value;
            if (type === 'email') setEmail(value);
            if (type === 'name') setName(value);
            if (type === 'password') setPassword(value);
            if (type === 'role') setUserRole(value);
        };
    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }

    const login = () => {
        navigate('/login');
    }

    const verify = () => {
        navigate('/verify');
    }

    return (
        <Grid container className={classes.root}>
            {
                successSignup ? 
                    <CountdownAlert 
                    message={"Signup success. Check email to verify."}
                    navigate={navigate}
                    redirectPath={"/verify"}/>
                    : null
            }
            <ErrorAlert errorMessage={signupError} setErrorMessage={setSignupError}/>
            <Grid item xs={4}>
                <img className={classes.background} src={LeftBackground} alt="signup background 1"/>
            </Grid>
            <Grid item xs={4} className={classes.signUpContainer} container direction="column">
                <div className={classes.logoHeader}>
                    <img className={classes.logo} src={Logo} alt='Logo'/>
                    <h3 className={classes.logoText}>iTravel</h3>
                </div>
                <h3 className={classes.title}>Create an account to start iTravelling!</h3>
                <TextField
                    sx={style.infoContainer}
                    required 
                    label="Email" 
                    variant="outlined" 
                    color="secondary"
                    onChange={handleChange('email')}/>
                <TextField
                    sx={style.infoContainer}
                    required 
                    label="Name" 
                    variant="outlined" 
                    color="secondary"
                    onChange={handleChange('name')}/>
                <FormControl
                    sx={style.infoContainer}
                    variant="outlined">
                    <InputLabel required htmlFor="outlined-adornment-password" color="secondary">
                        Password
                    </InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        color="secondary"
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment 
                                position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                    <FormHelperText>Password must be longer than 6 characters</FormHelperText>
                </FormControl>
                <TextField
                    sx={style.infoContainer}
                    select
                    required
                    label="Account type"
                    color="secondary"
                    value={userRole}
                    onChange={handleChange('role')}>
                    {userRoles.map((role) => (
                        <MenuItem key={role.value} value={role.value}>
                            {role.label}
                        </MenuItem>
                    ))}
                </TextField>
                
                <Button
                    variant="contained"
                    sx={style.authButton}
                    color="secondary"
                    onClick={sendSignupRequest}>
                    Create account
                </Button>

                <Divider sx={{margin: 10}}/>

                <h5 className={classes.guidedText}>Already registered and want to verify?</h5>
                <Button
                    sx={style.unrelatedAuthButton}
                    variant="outlined"
                    color="secondary"
                    onClick={verify}>
                    Verify account
                </Button>

                <h5 className={classes.guidedText}>Already have an account?</h5>
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
    },
};