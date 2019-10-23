import React, { Component } from "react";
import { Button, Text } from "native-base";
import { WHITE } from "../../../theme/colors";
import { MEDIUM } from "../../../font/font";

class CustomButton extends Component {
  state = {};
  render() {
    return (
      <Button
        onPress={this.props.onPress ? this.props.onPress : text => false}
        style={{
          width: "90%",
          backgroundColor: this.props.backgroundColor
            ? this.props.backgroundColor
            : WHITE,
          alignSelf: "center",
          justifyContent: "center",
          height: 50,
          borderRadius: 10
        }}
      >
        <Text
          style={{
            fontSize: MEDIUM,
            alignSelf: "center",
            color: this.props.color ? this.props.color : "#00000"
          }}
        >
          {this.props.Text ? this.props.Text : "Press"}
        </Text>
      </Button>
    );
  }
}

export default CustomButton;
