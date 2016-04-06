var React = require('react');
var Viewport = require('./Viewport.react');

var TestUtils = React.addons.TestUtils;

describe(function () {
    var component;

    beforeEach(function(){
      component = TestUtils.renderIntoDocument(<Viewport data={this.state.data} columns={this.state.columns}/>);
    });

    if('should have rows', function(){
        debugger
        expect(component.getDOMNode().textContent)
    });
});
