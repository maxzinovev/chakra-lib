
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./chakra-lib.cjs.production.min.js')
} else {
  module.exports = require('./chakra-lib.cjs.development.js')
}
