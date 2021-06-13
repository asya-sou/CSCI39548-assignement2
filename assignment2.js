// FOR EACH //
// will take in an array of elements
// execute any callback function on each of those elements
Array.prototype.myEach = function (callb,thisArg) {

    for (let i = 0; i < this.length; i++) { //for the length of the array
        callb(this[i], i, this); //implement callb function
    }
};

//--------------- TESTING ForEach ---------------//
/*
//test callback function (concsole log renamed)
function print(object) {
    console.log(object);
};

//test array
let words = ["dog", "plant", "cat"];

//test myEach
words.myEach(print);
*/
//----------------------------------------------//


// MAP //
// will take in an array of elements
// execute any callback function on each of those elements
// callback output is in a new array
Array.prototype.myMap = function(callb, thisArg) {
    let outputArr = []; //create array for callback output

    for (let i = 0; i < this.length; i++){ //for the length of the array
        outputArr.push(callb(this[i], i, this)); //push callback output into new array
    }
    return outputArr; //return new array
};

//--------------- TESTING MyMap ---------------//
/*
//test callback function (adds 2 to a number)
function plusplus(yourNumber) {
    let newNum = yourNumber +2;
    return newNum;
};

//test arrays
var test = [1, 2, 3, 4];

//test myMap
var newNumbers = test.myMap(plusplus);//set new array to myMap output
console.log(test.myMap(plusplus)); //test printing returned array
console.log(newNumbers);//test array set to myMap output array
console.log(test); //check if old array stayed the same
*/
//----------------------------------------------//


// FILTER //
// will take in an array of elements
//create a new array with elements that pass callback function
Array.prototype.myFilter = function(callb, thisArg) {
    let outputArr = [];
    for(let i=0; i < this.length; i++){
        if(callb(this[i], i, this)) { //if passes function specs
            outputArr.push(this[i]); //add to new array
        }
    }
    return outputArr; //return array
};


//--------------- TESTING myFilter ---------------//
/*
//test callback function (checks if number >=2)
function twoMore(yourNumber) {
    return (yourNumber >= 2);
};

//test arrays
var test = [1, 2, 3, 4];

//test myFilter
var newNumbers = test.myFilter(twoMore);//set new array to myFilter output
console.log(test.myFilter(twoMore)); //test printing returned array
console.log(newNumbers);//test array set to myFilter output array
console.log(test); //check if old array stayed the same
*/
//----------------------------------------------//


// SOME //
// will take in an array of elements
//returns true if at least one element passes callback specs
Array.prototype.mySome = function(callb) {
    var truth = false; //set truth to true untill callb fails 
    for(let i=0; i < this.length; i++){
        if(!(callb(this[i], i, this))) { //if at least one pass function specs
           truth = true; //return value will be true
        }
    }
    return truth; //return the truth
};


//--------------- TESTING mySome ---------------//
/*
//test callback function (checks if number >=2)
function twoMore(yourNumber) {
    return (yourNumber >= 2);
};

//test arrays
var test = [1, 2, 3, 4];

//test mySome
var newNumbers = test.mySome(twoMore);//set new array to mySome output
console.log(test.mySome(twoMore)); //test printing returned value (true)
console.log(newNumbers);//test array set to mySome bool (true)
console.log(test); //check if old array stayed the same
*/
//----------------------------------------------//

// EVERY //
// will take in an array of elements
//returns true if all elements pass callback specs

Array.prototype.myEvery = function(callb) {
    var truth = true; //set truth to true untill callb fails 
    for(let i=0; i < this.length; i++){
        if(! (callb(this[i], i, this)) ) { //if at least one doesn't  pass function specs
           truth = false; //return value will be false
        }
    }
    return truth; //return the truth
};

//--------------- TESTING myEvery ---------------//
/*
//test callback function (checks if number >=2)
function twoMore(yourNumber) {
    return (yourNumber >= 2);
};

//test arrays
var test = [1, 2, 3, 4];

//test myEvery
var newNumbers = test.myEvery(twoMore);//set new array to mySome output
console.log(test.myEvery(twoMore)); //test printing returned value (false)
console.log(newNumbers);//test array set to mySome bool (false)
console.log(test); //check if old array stayed the same
*/
//----------------------------------------------//


// REDUCE //
// will take in an array of elements
// cuts array to single value
// value based on callb
// accumulator - single return value
//TODO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// if array empty and no initialValue - typeError
// if initialValue provided, accumulator initially set to it 
Array.prototype.myReduce = function(callb, initialValue) {
    if (this.length >= 1){
        var accumulator = (initialValue === undefined)? null : initialValue;

        for (let i = 0; i < this.length; i++){

            if (accumulator !== undefined){
            accumulator = callb( accumulator, this[i], i, this);
            }

        }
    }
    return accumulator;
};

//--------------- TESTING myReduce ---------------//
/*
//test callback function (sum of elements + 2 * #elements)
//accumulator - accum value prev. retyurned by the callback (starts at initialValue)
//currValue - element on which operation is done
function twoMore(accumulator, currValue) {
    return accumulator + currValue + 2;
};

//test array
var test = [1, 2, 3, 4];

//test myReduce
var newNumber = test.myReduce(twoMore);//set new variable to myReduce output
console.log(test.myReduce(twoMore)); //test printing returned value (18)
console.log(newNumber);//test array set to myReduce accum (18)
console.log(test); //check if old array stayed the same
*/
//----------------------------------------------//

// INCLUDES //
// will take in an array of elements
// checks if it contains a value
//TODO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//if array empty - error
//if fromIndex > this.length - error
Array.prototype.myIncludes = function(callb, fromIndex) {
    var truth = false; //if no value
    if (this.length >= 1){
        let i = (fromIndex === undefined)? 0 : fromIndex;

        for (i; i < this.length; i++) {
            truth = (callb === this[i])? true : truth;

        }
    }

    return truth;
};

//--------------- TESTING myIncludes ---------------//
/*
//test array
const numbers = [1, 2, 3, 4, 5, 6];
const words = ['cat','dog','plant']; 

//test myIncludes
console.log(numbers.myIncludes(1, 2)); //test printing returned value (false)
console.log(numbers.myIncludes(6, 4)); //test printing returned value (true)
console.log(words.myIncludes(7)); //test printing returned value (false)
console.log(words.myIncludes('cat')); //test printing returned value (true)
*/
//----------------------------------------------//


// INDEXOF //
// will take in an array of elements
// returns first i @ which a given element is found
// returns -1 if not present
Array.prototype.myIndexOf = function(callb, fromIndex) {
    if (this.length >= 1){ //if array not empty
        let i = (fromIndex === undefined)? 0 : fromIndex; //starting Index is fromIndex if provided

        for (i; i < this.length; i++) {
            if (callb === this[i]) //if callb value found -
                return i; // return first index where it is found
        }
    return -1; //if not present
    }

};

//--------------- TESTING myIndexOf ---------------//
/*
//test array
const numbers = [1, 2, 3, 4, 5, 6, 3];
const words = ['cat','dog','plant']; 

//test myIndexOf
console.log(numbers.myIndexOf(3)); //test index of 3 (2) (repeated value case)
console.log(numbers.myIndexOf(8)); //test index of 8 (-1)
console.log(numbers.myIndexOf(2, 3)); //test index of 2 from 3 (-1)
console.log(numbers.myIndexOf(2, 1)); //test index of 2 from 1 (1)

console.log(words.myIndexOf(7)); //test if includes number (-1)
console.log(words.myIndexOf('cat')); //find the cat (0)
*/
//----------------------------------------------//



// PUSH //
// will take in an array of elements
// adds element(s) to the array
// returns updated length
// relies on a length property to determine where to start inserting
// If the length property cannot be converted into a number, the index used is 0
// CAN PUSH MULTIPOLE ELEMENTS
Array.prototype.myPush = function() {
    //if empty array - set to 0, else stay same
    this.length = (this.length === undefined)? 0 : this.length; 

    for (let i = 0; i < arguments.length; i++) { //add as long as there are arguments
        this[this.length] = arguments[i]; //start inserting at array end
    }

    return this.length;
};

//--------------- TESTING myPush ---------------//
/*
//test array
let numbers = [1, 2, 3];
let words = ['cat','dog','plant']; 
let nothingness = [];//empty array

//test myPush
console.log(numbers.myPush(3, 3, 3));// add 3 x 3 & print new length(6)
console.log(numbers); //print new numbers ([1, 2, 3, 3, 3, 3])
console.log(nothingness.myPush('food', 'social media',)); //fill nothingness, print length (2)

console.log(nothingness.myPush());//check empty push (2)
console.log(nothingness);//still checking empty push results (['food', 'social media'])

console.log(numbers.myPush("mix"));// add 'mix' to number & print new length(7)
console.log(numbers); //print new numbers

console.log(numbers.push());//check reg. push empty reactions
*/
//----------------------------------------------//


// LASTINDEXOF //
// will take in an array of elements
// returns last i @ which a given element is found
// returns -1 if not present
Array.prototype.myLastIndexOf = function() {
    var index = -1; //if no value
    if (this.length >= 1){
        let i = (fromIndex === undefined)? 0 : fromIndex;

        for (i; i < this.length; i++) {
            index = (callb === this[i])? i : index; //if found - set return value to index where found
        }
    }

    return index;
};



// KEYS //
// will take in an object
// returns an array of enumerable properties of the obj.
// ERROR: non-object passed
Object.grabKeys = function(obj) {
    let keyArr = []; //create an array to return

    for (var prop in obj) { // for every property/key in the object
        if (obj.hasOwnProperty(prop)){ //if object has a property
            keyArr.push(prop); //add to the array
        }
    }
    return keyArr;
};

//--------------- TESTING grabKeys ---------------//
//keychain object with round, pentagon, rectangle,numberKeys proeprties/keys
/*
const myKeychain = {
    round: 'apartment',
    pentagon: 'bldng',
    rectangle: 'mailbox',
    numberKeys: 3
};

//test original keys
console.log(Object.keys(myKeychain)); //check original keys ([ 'round', 'pentagon', 'rectangle', 'numberKeys' ])
console.log(Object.grabKeys(myKeychain));//check myKeys ([ 'round', 'pentagon', 'rectangle', 'numberKeys' ])
*/
//----------------------------------------------//

// VALUES //
// will take in an object
// returns an array of values of enumerable properties
Object.grabValues = function() {

};
