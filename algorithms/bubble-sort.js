function bubbleSort(arr) {
  let sortedArr = [...arr]
  let swap = false
  for (let i = 0; i < sortedArr.length; i++) {
    swap = false
    // 由于最大值已经被交换到数组末端，所以每次遍历交换次数需要减掉i
    for (let j = 0; j < sortedArr.length - i; j++) {
      if (sortedArr[j] > sortedArr[j + 1]) {
        let temp = sortedArr[j + 1]
        sortedArr[j + 1] = sortedArr[j]
        sortedArr[j] = temp
        // 发生交换
        swap = true
      }
    }
    if (!swap) {
      return sortedArr
    }
  }
  return sortedArr
}
// O(n^2)

console.log(bubbleSort([3,2,4,6,2,7,5]))