module.exports = (req, res) => {
  const {slug} = req.query
  res.send({slug: `/${slug}`})
}