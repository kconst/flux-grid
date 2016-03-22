var React = require('react');
var ReactPropTypes = React.PropTypes;
var GridActions = require('../actions/GridActions');
// var classNames = require('classnames');

var GridRow = React.createClass({
    propTypes: {
        row: ReactPropTypes.object.isRequired,
        index: ReactPropTypes.number.isRequired
    }, 

    render: function () {
        var index = this.props.index,
            row = this.props.row;

        return (
            <li data-index={index}>
                <div className="close" onClick={this._remove}><a>x</a></div>
                <div>{row.text}</div>
                <div>{row.value}</div>
                <div className="date">{row.date.toDateString()}</div>
            </li>
        );
    },

    _remove: function() {
        GridActions.destroy(this.props.index);
    }
});

module.exports = GridRow;