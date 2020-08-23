import React from 'react';

class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            password: ''
        };
    }

    updateUsername = e => {
        this.setState({ username: e.target.value });
    }

    updatePassword = e => {
        this.setState({ password: e.target.value });
    }

    updateEmail = e => {
        this.setState({ email: e.target.value });
    }

    registerUser = async (e) => {
        e.preventDefault();
        const { username, email, password } = this.state;

        try {
            const res = await fetch('/users', {
                method: 'POST',
                body: JSON.stringify({ username, email, password }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!res.ok) throw res;

            const { token, user: { id } } = await res.json();
            console.log(`token: ${token}`);
            console.log(`user: ${id}`);
        } catch (err) {
            console.error(err)
        }
    }

    render() {
        const { username, email, password } = this.state;
        return (
            <form onSubmit={this.registerUser}>
                <h2>Register</h2>
                <input
                    type='text'
                    value={username}
                    onChange={this.updateUsername}
                    name='username'
                    placeholder='Enter Username'
                />
                <input
                    type='email'
                    value={email}
                    onChange={this.updateEmail}
                    name='email'
                    placeholder='Enter Email'
                />
                <input
                    type='password'
                    value={password}
                    onChange={this.updatePassword}
                    name='password'
                    placeholder='Enter Password'
                />
                <button type='submit'>Sign Up</button>
            </form>
        );
    }
}

export default RegistrationForm;