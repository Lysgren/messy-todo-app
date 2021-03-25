const HandleRequest = (req, res, next) => {
  console.log(`Handling request for ${req.method} ${req.path}`)
  next()
}

const ErrorHandeling = (req, res, next) => {
  if (req.method == 'POST' && req.headers['content-type'] != 'application/json'){
    return res.status(400).json({error: 'Missing header Content-Type: application/json'})
  }
  next()
}

module.exports = { HandleRequest, ErrorHandeling }