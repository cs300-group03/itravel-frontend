const style = {
  container: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    paddingTop: 10,
  },
  imageContainer: {
    flex: 1.25,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  loginContainer: {
    m: 15,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: 5,
    borderRadius: 5,
    padding: 3,
  },
  inputContainer: { 
    m: 2, 
    width: 355, 
    height: 55,
  },
  button: {
    fontFamily: 'Poppins',
    textTransform: 'none',
    borderRadius: 2,
    width: 355,
    height: 50,
    fontSize: 18,
    m: 2,
    // mb: 15,
  },
}

export default style
