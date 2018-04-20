import React, { Component } from "react";
import { Text } from "react-native";
import Container from "../components/Container";

export default class FirstScreen extends Component {

    handlePress = () => {
        this.props.navigator.push({
            screen: 'SecondScreen',
            title: 'Detail Screen',
        });
    };

    render() {
        return(
            <Container onPress={this.handlePress}>
                <Text>
                    Go to detail screen
                </Text>
            </Container>
        );
    }
}