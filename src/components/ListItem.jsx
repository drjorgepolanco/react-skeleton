var React = require('react');

var ListItem = React.createClass({
    render: function() {
        var listItemStyle = {
            paddingTop: 10
        }

        return (<li style={listItemStyle}>{this.props.text}</li>);
    }
});

module.exports = ListItem;
