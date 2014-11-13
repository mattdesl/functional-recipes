var colorStyle = require('color-style')
var style = require('dom-style')

//renders [R,G,B] colors and appends them to the DOM
module.exports = function(colors, parent) {
    colors
        .map(domify)
        .forEach(append(parent))
}

//pure function producing a DOM element for a color
module.exports.domify = domify
function domify(color) {
    var div = document.createElement("div")
    style(div, {
        width: '100px',
        height: '100px',
        padding: '5px',
        display: 'inline-block',
        backgroundColor: colorStyle(color)
    })
    return div
}

//higher-order to append an element to a parent or document.body
function append(parent) { 
    parent = parent || document.body

    return function(color) { 
        //can't avoid the side effect here...
        parent.appendChild(color)
    }
}