var React = require('react');
var ReactPropTypes = React.PropTypes;
var GridActions = require('../actions/GridActions');

// var classNames = require('classnames');

var GridHeader = React.createClass({
    propTypes: {
        column: ReactPropTypes.object.isRequired,
        index: ReactPropTypes.number.isRequired
    },

    getInitialState: function () {
        return {};
    },

    render: function () {
        var index = this.props.index,
            column = this.props.column;

        return (
            <li index={index} onClick={this._onClick}>
                <a>{column.label}</a>
            </li>
        );
    },

    _onClick: function() {
        GridActions.sortByColumn(this.props.index); 
    }

});

module.exports = GridHeader;