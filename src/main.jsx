var React    = require('react');
var ReactDOM = require('react-dom');

var IngredientList = require('./components/IngredientList.jsx');
var ListManager = require('./components/ListManager.jsx');

ReactDOM.render(<IngredientList />, document.getElementById('ingredients'));
ReactDOM.render(<ListManager />, document.getElementById('list-manager'));