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
    //below this line, please explain.
    acc = callback(acc, newCollection[i], newCollection)
  }
  return acc;
}

const myFind = function(collection, predicate) {
  let newCollection = standardizeInput(collection);
  for(let i = 0; i < newCollection.length; i++) {
    //find predicate === element, why is it "(predicate(newCollection[idx]))"
    if(predicate === newCollection[i])
    return newCollection[i];
  }
  return undefined;
}

const myFilter = function(collection, predicate){
  let newCollection = standardizeInput(collection);
  
}