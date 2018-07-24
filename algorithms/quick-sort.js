function quickSort(arr) {
  let sortedArr = [...arr]
  if (sortedArr.length <= 1) {
    return sortedArr
  }
  const leftArr = []
  const rightArr = []

  const povitEl = sortedArr.shift()
  const centerArr = [povitEl]

  while(sortedArr.length) {
    const curEl = sortedArr.shift()
    if (curEl === povitEl) {
      centerArr.push(curEl)
    } else if (curEl > povitEl) {
      rightArr.push(curEl)
    } else {
      leftArr.push(curEl)
    }
  }

  // 递归分治
  const leftArrSort = quickSort(leftArr)
  const rightArrSort = quickSort(rightArr)

  return leftArrSort.concat(centerArr, rightArrSort)

}
// O(n)

console.log(quickSort([3,1,7,2,4,5,6]))