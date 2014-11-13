var numbers = [ -40.0523, 10.562, 4.125, 0.6, 1.0 ]

// //functional
// function positive(x) {
//  return x >= 0
// }

// function print(x) {
//  console.log(x)
// }

// numbers.filter(positive)
//  .map(Math.round)
//  .forEach(print)




/*
imperative vs declarative
    telling the computer what to do
    vs. 
    telling the computer *how* to do it
*/

require('canvas-testbed')(render)

var touches = require('touch-position').emitter(),
    touch = touches.position 

touches.on('move', update)

function render(ctx, width, height) {
    ctx.clearRect(0, 0, width, height)

    var r = 50
    ctx.beginPath()
    ctx.arc(touch[0], touch[1], r, 0, Math.PI*2, false)
    ctx.stroke()
}

function update() {

}





