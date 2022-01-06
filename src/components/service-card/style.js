const style = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    bgcolor: 'background.paper',
    overflow: 'hidden',
    borderRadius: '20px',
    boxShadow: 5,
    margin: 15,
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    margin: 5,
    marginTop: 15,
  },
  image: {
    height: 250,
    width: 450,
    borderRadius: '20px',
    margin: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'medium',
    marginBottom: 5,
    ':hover': { color: 'secondary.main' },
  },
  descriptionContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  description: {
    fontSize: 18,
    fontWeight: 'light',
    margin: 1,
    textAlignVertical: 'center',
  },
  icon: { color: 'secondary.main', fontSize: 30 },
}

export default style
