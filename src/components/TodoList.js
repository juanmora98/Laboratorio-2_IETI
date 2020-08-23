import React from 'react';
import {Todo} from './Todo';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './Todo.css';

export class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const todoList = this.props.items.map((todo, i) => {
            return (
                <Todo key={i} text={todo.text} priority={todo.priority} dueDate={todo.dueDate}/>
            );
        });

        return (
            <Paper className="root">
                <Table className="table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Tarea</TableCell>
                            <TableCell align="center">Prioridad</TableCell>
                            <TableCell align="center">Fecha</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {todoList}
                    </TableBody>
                </Table>
			</Paper>
        );


    }

}