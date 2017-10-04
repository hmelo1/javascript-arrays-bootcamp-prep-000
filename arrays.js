var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]
var myarray = [];
function addElementToBeginningOfArray(myArray, element){
  myArray.unshift(element)
  return myArray
}
console.log(myArray)
function destructivelyAddElementToBeginningOfArray(myArray, element){
  array2 = myArray.unshift(element)
  return array2
}
console.log(myArray)
