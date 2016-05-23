var React = require('react');
var List  = require('./List.jsx');

var ListManager = React.createClass({
    getInitialState: function() {
        return ({items: [], newItemText: ''});
    },

    onChange: function(e) {
        this.setState({newItemText: e.target.value});
    },

    handleSubmit: function(e) {
        e.preventDefault();

        var currentItems = this.state.items;

        currentItems.push(this.state.newItemText);

        this.setState({items: currentItems, newItemText: ''});
    },

    render: function() {
        var divStyle = {
            marginTop: 40
        }

        var headingStyle = {
            marginTop: 10
        }

        return (
            <div className="col-sm-4" style={divStyle}>
                <div className={"panel panel-" + this.props.panelType}>
                    <div className="panel-heading">
                        <h3 style={headingStyle}>{this.props.title}</h3>
                    </div>
                    <div className="row panel-body">
                        <div className="col-xs-12">
                            <form onSubmit={this.handleSubmit} className="input-group">
                                <input type="text" onChange={this.onChange} value={this.state.newItemText} className="form-control" placeholder="Type something here..." />
                                <span className="input-group-btn">
                                    <button className={"btn btn-" + this.props.panelType}>Add</button>
                                </span>
                            </form>

                            <List items={this.state.items} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = ListManager;
