var React = require('react');
var ReactPropTypes = React.PropTypes;
// var GridActions = require('../actions/GridActions');
var GridRow = require('./GridRow.react');
var GridHeader = require('./GridHeader.react');

var Viewport = React.createClass({
    propTypes: {
        data: ReactPropTypes.array.isRequired,
        columns: ReactPropTypes.array.isRequired
    },

    render: function () {
        var data = this.props.data,
            columns = this.props.columns,
            headers = [],
            rows = [];
 
        data.forEach(function(e, i) {
            rows.push(<GridRow index={i} row={e} key={i}/>);
        });

        columns.forEach(function(e, i){
            headers.push(<GridHeader index={i} column={e} key={i}/>);
        });

        return (
            <section id="grid">
                <ul className="grid-headers">
                    {headers}
                </ul>
                <ul className="grid-rows">
                    {rows}
                </ul>

            </section>
        );
    }
});

module.exports = Viewport;