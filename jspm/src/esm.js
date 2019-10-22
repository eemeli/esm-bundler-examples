import Foo from 'foo'
import React from 'react'

const Bar = React.createElement("div", null, React.createElement(Foo, null));
console.log(Bar)
