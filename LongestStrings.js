//Given an array of strings, return another array containing all of its longest strings.

allLongestStrings = (inputArray) => {
  let longestStrings = inputArray[0].length
  for (i = 0; i < inputArray.length; i++) {
    if (longestStrings < inputArray[i].length) {
      longestStrings = inputArray[i].length
    }
  }
  inputArray = inputArray.filter( (word) => {
      return word.length === longestStrings
    })
  return inputArray
} 