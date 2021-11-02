const standardizeInput = function(collection){
  return(collection instanceof Array) ? collection.slice() : Object.values(collection)
}
/* checking to see if collection is a class, subclass or interface of array. if true, will make shallow copy with slice. If not, will return the keyss of collection.
*/

const myEach = function(collection, callback) {
  const newCollection = standardizeInput(collection)
/*
will  loop through the array and pass each element through the call back function but will return the original array
*/
  for(let i=0; i<newCollection.length; i++){
    callback(newCollection[i])
  }
  return collection;
}

const myMap = function(collection, callback){
  const newCollection = standardizeInput(collection);
  const newArray = [];
  for(let i=0; i<newCollection.length; i++){
    newArray.push(callback(newCollection[i]))
  }

  return newArray;
}

const myReduce = function(collection, callback, acc) {
  let newCollection = standardizeInput(collection);
  if(!acc){
    acc = newCollection[0]
    newCollection = newCollection.slice(1)
  }
  for(let i = 0; i < newCollection.length; i++) {
    acc = callback(acc, newCollection[i], newCollection)
  }
  return acc;
}

const myFind = function(collection, callback) {
  let newCollection = standardizeInput(collection);
  for(let i = 0; i < newCollection.length; i++) {
    if(callback(newCollection[i]))
    return newCollection[i];
  }
  return undefined;
}

const myFilter = function(collection, callback){
  let newCollection = standardizeInput(collection);
  let newArray = [];
  for(let i=0; i<newCollection.length;i++){
    if(callback(newCollection[i])){
      newArray.push(newCollection[i])
    }
  }
  return newArray
}

const mySize = function(collection) {
  let newCollection = standardizeInput(collection);
  return collection.length || Object.keys(newCollection).length
}

const myFirst = function(array, n = false) {
  console.log("first", array.slice(0,n))
return (n) ? array.slice(0, n) : array[0]
}

const myLast = function(array, n = false){
  console.log(array.slice(array.length-n))
  return (n) ? array.slice(array.length - 1, n) : array[array.length -1]
}