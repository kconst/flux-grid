/**
 * This component operates as a "Controller-View".  It listens for changes in
 * the DataStore and passes the new data to its children.
 */

var Viewport = require('./Viewport.react');
var React = require('react');
var DataStore = require('../stores/DataStore');

var GridApp = React.createClass({
    getInitialState: function () {
        return getConfig();
    },

    componentDidMount: function () {
        DataStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
        DataStore.removeChangeListener(this._onChange);
    },

    render: function () {
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
     * Event handler for 'change' events coming from the DataStore
     */
    _onChange: function () {
        this.setState(getConfig());
    }
});

function getConfig() {
    return {
        data: DataStore.getData(),
        columns: DataStore.getColumns()
    };
}

module.exports = GridApp;