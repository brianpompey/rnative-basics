import React, { Component } from "react";
import { StyleSheet, Text, View } from 'react-native';
import Button from "./button";


const styles = StyleSheet.create({
    counterText: {
      fontSize: 30
    }
});


class Count extends Component {
    constructor () {
        super();
        this.state = {
            count: 0
        };
        this.upCount = this.upCount.bind(this);
        this.downCount = this.downCount.bind(this);
        this.resetCount = this.resetCount.bind(this);
    }

    upCount = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    downCount = () => {
        this.setState({
            count: this.state.count - 1
        });
    };

    resetCount = () => {
        this.setState({
            count: 0
        });
    };


    render() {
        return(
            <View>
                <Text style={styles.counterText}>
                    {this.state.count}
                </Text>
                <Button buttonName="Up" methodName={this.upCount}/>
                <Button buttonName="Down"/>
                <Button buttonName="Reset"/>
            </View>
        )
    }
};



export default Count;

