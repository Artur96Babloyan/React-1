import React from 'react';


import logo from './logo.svg';
import './App.css';
import Button from "./component/Button";

class App extends React.Component {
    state = {
        name: "Disable",
        userName: '',
        userName2: '',
        userNamel: 0,
        userNamel2: 0
    };
    gg = () => {
        const { userNamel } = this.state;
        this.setState((p) => { return { userNamel: p.userName.length } })

        if ((this.state.userNamel >= 2) && (this.state.userNamel2 >= 2)) {
            this.setState({ name: 'Enable' })
        }
        else {
            this.setState({ name: 'Disable' })
        }
    }

    ggc = () => {
        const { userNamel2 } = this.state;
        this.setState((p) => { return { userNamel2: p.userName2.length } })

        if ((this.state.userNamel >= 2) && (this.state.userNamel2 >= 2)) {
            this.setState({ name: 'Enable' })
        }
        else {
            this.setState({ name: 'Disable' })
        }
    }

    submit = (event) => {
        const { name, userName, userName2 } = this.state;
        this.setState({
            userName: event.target.value,
        })
        this.gg()


    }

    submit1 = (event) => {
        const { name, userName, userName2 } = this.state;
        this.setState({

            userName2: event.target.value
        })
        this.ggc()
    }

    render() {
        return (
            <div>
                <input type='text' value={this.state.userName} onChange={this.submit}></input>
                <input type='password' value={this.state.userName2} onChange={this.submit1}></input>
                <button>{this.state.name}</button>
            </div>
        );
    }
}

export default App;
