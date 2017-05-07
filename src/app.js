import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null }

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

        // Handles both sign in and sign out (if not logged in the user will be undefined)
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
        case false:
            return <LoginForm />;
        case true:
            return (
                <CardSection>
                    <Button onPress={() => firebase.auth().signOut()}>
                        Log Out
                    </Button>
                </CardSection>
            );
        default:
            return <Spinner size="large" />;
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
