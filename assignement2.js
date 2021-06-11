// FOR EACH //
// will take in an array of elements
// execute any callback function on each of those elements
Array.prototype.myEach = function (callb) {

    for (let i = 0; i < this.length; i++) { //for the length of the array
        callb(this[i]); //implement callb function
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
Array.prototype.myMap = function(callb, thisValue) {
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
Array.prototype.myFilter = function() {

};

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
