const WrongHeader = (req, res, next) => {
  if (req.method == 'POST' && req.headers['content-type'] != 'application/json'){
    return res.status(400).json({message: 'Missing header Content-Type: application/json'})
  }
  next()
}

const WrongBody = (error, req, res, next) => {
  res.status(500).json({error})
}

module.exports = { 
  WrongHeader, 
  WrongBody 
}