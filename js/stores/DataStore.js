var ViewDispatcher = require('../dispatcher/ViewDispatcher');
var EventEmitter = require('events').EventEmitter;
var GridConstants = require('../constants/GridConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _columns = [];

var _data = [];

// bootstrap store
init({
    columns : [
        {
            label : 'text',
            sort : 0
        },
        {
            label : 'value',
            sort : 0
        },
        {
            label : 'date',
            sort : 0
        }
    ],
    data : [
        {
            text: 'Data Point 1',
            value: 100,
            date: new Date('3/14/16')
        },
        {
            text: 'Data Point 2',
            value: 300,
            date: new Date('3/15/16')
        },
        {
            text: 'Data Point 3',
            value: 410,
            date: new Date('3/13/16')
        },
        {
            text: 'Data Point 4',
            value: 820,
            date: new Date('3/11/16')
        },
        {
            text: 'Data Point 5',
            value: 750,
            date: new Date('3/14/16')
        },
        {
            text: 'Data Point 6',
            value: 190,
            date: new Date('3/15/16')
        },
        {
            text: 'Data Point 7',
            value: 660,
            date: new Date('3/14/16')
        },
        {
            text: 'Data Point 8',
            value: 910,
            date: new Date('3/12/16')
        },
        {
            text: 'Data Point 6',
            value: 460,
            date: new Date('3/13/16')
        },
        {
            text: 'Data Point 7',
            value: 180,
            date: new Date('3/11/16')
        },
        {
            text: 'Data Point 8',
            value: 200,
            date: new Date('3/15/16')
        },
        {
            text: 'Data Point 9',
            value: 350,
            date: new Date('3/15/16')
        },
        {
            text: 'Data Point 10',
            value: 350,
            date: new Date('3/15/16')
        }
    ]
});

var DataStore = assign({}, EventEmitter.prototype, {
    getData: function () {
        return _data;
    },

    getColumns: function () {
        return _columns;
    },

    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

// Register callback to handle all updates
ViewDispatcher.register(function (action) {
    var text;
    switch (action.actionType) {
        case GridConstants.GRID_RENDER:
            text = action.text.trim();
            if (text !== '') {
                init(data);
                DataStore.emitChange();
            }
            break;

        case GridConstants.GRID_DATA_REMOVED:
            remove(action.id);
            DataStore.emitChange();
            break;

        case GridConstants.SORT_COLUMN:
             sortByColumn(action.id);
             DataStore.emitChange();
            break;

        default:
        // no op
    }
});

function init(args) {
    setData(args);
}

function setData(args) {
    _data = args.data;
    _columns = args.columns;
}

function remove(id) {
    _data.some(function (e, i, arr) {
        if (e.id === id) {
            arr.splice(id, 1);

            return true;
        }
    });
}

function sortByColumn(id) {
    var value = _columns[id].label,
        sortDirection = _columns[id].sort;

    if (!sortDirection) {
        _data = _data.sort(function(a, b){
            if (a[value] > b[value]) {
                return -1;
            }

            if (a[value] < b[value]) {
                return 1;
            }

            return 0;
        });
    } else {
        _data = _data.sort(function(a, b){
            if (a[value] > b[value]) {
                return 1;
            }

            if (a[value] < b[value]) {
                return -1;
            }

            return 0;
        });
    }

    _columns[id].sort = (_columns[id].sort += 1) % 2;
}
/*
function update(args) {
    _data.some(function (e, i, arr) {
        if (e.id === args.id) {
            arr[i] = args;

            return true;
        }
    });
}*/

module.exports = DataStore;