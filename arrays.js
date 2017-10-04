var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]
someArray = []
function addElementToBeginningOfArray(someArray, someElement){
  [someElement, ...someArray]
  return someArray
}

function destructivelyAddElementToBeginningOfArray(someArray, someElement){
  someArray.unshift(someElement)
  return someArray
}
