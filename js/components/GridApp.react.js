/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

/**
 * This component operates as a "Controller-View".  It listens for changes in
 * the TodoStore and passes the new data to its children.
 */

/*var Footer = require('./Footer.react');
var Header = require('./Header.react');*/
var Viewport = require('./Viewport.react');
var React = require('react');
var DataStore = require('../stores/DataStore');

/**
 * Retrieve the current TODO data from the TodoStore
 */
function getConfig() {
	return {
		data: DataStore.getAll(),
		columns: DataStore.getColumns()
	};
}

var GridApp = React.createClass({

	getInitialState: function() {
		return getConfig();
	},

	componentDidMount: function() {
		DataStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function() {
		DataStore.removeChangeListener(this._onChange);
	},

	/**
	 * @return {object}
	 */
	render: function() {
		return (
			<div>
				<Viewport
					data={this.state.data}
				        columns={this.state.columns}
				/>
			</div>
		);
	},

	/**
	 * Event handler for 'change' events coming from the TodoStore
	 */
	_onChange: function() {
		debugger
		this.setData(getData());
	}

});

module.exports = GridApp;