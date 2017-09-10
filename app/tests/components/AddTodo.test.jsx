var expect = require('expect');
var ReactDOM = require('react-dom');
var React = require('react');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');

var AddTodo = require('AddTodo');

describe('AddTodo',()=>{
  it('should exist',()=>{
    expect(AddTodo).toExist();
  });

  describe('Handle AddTodo',()=>{
    it('SHould call onAddTodo if valid text entered',()=>{
      var spy = expect.createSpy();
      var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
      var $el = $(ReactDOM.findDOMNode(addTodo));

      addTodo.refs.Todo.value = 'Jia xin lai';
      TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith('Jia xin lai');
    });

    it('SHould not call onAddTodo if invalid text entered',()=>{
      var spy = expect.createSpy();
      var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
      var $el = $(ReactDOM.findDOMNode(addTodo));

      addTodo.refs.Todo.value = '';
      TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });

  });

});
