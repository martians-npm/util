const Astronomy = require('astronomy-engine')

const C_PER_AU = 499.00478384 // Speed of light per Astronomical unit

module.exports.getDistance = function getDistance (date = null) {
  if (!date) date = new Date()

  return Astronomy.Illumination('Mars', date).geo_dist
}

module.exports.getTimeDistance = function getTimeDistance (date = null) {
  const distance = this.getDistance(date)

  return distance * C_PER_AU
}
