const msg = require('./cjs')

test('CJS', () => {
  expect(msg).toBe('ES Module')
})
