//Given an array of integers, find the pair of adjacent elements that has 
//the largest product and return that product.

adjacentElementProduct = (arr) => {
  highestProduct = Number.NEGATIVE_INFINITY
    for (i = 0; i <= arr.length; i++) {
        if (arr[i] * arr[i + 1] > highestProduct) {
            highestProduct = arr[i] * arr[i + 1]
        }
    }
    return highestProduct
}