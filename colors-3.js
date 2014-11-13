// ------------------------------------------
// A3. using higher order functions
// ------------------------------------------

var luminance = require('color-luminance')
var colors = require('./color-data')

//manipulate the colors with some pipeline of effects
function gradient(colors, threshold) {
    threshold = typeof threshold === 'function' 
            ? threshold 
            : function() { return true }
    return colors
        .filter(threshold)
        .map(grayscale)
        .sort(lumaDistance)
}

//get the luminance difference between two colors
function lumaDistance(a, b) {
     return luminance(b) - luminance(a)
}

//returns a grayscale
function grayscale(color) {
    var y = luminance(color)
    return [y, y, y]
}

//high-order function for thresholding luminance
function luma(fn) {
    return function(color) {
        var y = luminance(color)
        return fn(y/255)
    }
}

//different thresholding functions
var dark = luma(function(Y) {
    return Y < 0.5
})
var midtones = luma(function(Y) {
    return Y > 0.25 && Y < 0.75
})
var bright = require('negate')(dark)

//using the generated function
var testColor = [255, 150, 128]
if (bright(testColor))
    console.log("yep, it's bright.")

var result = gradient(colors, dark)
require('./render-colors')(result)