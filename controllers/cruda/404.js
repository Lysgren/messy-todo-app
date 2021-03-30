const NothingFoundGet = (req, res) => {
  res.status(404).json({error: '404: Page not Found'})
}

const NothingFoundPost = (req, res) => {
res.status(404).json({error: '404: Could not post'})
}

module.exports = {
  NothingFoundGet,
  NothingFoundPost
}