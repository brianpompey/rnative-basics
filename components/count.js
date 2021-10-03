import React, { Component } from "react";
import { StyleSheet, Text } from 'react-native';


class Count extends Component {
    constructor () {
        super();
        this.state = {
            count: 0
        }
    }

    render() {
        return(
            <Text style={styles.counterText}>

            </Text>
        )
    }
}

const styles = StyleSheet.create({
    counterText: {
      fontSize: 30
    }
});

export default Count;