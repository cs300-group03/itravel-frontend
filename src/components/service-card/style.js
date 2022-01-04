const style = {
  container: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: 'center',
    bgcolor: 'background.paper',
    overflow: 'hidden',
    borderRadius: '20px',
    boxShadow: 5,
  },
  image: {
    height: 335,
    width: 575,
    // maxHeight: { xs: 335, md: 167 },
    // maxWidth: { xs: 575, md: 250 },
    borderRadius: '20px',
    margin: 1,
  },
  title: { fontSize: 30, fontWeight: 'medium', color: 'primary.main' },
  description: { fontSize: 24, fontWeight: 'light' },
}

export default style
