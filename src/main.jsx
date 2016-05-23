var React    = require('react');
var ReactDOM = require('react-dom');

var IngredientList = require('./components/IngredientList.jsx');
var ListManager = require('./components/ListManager.jsx');

ReactDOM.render(<IngredientList />, document.getElementById('ingredients'));
ReactDOM.render(<ListManager title="Ingredients" panelType="primary" />, document.getElementById('ingredients-list'));
ReactDOM.render(<ListManager title="Supermaket" panelType="success" />, document.getElementById('supermarket-list'));
ReactDOM.render(<ListManager title="Random List" panelType="danger" />, document.getElementById('random-list'));
