// start with CAPS because is a component. It's not mandatory to do it that way.
var React    = require('react');
var Ingredient = require('./Ingredient.jsx');

var ingredients = [
    {"id": 1, "text": "ham"}, 
    {"id": 2, "text": "cheese"}, 
    {"id": 3, "text": "potatoes"},
    {"id": 4, "text": "banana"}
];

// start with CAPS because is a Class
var IngredientList = React.createClass({
    render: function() {
        var listItems = ingredients.map(function(item) {
            return(<Ingredient key={item.id} ingredient={item.text} />);
        });

        return(<ul>{listItems}</ul>);
    }
});

module.exports = IngredientList;