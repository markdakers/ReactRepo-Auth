import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input } from './common';


const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
    },
};


class LoginForm extends Component {

    constructor() {
        super();
        this.state = { email: '', password: '', error: '' };
        // Using arrow functions or binding in JSX is a bad practice that hurts performance
        // because each render will create a new function, which means that the garbage collector
        // will have more work than needed.
        this.onButtonPress = this.onButtonPress.bind(this);
    }

    // state = { email: '', password: '', error: '' };

    onButtonPress() {
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(() => {
                this.setState({ error: 'Creating User' });
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .catch((err) => {
                        this.setState({ error: `Authentication Failed - ${err}` });
                    });
            });
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="user@gmail.com"
                        value={this.state.email} // Doesn't seem like this is required despite rerender happening on setState
                        onChangeText={text => this.setState({ email: text })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry={true}
                        label="Password"
                        placeholder="password"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    <Button onPress={this.onButtonPress}>Log in</Button>
                </CardSection>
            </Card>
        );
    }
}


export default LoginForm;
