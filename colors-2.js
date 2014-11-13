// ------------------------------------------
// A2. short and simple functional approach
// ------------------------------------------

var luminance = require('color-luminance')
var colors = require('./color-data')

//manipulate the colors with some pipeline of effects
function gradient(colors, low, high) {
    return colors
        //filter colors by luminance
        .filter(function(color) {
            var Y = luminance(color)/255
            return Y >= low && Y <= high
        })
        //convert colors to grayscale
        .map(function(color) {
            var y = luminance(color)
            return [y, y, y]
        })
        //sort by luminance       
        .sort(function(a, b) {
            return luminance(b) - luminance(a)
        })
}

var result = gradient(colors, 0.2, 1.0)

//our side effect (appending to DOM)
require('./render-colors')(result)



