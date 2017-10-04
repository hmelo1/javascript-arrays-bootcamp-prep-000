var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]
someArray = []
function addElementToBeginningOfArray(someArray, someElement){
  someArray2 = [someElement, ...someArray]
  return someArray2
}

function destructivelyAddElementToBeginningOfArray(someArray, someElement){
  someArray.unshift(someElement)
  return someArray
}
function addElementToEndOfArray(someArray, someElement){
  someArray2 = [...someArray, someElement]
  return someArray2
}
