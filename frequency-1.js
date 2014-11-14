// ------------------------------------------
// B1. a standard imperative approach
// ------------------------------------------

var text = require('./lib/lipsum')

//get sorted frequencies of words in text
var allWords = words(text)

//filter by length
var longWords = []
for (var i=0; i<allWords.length; i++) {
    var w = allWords[i]
    if (w.length > 4)
        longWords.push(w)
}
var freqs = frequencies(longWords)

//get top 5 words
var top = []
for (var i=0; i<freqs.length && i<5; i++) {
    top.push(freqs[i].word)
}

console.log("Unique long words:", freqs.length)
console.log("Most repeated long words:", top)

function frequencies(words) {
    //compute frequencies
    var freqMap = {} 
    for (var i=0; i<words.length; i++) {
        var word = words[i]
        freqMap[word] = (freqMap[word]||0) + 1
    }

    //turn into objects, sorted by frequency
    var result = []
    for (var k in freqMap) {
        result.push({ 
            word: k,
            frequency: freqMap[k]
        })
    }

    return result.sort(function(a, b) {
        return b.frequency - a.frequency
    })
}

function words(text) {
    var wordList = text.split(' ')
    for (var i=0; i<wordList.length; i++) {
        wordList[i] = wordList[i].trim().toLowerCase()
    }
    return wordList
}