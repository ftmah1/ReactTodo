var React = require('react');

var AddTodo = React.createClass({
  onSubmit: function(e){
    e.preventDefault();
    var todo = this.refs.Todo.value;
    if(todo.length>0){
      this.refs.Todo.value = '';
      this.props.onAddTodo(todo);
    }else{
      this.refs.Todo.focus();
    }
  },
  render: function(){
    return(
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="Add-Todo-Form">
          <input type="text" ref="Todo" placeholder="Enter what you want to do?"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
