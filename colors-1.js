// ------------------------------------------
// A1. a standard imperative approach
// ------------------------------------------

var luminance = require('color-luminance')
var colors = require('./lib/color-data')
var domify = require('./lib/render-colors').domify

//manipulate the colors with some pipeline of effects
function gradient(colors, low, high) {
    var newColors = []

    for (var i=0; i<colors.length; i++) {
        //original color
        var orig = colors[i]

        //the brightness of this color [0 - 1]
        var Y = luminance(orig)

        //threshold it
        if (Y/255 >= low && Y/255 <= high) {
            //convert to grayscale
            var gray = [Y, Y, Y]
            newColors.push(gray)
        }
    }

    //sort by luminance
    newColors.sort(function(a, b) {
        return luminance(b) - luminance(a)
    })

    //render & add them
    for (i=0; i<newColors.length; i++) {
        var e = domify(newColors[i])
        document.body.appendChild(e)
    }
}

gradient(colors, 0.2, 1.0)