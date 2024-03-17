# Password Maker

A simple JavaScript module to generate passwords based on specified options.

## Installation

You can install the `password-maker` module via npm:

```bash
npm install password-maker
```

## Usage

#### `generate([options])`

Generate one password with the given options. Returns a string.

```javascript
const passwordMaker = require('password-maker')

const passwords = passwordMaker.generate({
  length: 10,
  numbers: true,
  symbols: true,
  lowercase: true,
  uppercase: true,
})

console.log(passwords)

// 'VdrB8iW(_e'
console.log(password)
```

### Available options

Any of these can be passed into the options object for each function.

| Name                     | Description                                                           | Default Value |
| ------------------------ | --------------------------------------------------------------------- | ------------- |
| length                   | Integer, Length of the generated password.                            | 10            |
| numbers                  | Boolean, put numbers in password.                                     | true          |
| symbols                  | Boolean or String, put symbols in password.                           | true          |
| lowercase                | Boolean, put lowercase in password                                    | true          |
| uppercase                | Boolean, use uppercase letters in password.                           | true          |
| exclude                  | String, characters to be excluded from password.                      | ''            |
| excludeSimilarCharacters | Boolean, exclude similar chars, like 'i' and 'l'.                     | false         |
| customCharacters         | Boolean, additional characters to include in the password.            | false         |
| prefix                   | String, prefix to prepend to the password                             | ''            |
| suffix                   | String, suffix to append to the password.                             | ''            |
| strict                   | Boolean, password must include at least one character from each pool. | false         |
| repeatCharacters         | Boolean, repeat characters to match the specified length.             | false         |

## Licence

Feel free to adjust the content of the `README.md` file according to your project's specifics and requirements.
