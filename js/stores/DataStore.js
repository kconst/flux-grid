/*
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * TodoStore
 */

var ViewDispatcher = require('../dispatcher/ViewDispatcher');
var EventEmitter = require('events').EventEmitter;
var GridConstants = require('../constants/GridConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _columns = [
	'label',
	'value'
];

var _data = [
	{
		text : 'testing1'
	},
	{
		text : 'testing2'
	},
	{
		text : 'testing3'
	},
	{
		text : 'testing4'
	},
	{
		text : 'testing5'
	},
	{
		text : 'testing6'
	},
	{
		text : 'testing7'
	},
	{
		text : 'testing8'
	},
	{
		text : 'testing6'
	},
	{
		text : 'testing7'
	},
	{
		text : 'testing8'
	},
	{
		text : 'testing9'
	}
];

// bootstrap store
init(_data);

function init(data) {
	setData(data);
}

function setData(data) {
	data.forEach(function(e, i){
		e.key = i;
	});
	debugger;
	_data = data;
}

function refresh() {
	_data = _data.sort();
}

function remove(id) {
	// delete data[id];
	_data.some(function(e, i, arr){
		if (e.id === id) {
			arr[i] = args;

			return true;
		}
	});
}

function update(args) {
	_data.some(function(e, i, arr){
		if (e.id === args.id) {
			arr[i] = args;

			return true;
		}
	});
}

/**
 * Create a TODO item.
 * @param  {string} text The content of the TODO
 */
/*function create(text) {
	// Hand waving here -- not showing how this interacts with XHR or persistent
	// server-side storage.
	// Using the current timestamp + random number in place of a real id.
	var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
	_data[id] = {
		id: id,
		complete: false,
		text: text
	};
}
assign
/!**
 * Update a TODO item.
 * @param  {string} id
 * @param {object} updates An object literal containing only the data to be
 *     updated.
 *!/
function update(id, updates) {
	_data[id] = assign({}, _data[id], updates);
}

/!**
 * Update all of the TODO items with the same object.
 * @param  {object} updates An object literal containing only the data to be
 *     updated.
 *!/
function updateAll(updates) {
	for (var id in _data) {
		update(id, updates);
	}
}

/!**
 * Delete a TODO item.
 * @param  {string} id
 *!/
function destroy(id) {
	delete _data[id];
}

/!**
 * Delete all the completed TODO items.
 *!/
function destroyCompleted() {
	for (var id in _data) {
		if (_data[id].complete) {
			destroy(id);
		}
	}
}*/

var DataStore = assign({}, EventEmitter.prototype, {

	/**
	 * Tests whether all the remaining TODO items are marked as completed.
	 * @return {boolean}
	 */
	/*areAllComplete: function() {
		for (var id in _data) {
			if (!_data[id].complete) {
				return false;
			}
		}
		return true;
	},*/

	/**
	 * Get the entire collection of TODOs.
	 * @return {object}
	 */
	getAll: function() {
		return _data;
	},

	getColumns: function() {
		return _columns;
	},

	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	/**
	 * @param {function} callback
	 */
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	/**
	 * @param {function} callback
	 */
	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}
});

// Register callback to handle all updates
ViewDispatcher.register(function(action) {
	var text;
debugger
	switch(action.actionType) {
		case TodoConstants.GRID_RENDER:
			text = action.text.trim();
			if (text !== '') {
				init(data);
				DataStore.emitChange();
			}
			break;

		case TodoConstants.GRID_DATA_UPDATED:
			text = action.text.trim();
			if (text !== '') {
				update(action);
				DataStore.emitChange();
			}
			break;

		case TodoConstants.GRID_DATA_REMOVED:
			text = action.text.trim();
			if (text !== '') {
				remove(action.id);
				DataStore.emitChange();
			}
			break;

		case TodoConstants.GRID_UPDATE:
			text = action.text.trim();
			if (text !== '') {
				refresh();
				DataStore.emitChange();
			}
			break;

		case TodoConstants.GRID_SCROLL:
			/*text = action.text.trim();
			if (text !== '') {
				create(text);
				DataStore.emitChange();
			}*/
			break;/*

		case TodoConstants.TODO_TOGGLE_COMPLETE_ALL:
			if (TodoStore.areAllComplete()) {
				updateAll({complete: false});
				updateAll({complete: true});
	 }
	 } else {
	 TodoStore.emitChange();
			break;

		case TodoConstants.TODO_UNDO_COMPLETE:
			update(action.id, {complete: false});
			TodoStore.emitChange();
			break;

		case TodoConstants.TODO_COMPLETE:
			update(action.id, {complete: true});
			TodoStore.emitChange();
			break;

		case TodoConstants.TODO_UPDATE_TEXT:
			text = action.text.trim();
			if (text !== '') {
				update(action.id, {text: text});
				TodoStore.emitChange();
			}
			break;

		case TodoConstants.TODO_DESTROY:
			destroy(action.id);
			TodoStore.emitChange();
			break;

		case TodoConstants.TODO_DESTROY_COMPLETED:
			destroyCompleted();
			TodoStore.emitChange();
			break;*/

		default:
		// no op
	}
});

module.exports = DataStore;