/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var React = require('react');
var ReactPropTypes = React.PropTypes;
var GridActions = require('../actions/GridActions');
var GridRow = require('./GridRow.react');
var GridHeader = require('./GridHeader.react');

var Viewport = React.createClass({
    propTypes: {
        data: ReactPropTypes.array.isRequired,
        columns: ReactPropTypes.array.isRequired
    },

    /**
     * @return {object}
     */
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
    },

    /**
     * Event handler to mark all TODOs as complete
     */
    _onToggleCompleteAll: function () {
        // GridActions.toggleCompleteAll();
    }

});

module.exports = Viewport;