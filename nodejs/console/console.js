const fs = require('fs')
const { Console } = require('console')
const output = fs.createWriteStream('./stdout.log')
const errOutput = fs.createWriteStream('./stderr.log')

const logger = new Console(output, errOutput)

logger.log('正常日志')
logger.error(new Error('error 日志'))