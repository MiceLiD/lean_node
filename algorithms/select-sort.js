function selectSort(arr) {
  let sortedArr = [...arr]
  for (let i = 0; i < sortedArr.length - 1; i++) {
    let minIdx = i
    // 遍历剩余元素，找出最小值的下标
    for (let j = i + 1; j < sortedArr.length; j++) {
      if (sortedArr[j] < sortedArr[minIdx]) {
        minIdx = j
      }
    }
    // 找到最小值下标时交换，此处条件是避免与自身交换带来的额外开销
    if (minIdx !== i) {
      let temp = sortedArr[i]
      sortedArr[i] = sortedArr[minIdx]
      sortedArr[minIdx] = temp
    }
  }
  return sortedArr
}
// O(n^2)

console.log(selectSort([3,2,4,6,2,7,5]))