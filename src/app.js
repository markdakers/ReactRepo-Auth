import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp(
            {
                apiKey: 'AIzaSyA0nAknGqN89gzQDMr13EmeC5ljAc-MjlM',
                authDomain: 'authentication-37a7d.firebaseapp.com',
                databaseURL: 'https://authentication-37a7d.firebaseio.com',
                projectId: 'authentication-37a7d',
                storageBucket: 'authentication-37a7d.appspot.com',
                messagingSenderId: '461830480724',
            });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;
