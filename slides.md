# function programming (FP)

## core concepts 

- **side effects** and **pure functions**
- **declarative syntax**
- **functions as first-class citizens**

---

## benefits

- smaller and tighter code with less boilerplate
- clear and declarative syntax
- easier to compose and make larger abstractions
- easier to maintain

---

# concept - side effects

- a **side effect** is where a function changes some mutable state
- this can add complexity & make composition difficult
- **pure functions** return the same result every time it's called (i.e. no side effects)

*You can't completely avoid state!*

---

## examples: stateful operations

- changing the width of an element
- adding/removing items from the DOM
- incrementing a counter

---

## examples: stateless operations

- flooring a number
- producing a grayscale copy of an image
- templating a view with JSON data

---

# concept - declarative syntax

- tell the computer *what* you want to achieve
- not *how* to do it
- e.g. "filter persons where age < 18"
- not: "create new array, then for each person, if age is < 18, add it to the new array"

---

# concept - functions as first-class citizens

- treat functions like we do other entities (numbers, strings, etc)
- higher-order functions: a function that returns another function

```javascript
        function olderThan(age) {
            return function(person) {
                return person.age > age
            }
        }

        var isAdult = olderThan(18)
        var adults = persons.filter(isAdult)
```

---

## functional JavaScript

There are lots of approaches: 

- lodash / underscore
- ramda
- wu.js
- native Array methods

this talk will just cover native Array basics

---

## your new toolkit

the basic functions covered in the talk: 

```
- map
- filter
- reduce / reduceRight
- some
- every
- forEach
- sort
- slice
```

---

### format

A common format for most of them:

```js
var squared = numbers.map(function(n, index, array) {
    return n * n
})
```

---

## map

- returns a new array where each element is the return of the given function call

```
- eg: math operations on an array of numbers: 
      list.map(Math.round)
- eg: creating positioned DOM elements from a list of 2D points
- eg: templating a list of views from JSON objects
```

```js
    numbers.map(function(n) {
        return n * n
    })
```

---

## filter

- returns a new array with only values that return true on the given condition

```
- eg: threshold filter (e.g. "images with > 50% saturation")
- eg: producing an array of truthy values: 
      values.filter(Boolean)
```

```js
    var girls = persons.filter(function(p) {
        return p.gender === 'female'
    })
```

---

## reduce / reduceRight

- reduces a series of elements to a single value
- reduceRight is the same, but right-to-left 

```
- eg: sum a series of objects, like summing the width of numerous DIVs
- eg: or, get the max width of numerous DIVs
- eg: flatten a multi-dimensional array into a single array
```

```js
    var polyline = [ [25,25], [12,52] ]
    var points = polyline.reduce(function(a, b) {
        return a.concat(b)
    })
```

---

## some

- returns true if at least one element in the array satisfies the condition function

```
- eg: "does mouse collide with any sprites?"
- eg: "are any of the persons in the list female?"
- eg: "do any of the fields have validation errors?"
```

```js
    var isError = fields.some(function(f) {
        return !f.validate()
    })
```

---

## every

- returns true if all elements in the array satisfies the condition function

```
- eg: "are all checkboxes checked?"
- eg: "are all persons in the list female?"
- eg: "are all of the fields valid?"
```

```js
    var success = fields.every(function(f) {
        return f.validate()
    })
```

---

## forEach

- iterates over all elements of the array
- mainly used for side effects that can't be avoided

```
- eg: printing each text string to the console
- eg: adding each DOM element to a parent container
```

```js
    elements.forEach(function(e) {
        document.body.appendChild(e)
    })
```

---

## slice

- produces a shallow copy with an optional start/end index

```
- eg: producing a copy to avoid destructive changes with sort() function
- eg: capping lists (e.g. no more than 10 items per page)
```

```js
    //render first 20 articles
    articles.slice(0, 20)
        .map(render)
        .forEach(append(document.body))
```

---

## sort

- sorts an array based on a comparator function
- not exactly related to FP but often useful alongside it
- **modifies the array!** this goes against FP philosophy

```js
    //produce a sorted version
    persons.slice().sort(function(a, b) {
        return b.age - a.age
    })
```

---

## example

- take a list of [R, G, B] colors
- grayscale, threshold, and sort them into a gradient
- render them to the DOM
