const style = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 36,
    color: 'secondary.main',
    mt: 5,
    '& input': {
      textAlign: 'center',
    },
  },
  icon: {
    color: 'secondary.main',
    fontSize: 24,
    marginRight: 3,
  },
  detail: {
    fontWeight: 'medium',
    fontSize: 18,
    color: 'secondary.main',
  },
}

export default style
