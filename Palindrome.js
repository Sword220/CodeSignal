//Given the string, check if it is a palindrome.

checkPalindrome = (inputString) => {
  let reverseString = inputString.split('').reverse().join('')
    if (reverseString === inputString) {
        return true
    } else {
        return false
    } 
}
