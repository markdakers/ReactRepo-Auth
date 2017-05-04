import React, { Component } from "react";
import { TextInput, Platform } from 'react-native';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    state = { email: "" };

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        label="Email" 
                        placeholder = "user@gmail.com"
                        value={this.state.email} // Doesn't seem like this is required despite rerender happening on setState
                        onChangeText={text => this.setState({ email: text })}
                    />
                </CardSection>
                <CardSection />
                <CardSection>
                    <Button>Log in</Button>
                </CardSection>
            </Card>
        );
    }
}


export default LoginForm;
