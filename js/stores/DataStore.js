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
    'text',
    'value',
    'date'
];

var _data = [
    {
        text: 'testing1',
        value: 100,
        date: new Date('3/14/16')
    },
    {
        text: 'testing2',
        value: 300,
        date: new Date('3/15/16')
    },
    {
        text: 'testing3',
        value: 410,
        date: new Date('3/13/16')
    },
    {
        text: 'testing4',
        value: 820,
        date: new Date('3/11/16')
    },
    {
        text: 'testing5',
        value: 750,
        date: new Date('3/14/16')
    },
    {
        text: 'testing6',
        value: 190,
        date: new Date('3/15/16')
    },
    {
        text: 'testing7',
        value: 660,
        date: new Date('3/14/16')
    },
    {
        text: 'testing8',
        value: 910,
        date: new Date('3/12/16')
    },
    {
        text: 'testing6',
        value: 460,
        date: new Date('3/13/16')
    },
    {
        text: 'testing7',
        value: 180,
        date: new Date('3/11/16')
    },
    {
        text: 'testing8',
        value: 200,
        date: new Date('3/15/16')
    },
    {
        text: 'testing9',
        value: 350,
        date: new Date('3/15/16')
    }
];

// bootstrap store
init(_data);

function init(data) {
    setData(data);
}

function setData(data) {
    _data = data;
}

function refresh() {
    _data = _data.sort();
}

function remove(id) {
    // delete data[id];
    _data.some(function (e, i, arr) {
        if (e.id === id) {
            arr[i] = args;

            return true;
        }
    });
}

function update(args) {
    _data.some(function (e, i, arr) {
        if (e.id === args.id) {
            arr[i] = args;

            return true;
        }
    });
}

var DataStore = assign({}, EventEmitter.prototype, {

    getAll: function () {
        return _data;
    },

    getColumns: function () {
        return _columns;
    },

    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    /**
     * @param {function} callback
     */
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    /**
     * @param {function} callback
     */
    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

// Register callback to handle all updates
ViewDispatcher.register(function (action) {
    var text;
    debugger
    switch (action.actionType) {
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
            break;

        default:
        // no op
    }
});

module.exports = DataStore;