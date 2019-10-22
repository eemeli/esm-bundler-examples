const Foo = require('foo')
const React = require('react')

const Bar = React.createElement("div", null, React.createElement(Foo, null));
console.log(Bar)
