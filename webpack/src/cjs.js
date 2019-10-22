const Foo = require('foo').default
const React = require('react')

const Bar = React.createElement("div", null, React.createElement(Foo, null));
console.log(Bar)

module.exports = { Bar }
