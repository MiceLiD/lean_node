const axios = require('axios')

module.exports = async () => {
  try {
    const results = await axios({
      method: 'get',
      url: 'https://api.ipdata.co',
    })
    const { city, region } = results.data
  } catch (error) {
    return `beijing, CN`
  }
  return `${city}, ${region}`
}
