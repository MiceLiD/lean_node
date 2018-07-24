function insertSort(arr) {
  let sortedArr = [...arr]
  for (let i = 0; i < sortedArr.length; i++) {
    let curIdx = i
    // 循环遍历 0-i 子数组
    while(sortedArr[curIdx - 1] && sortedArr[curIdx] < sortedArr[curIdx - 1]) {
      let temp = sortedArr[curIdx - 1]
      sortedArr[curIdx - 1] = sortedArr[curIdx]
      sortedArr[curIdx] = temp
      curIdx--
    }
  }
  return sortedArr
}
// O(n^2)

console.log(insertSort([3,1,7,2,4,5,6]))