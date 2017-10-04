var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

function addElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}
function destructivelyAddElementToBeginningOfArray(array, element){
  array2 = array.unshift(element)
  return array2
}
