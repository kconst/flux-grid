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

var classNames = require('classnames');

var GridRow = React.createClass({

    propTypes: {
        row: ReactPropTypes.object.isRequired
    },

    getInitialState: function () {
        return {
            isEditing: false
        };
    },

    /**
     * @return {object}
     */
    render: function () {
        var index = this.props.index,
            row = this.props.row;

        return (
            <li index="index">
                <div>{row.text}</div>
                <div>{row.value}</div>
                <div class="date">{row.date.toDateString()}</div>
            </li>
        );
        // List items should get the class 'editing' when editing
        // and 'completed' when marked as completed.
        // Note that 'completed' is a classification while 'complete' is a state.
        // This differentiation between classification and state becomes important
        // in the naming of view actions toggleComplete() vs. destroyCompleted().
        },

        _onToggleComplete: function() {
            // GridActions.toggleComplete(this.props.todo);
            debugger
        },

        _onDoubleClick: function() {
            this.setState({isEditing: true});
        },

        /**
         * Event handler called within TodoTextInput.
         * Defining this here allows TodoTextInput to be used in multiple places
         * in different ways.
         * @param  {string} text
         */
        _onSave: function(text) {
            // GridActions.updateText(this.props.todo.id, text);
            this.setState({isEditing: false});
        },

        _onDestroyClick: function() {
            // GridActions.destroy(this.props.todo.id);
            debugger;
        }

        });

        module.exports = GridRow;