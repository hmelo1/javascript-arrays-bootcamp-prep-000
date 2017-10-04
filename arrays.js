var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]
var myArray = [];
function addElementToBeginningOfArray(someArray, someElement){
  myArray = someArray.unshift(someElement)
  return myArray
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array2 = myArray.unshift(element)
  return array2
}
