var AppDispatcher  = require('../dispatcher/AppDispatcher');
var GridConstants = require('../constants/GridConstants');

var GridActions = {
	sortByColumn: function(id) {
		AppDispatcher .dispatch({
			actionType: GridConstants.SORT_COLUMN, 
			id: id
		});
	},

	destroy: function(id) {
		AppDispatcher .dispatch({
			actionType: GridConstants.GRID_DATA_REMOVED,
			id: id
		});
	}
};

module.exports = GridActions;