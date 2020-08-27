import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Login.css'


export class Login extends React.Component{

    constructor(props) {
        super(props);
        this.state = {mail: '' , password: ""};
        this.handleMail = this.handleMail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if(localStorage.getItem('User') && localStorage.getItem('Password')){
            this.setState({
                mail: localStorage.getItem('User'),
                password: localStorage.getItem('Password')
            });
        }
    }
    

    handleSubmit(e) {
        e.preventDefault();
        localStorage.setItem('User', this.state.mail);
        localStorage.setItem('Password', this.state.password);
        window.location.href = "/todo"
    }

    handleMail(e) {
        this.setState({
            mail: e.target.value
        });
    }

    handlePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    render(){
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <Avatar className="avatar">
                            <LockIcon />
                        </Avatar>
                        <Typography variant="h2">Sign in</Typography>
                        <form className="form">
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input id="email" name="email" autoComplete="email" value={this.state.mail} onChange={this.handleMail} autoFocus />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    value={this.state.password}
                                    onChange={this.handlePassword}
                                />
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"
                                onClick= {this.handleSubmit}
                            >
                                Sign in
                            </Button>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }


    



}