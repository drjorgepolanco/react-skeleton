var React = require('react');
var Base  = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Base Header</h1>
                {this.props.children}
                <h1>Base Footer</h1>
            </div>
        );
    }
});

module.exports = Base;
