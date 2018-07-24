// 归并排序
function mergeSort(originalArr) {
  let arr = [...originalArr]
  if (arr.length <= 1) {
    return arr
  }

  const midIdx = Math.floor(arr.length / 2)
  const leftArr = arr.slice(0, midIdx)
  const rightArr = arr.slice(midIdx, arr.length)

  // 递归：直到分割的数组项只有一项, 执行左右数组排序
  const leftArrSorted = mergeSort(leftArr)
  const rightArrSorted = mergeSort(rightArr)

  return mergeSortedArr(leftArrSorted, rightArrSorted)
}
function mergeSortedArr(leftArr, rightArr) {
  let sortedArr = []

  while(leftArr.length && rightArr.length) {
    let minmumEl = null
    if (leftArr[0] <= rightArr[0]) {
      minmumEl = leftArr.shift()
    } else {
      minmumEl = rightArr.shift()
    }
    sortedArr.push(minmumEl)
  }
  if (leftArr.length) {
    sortedArr = sortedArr.concat(leftArr)
  }
  if (rightArr.length) {
    sortedArr = sortedArr.concat(rightArr)
  }
  return sortedArr
}

console.log(mergeSort([3,2,4,6,2,7,5]))