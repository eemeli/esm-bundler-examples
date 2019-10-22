const assert = require('assert')
const msg = require('./cjs')

it('CJS', () => {
  assert.equal(msg, 'CommonJS module')
})
