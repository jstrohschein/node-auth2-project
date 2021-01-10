module.exports = (role) => {
  return function (req, res, next) {
    if ((req.decodedjwt && req.decodedjwt.role || '') === role) {
      next()
    } else {
      res.status(403).json({ message: 'not authorized' })
    }
  }
}