const style = {
  container: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: 'center',
    bgcolor: 'background.paper',
    overflow: 'hidden',
    borderRadius: '12px',
    boxShadow: 1,
    fontWeight: 'bold',
  },
  image: {
    height: 233,
    width: 350,
    maxHeight: { xs: 233, md: 167 },
    maxWidth: { xs: 350, md: 250 },
  },
  title: { fontSize: 30, fontWeight: 'medium' },
  description: { fontSize: 24, fontWeight: 'light' },
}

export default style
