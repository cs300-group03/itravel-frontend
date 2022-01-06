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

const LoginPage = () => {
  // const classes = useStyles()

  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  })

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

  return (
    <Box sx={style.container}>
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
          flexDirection: 'row',
          flex: 1,
          alignItems: 'flex-start',
        }}
      >
        <Box sx={style.loginContainer}>
          <TextField
            sx={style.inputContainer}
            label="Username"
            variant="outlined"
            color="secondary"
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
            variant="contained"
            color="primary"
            size="large"
            sx={style.button}
          >
            Creat a New Account
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default LoginPage
