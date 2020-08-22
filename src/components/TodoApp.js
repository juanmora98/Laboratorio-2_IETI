import React from 'react';
import {TodoList} from './TodoList';

export class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '' , priority: "", dueDate: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handlePriority = this.handlePriority.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      return (
        <div>

            <h3>Tareas</h3>

            <form onSubmit={this.handleSubmit}>

            <label htmlFor="new-todo">
              Bienvenido, que tarea se debe realizar?
            </label>

            <input
              id="todo nuevo"
              onChange={this.handleChange}
              value={this.state.text}
            />

            <br/>

            <label htmlFor="priority-todo">
              Cual es la prioridad de la actividad?
            </label>
            
            <input
                id="prioridad del todo"
                onChange={this.handlePriority}
                value={this.state.priority}
            />

            <br/>

            <button>
                Send #{this.state.items.length + 1}
            </button>

            </form>

            <TodoList items={this.state.items} />

        </div>
      );
    }
  
    handleChange(e) {
      this.setState({ text: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (!this.state.text.length) {
        return;
      }
      const newItem = {
        text: this.state.text,
        priority: this.state.priority,
        dueDate: new Date(),
        id: Date.now()
      };
      this.setState(prevState => ({
        items: prevState.items.concat(newItem),
        text: ''
      }));
    }

    handlePriority(e){ 

        this.setState({
            priority: e.target.value 
        });

    }

  }