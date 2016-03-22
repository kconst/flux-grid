var ViewDispatcher = require('../dispatcher/ViewDispatcher');
var GridConstants = require('../constants/GridConstants');

var GridActions = {
	sortByColumn: function(id) {
		ViewDispatcher.dispatch({
			actionType: GridConstants.SORT_COLUMN, 
			id: id
		});
	},

	destroy: function(id) {
		ViewDispatcher.dispatch({
			actionType: GridConstants.GRID_DATA_REMOVED,
			id: id
		});
	}

};

module.exports = GridActions;