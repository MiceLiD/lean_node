function splitTimeRange({ phoneNumber, startTime, endTime }) {
  let range = []
  const st = new Date(startTime).valueOf()
  const et = new Date(endTime).valueOf()
  const diff = et - st
  const twoHour = 2 * 60 * 60 * 1000
  if (diff > twoHour) {
    for (let i = 0; i < diff; i = i + twoHour) {
      let _st = st + i
      range.push({
        phoneNumber,
        startTime: new Date(_st).toLocaleString(),
        endTime: et - _st > twoHour ? new Date(_st + twoHour).toLocaleString() : endTime
      })
    }
  } else {
    range.push({
      phoneNumber,
      startTime,
      endTime
    })
  }
  return range
}

const range = splitTimeRange({
  phoneNumber: 177,
  startTime: '2018-10-10 00:00:00',
  endTime: '2018-10-10 04:04:00'
})

console.log(range)