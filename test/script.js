const passwordMaker = require('password-maker')

const passwords = passwordMaker.generate({
  length: 10,
  numbers: true,
  symbols: false,
  lowercase: false,
  uppercase: true,
  excludeSimilarCharacters: false,
  exclude: '',
  strict: false,
  customCharacters: '',
  prefix: '',
  suffix: '',
  repeatCharacters: false,
})

console.log(passwords)
