var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]
var myarray = [];
function addElementToBeginningOfArray(array, element){
  myarray = array.unshift(element)
  return array
}

function destructivelyAddElementToBeginningOfArray(myArray, element){
  array2 = myArray.unshift(element)
  return array2
}
