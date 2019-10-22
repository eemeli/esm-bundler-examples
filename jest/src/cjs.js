const Foo = require('foo').default
const React = require('react')

const Bar = React.createElement('div', null, React.createElement(Foo, null))
module.exports = Bar.props.children.type
