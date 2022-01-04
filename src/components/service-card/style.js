const style = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    bgcolor: 'background.paper',
    overflow: 'hidden',
    borderRadius: '20px',
    boxShadow: 5,
    margin: 5,
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    margin: 5,
    marginTop: 15,
  },
  image: {
    height: 335,
    width: 575,
    // maxHeight: { xs: 335, md: 167 },
    // maxWidth: { xs: 575, md: 250 },
    borderRadius: '20px',
    margin: 5,
  },
  title: {
    fontSize: 30,
    fontWeight: 'medium',
    color: 'primary.main',
    marginBottom: 5,
  },
  description: { fontSize: 24, fontWeight: 'light' },
}

export default style
