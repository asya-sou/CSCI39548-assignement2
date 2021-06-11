// FOR EACH //
// will take in an array of elements
// execute any callback function on each of those elements
Array.prototype.myEach = function (callb,thisArg) {

    for (let i = 0; i < this.length; i++) { //for the length of the array
        callb(this[i], i, this); //implement callb function
    }
};

//--------------- TESTING ForEach ---------------//
//test callback function (concsole log renamed)
//function print(object) {
//    console.log(object);
//};
//test array
//let words = ["dog", "plant", "cat"];
//test myEach
//words.myEach(print);
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
//test callback function (adds 2 to a number)
//function plusplus(yourNumber) {
//    let newNum = yourNumber +2;
//    return newNum;
//};

//test arrays
//var test = [1, 2, 3, 4];

//test myMap
//var newNumbers = test.myMap(plusplus);//set new array to myMap output
//console.log(test.myMap(plusplus)); //test printing returned array
//console.log(newNumbers);//test array set to myMap output array
//console.log(test); //check if old array stayed the same
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
//test callback function (adds 2 to a number)
//function twoMore(yourNumber) {
//    return (yourNumber >= 2);
//};

//test arrays
//var test = [1, 2, 3, 4];

//test myFilter
//var newNumbers = test.myFilter(twoMore);//set new array to myFilter output
//console.log(test.myFilter(twoMore)); //test printing returned array
//console.log(newNumbers);//test array set to myMap output array
//console.log(test); //check if old array stayed the same
//----------------------------------------------//


// SOME //
Array.prototype.mySome = function() {

};

// EVERY //
Array.prototype.myEvery = function() {

};

// REDUCE //
Array.prototype.myReduce = function() {

};

// INCLUDES //
Array.prototype.myIncludes = function() {

};

// INDEXOF //
Array.prototype.myIndexOf = function() {

};

// PUSH //
Array.prototype.myPush = function() {

};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function() {

};

// KEYS //
Object.grabKeys = function() {

};

// VALUES //
Object.grabValues = function() {

};
