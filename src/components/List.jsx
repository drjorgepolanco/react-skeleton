// start with CAPS because is a component. It's not mandatory to do it that way.
var React    = require('react');
var ListItem = require('./ListItem.jsx');

var ingredients = [
    {"id": 1, "text": "ham"}, 
    {"id": 2, "text": "cheese"}, 
    {"id": 3, "text": "potatoes"}
];

// start with CAPS because is a Class
var List = React.createClass({
    render: function() {
        var listItems = ingredients.map(function(item) {
            return(<ListItem key={item.id} ingredient={item.text} />);
        });

        return(<ul>{listItems}</ul>);
    }
});

module.exports = List;