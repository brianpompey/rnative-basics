import React, { Component } from "react";
import { StyleSheet, Text, View } from 'react-native';
import Button from "./button";


class Count extends Component {
    constructor () {
        super();
        this.state = {
            count: 0
        }
    }

    render() {
        return(
            <View>
                <Text style={styles.counterText}>
                    {this.state.count}
                </Text>
                <Button buttonName="Up"/>
                <Button buttonName="Down"/>
                <Button buttonName="Reset"/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    counterText: {
      fontSize: 30
    }
});

export default Count;