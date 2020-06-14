const mars = require('../index')

console.log(`Distance: ${mars.getDistance(new Date())} AU`)
console.log(`Time distance: ${mars.getTimeDistance(new Date()).toFixed(1)} secs`)
