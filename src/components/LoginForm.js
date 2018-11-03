import React, { Component } from "react";
import { Text } from "react-native";
import { Button, Card, CardItem, Input, Spinner } from "./common"
/* import firebase from "firebase" */

class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false };

    onButtonPress() {
        this.setState({ error: "", loading: true })
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this))
            });
    }

    onLoginFail() {
        this.setState({ error: "The information entered is invalid", loading: false })
    }

    onLoginSuccess() {
        this.setState({
            email: "",
            password: "",
            loading: false,
            error: ""
        })
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size="small" />
        }
        return (
            <Button handlePress={this.onButtonPress.bind(this)}>Log In</Button>
        )
    }

    render() {
        return (
            <Card>

                <CardItem>
                    <Input
                        placeholder="email@gmail.com"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                        label="Email"
                        autoCorrect={false}
                    />
                </CardItem>

                <CardItem>
                    <Input
                        placeholder="password"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                        label="Password"
                        autoCorrect={false}
                        secureTextEntry
                    />
                </CardItem>

                <Text style={styles.errorStyle}>
                    {this.state.error}
                </Text>

                < CardItem >
                    {this.renderButton()}
                </CardItem>

            </Card>
        )
    }
}

const styles = {
    errorStyle: {
        fontSize: 20,
        alignSelf: "center",
        color: "red"
    }
}

export default LoginForm;