var React    = require('react');
var ReactDom = requite('react-dom');

var List     = require('./components/List.jsx');

ReactDom.render(<List />, document.getElementById('ingredients'));