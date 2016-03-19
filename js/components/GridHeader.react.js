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

// var classNames = require('classnames');

var GridHeader = React.createClass({

    propTypes: {
        column: ReactPropTypes.object.isRequired,
        index: ReactPropTypes.number.isRequired
    },

    getInitialState: function () {
        return {};
    },

    /**
     * @return {object}
     */
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