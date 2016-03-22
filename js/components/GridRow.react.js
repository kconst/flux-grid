var React = require('react');
var ReactPropTypes = React.PropTypes;
/*var GridActions = require('../actions/GridActions');

var classNames = require('classnames');*/

var GridRow = React.createClass({

    propTypes: {
        row: ReactPropTypes.object.isRequired
    },

    getInitialState: function () {
        return {};
    },

    render: function () {
        var index = this.props.index,
            row = this.props.row;

        return (
            <li data-index={index}>
                <div>{row.text}</div>
                <div>{row.value}</div>
                <div className="date">{row.date.toDateString()}</div>
            </li>
        );
    }
});

module.exports = GridRow;