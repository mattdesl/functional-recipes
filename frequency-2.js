// ------------------------------------------
// B2. pluck, Object.keys, reduce
// ------------------------------------------

var pluck = require('plucker')
var text = require('./lib/lipsum')

//get sorted frequencies of words > 4 chars
var longWords = words(text).filter(greaterThan(4))
var freqs = frequencies(longWords)

//get top 5 words
var top = freqs.slice(0, 5).map(pluck('word'))

console.log("Unique long words:", freqs.length)
console.log("Most repeated long words:", top)

function frequencies(words) {
    //compute frequencies
    var f = words.reduce((frequencies, word) => {
        frequencies[word] = (frequencies[word] || 0) + 1;
        return frequencies;
    }, {});

    //turn into objects, sorted by frequency
    return Object.keys(f)
        .map(k => {
            return { word: k, frequency: f[k] }
        })  
        .sort((a, b) => b.frequency - a.frequency)
}

function words(text) {
    return text.split(' ')
        .map(s => s.trim().toLowerCase())
}

function greaterThan(n) {
    return str => str.length > n
}