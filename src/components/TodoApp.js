import React from 'react';
import {TodoList} from './TodoList';
import moment from "moment";
import MomentUtils from '@date-io/moment';
import TextField from '@material-ui/core/TextField';
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';
import Grid from '@material-ui/core/Grid';

export class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '' , priority: "", dueDate: '', dueDate: moment()};
      this.handleChange = this.handleChange.bind(this);
      this.handlePriority = this.handlePriority.bind(this);
      this.handleDateChange = this.handleDateChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      return (
        <div>

            <h3>Tareas</h3>

            <form onSubmit={this.handleSubmit}>

            <TextField
              id="Text"
              label="Bienvenido, que tarea se debe realizar?"
              onChange={this.handleTextChange}
              value={this.state.text}
              margin="normal"
              variant="outlined"
            />

            <br/>
            
            <TextField
              id="Priority"
              label="Cual es la prioridad de la actividad?"
              onChange={this.handlePriorityChange}
              value={this.state.priority}
              margin="normal"
              variant="outlined"
            />

            <br/>

            <MuiPickersUtilsProvider utils={MomentUtils}>
              <Grid container justify="space-around">
                  <KeyboardDatePicker
                      
                      variant="inline"
                      format="DD/MM/YYYY"
                      margin="normal"
                      id="date-picker-inline"
                      label="Date picker inline"
                      value={this.state.dueDate}
                      onChange={this.handleDateChange}
                      KeyboardButtonProps={{
                          'aria-label': 'change date',
                      }}
                  />
              </Grid>
            </MuiPickersUtilsProvider>

            <button>
              Add #{this.state.items.length + 1}
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
      if (!this.state.text.length || !this.state.priority.length || !this.state.dueDate){
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

    handleDateChange(date) {
      this.setState({
          dueDate: date
      });
  }

  }