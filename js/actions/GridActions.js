/*
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * TodoActions
 */

var ViewDispatcher = require('../dispatcher/ViewDispatcher');
var GridConstants = require('../constants/GridConstants');

var TodoActions = {

	/**
	 * @param  {string} text
	 */
	create: function(text) {
		ViewDispatcher.dispatch({
			actionType: GridConstants.TODO_CREATE,
			text: text
		});
	},

	/**
	 * @param  {string} id The ID of the ToDo item
	 * @param  {string} text
	 */
	sortByColumn: function(id) {
		ViewDispatcher.dispatch({
			actionType: GridConstants.SORT_COLUMN, 
			id: id
		});
	},

	/**
	 * Toggle whether a single ToDo is complete
	 * @param  {object} todo
	 */
	toggleComplete: function(todo) {
		var id = todo.id;
		var actionType = todo.complete ?
			GridConstants.TODO_UNDO_COMPLETE :
			GridConstants.TODO_COMPLETE;

		ViewDispatcher.dispatch({
			actionType: actionType,
			id: id
		});
	},

	/**
	 * Mark all ToDos as complete
	 */
	toggleCompleteAll: function() {
		ViewDispatcher.dispatch({ 
			actionType: GridConstants.TODO_TOGGLE_COMPLETE_ALL
		});
	},

	/**
	 * @param  {string} id
	 */
	destroy: function(id) {
		ViewDispatcher.dispatch({
			actionType: GridConstants.TODO_DESTROY,
			id: id
		});
	},

	/**
	 * Delete all the completed ToDos
	 */
	destroyCompleted: function() {
		ViewDispatcher.dispatch({
			actionType: GridConstants.TODO_DESTROY_COMPLETED
		});
	}

};

module.exports = TodoActions;