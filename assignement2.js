// FOR EACH //
// will take in an array of elements
// execute any callback function on each of those elements
Array.prototype.myEach = function (callb) {

    for (let i = 0; i < this.length; i++) { //for the length of the array
        callb(this[i]); //implement callb function
    }
};

const words = ["dog", "plant", "cat"];
words.myEach(console.log);



// MAP //
Array.prototype.myMap = function() {

};

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
