var React = require('react');
var ReactPropTypes = React.PropTypes;
var GridActions = require('../actions/GridActions');

// var classNames = require('classnames');

var GridHeader = React.createClass({
    propTypes: {
        column: ReactPropTypes.object.isRequired,
        index: ReactPropTypes.number.isRequired
    },

    render: function () {
        var index = this.props.index,
            column = this.props.column;

        return (
            <li index={index} onClick={this._sort}>
                <a>{column.label}</a>
            </li>
        );
    },

    _sort: function() {
        GridActions.sortByColumn(this.props.index);
    }
});

module.exports = GridHeader;