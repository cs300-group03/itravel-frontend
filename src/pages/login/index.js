import * as React from 'react'
import {
  Box,
  InputLabel,
  IconButton,
  OutlinedInput,
  InputAdornment,
  Button,
  FormControl,
  TextField,
  Link,
} from '@mui/material'
import Input from '@mui/material/Input'
import FilledInput from '@mui/material/FilledInput'
import FormHelperText from '@mui/material/FormHelperText'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import Travel from '../../assets/travel.png'
import style from './style'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ErrorAlert from '../../components/error-alert';
import { logIn } from '../../services';
import { setAuthorized, setUser, setUserEmail } from '../../store/auth';
import Logo from '../../assets/logo.png';
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return createStyles({
    logoHeader: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'center',
      marginBottom: 40,
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
  });
});

const LoginPage = () => {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    email: '',
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const defaultEmail = useSelector((state) => state.auth.user.email);
  const [trash, setTrash] = React.useState(null);
  const [loginError, setLoginError] = React.useState('');
  const [loginRequest, setLoginRequest] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    setValues({...values, email: defaultEmail });
    dispatch(setUserEmail(''));
  }, [trash]);

  React.useEffect(() => {
    async function loginFunc() {
      const response = await logIn(values.email, values.password);
      if (response.message) {
        setLoginError(response.message);
      } else {
        dispatch(setUser(response));
        dispatch(setAuthorized(true));
      }
    }
    if (values.email && values.password) {
      loginFunc();
    }
  }, [loginRequest]);

  const requestLogin = () => {
    if (!values.email) {
      setLoginError('Please enter email.');
    } else if (!values.password) {
      setLoginError('Please enter password.');
    } else {
      setLoginRequest(!loginRequest);
    }
  }

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    })
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  const signUp = () => {
    navigate('/signup');
  }

  const verifyAnother = () => {
    navigate('/verify');
  }

  return (
    <Box sx={style.container}>
      <ErrorAlert errorMessage={loginError} setErrorMessage={setLoginError}/>
      <Box sx={style.imageContainer}>
        <Box
          component="img"
          src={Travel}
          sx={{
            width: '75%',
          }}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          alignItems: 'flex-start',
        }}
      >
        <Box sx={style.loginContainer}>
          <div className={classes.logoHeader}>
              <img className={classes.logo} src={Logo} alt='Logo'/>
              <h3 className={classes.logoText}>iTravel</h3>
          </div>
          <TextField
            sx={style.inputContainer}
            label="Email"
            variant="outlined"
            color="secondary"
            onChange={handleChange('email')}
          />
          <FormControl sx={style.inputContainer} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password" color="secondary">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              color="secondary"
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={style.button}
            onClick={requestLogin}
          >
            Login
          </Button>
          <Link
            component="button"
            underline="hover"
            color="secondary"
            sx={{
              fontFamily: 'Poppins',
              fontSize: 14,
            }}
          >
            Forgotten Password?
          </Link>
          <Box
            sx={{
              height: 2,
              width: '90%',
              backgroundColor: 'gray',
              mt: 10,
              mb: 2,
            }}
          />
          <Button
            variant="outlined"
            color="primary"
            size="large"
            sx={style.button}
            onClick={signUp}
          >
            Create a New Account
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            size="large"
            sx={style.button}
            onClick={verifyAnother}
          >
            Verify an exising account
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default LoginPage
