// ------------------------------------------
// A4. ES6 arrow functions
// ------------------------------------------

var luminance = require('color-luminance')
var colors = require('./color-data')
var rgb2hsv = require('color-convert').rgb2hsv

//manipulate the colors with some pipeline of effects
function filtersort(colors, threshold) {
    threshold = threshold || (x => true)
    return colors
        .filter(threshold)
        .sort((a, b) => {
             return luminance(b) - luminance(a)
        })
}

//returns a grayscale
function saturation(fn) {
    return color => {
        var hsv = rgb2hsv(color)
        return fn(hsv[1])
    }
}

//different thresholding functions
var saturated = saturation(sat => sat >= 50)
var desaturated = require('negate')(saturated)

var result = filtersort(colors, desaturated)
require('./render-colors')(result)


