const crypto = require('crypto')

export const getRandomNumber = async () => {
  return Math.floor(Math.random() * 1000 + 1)
}

export const getRandomString = async () => {
  return crypto.randomBytes(20).toString('hex')
}
