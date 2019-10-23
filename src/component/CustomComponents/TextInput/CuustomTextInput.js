import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Item, Icon, Input, Button, Text } from "native-base";
import { CUSTOM_FEILD_COLOR, WHITE } from "../../../theme/colors";
import { MEDIUM, LARGE } from "../../../font/font";
class CustomTextInput extends Component {
  state = {};
  render() {
    return (
      <Item
        regular
        style={{
          width: "90%",
          alignSelf: "center",
          borderRadius: 10,
          height: this.props.Inputheight ? this.props.Inputheight : 50,
          backgroundColor: WHITE,
          borderColor: WHITE
        }}
      >
        <Input
          disabled={this.props.disabled ? this.props.disabled : false}
          secureTextEntry={
            this.props.secureTextEntry ? this.props.secureTextEntry : false
          }
          onChangeText={
            this.props.onChangeText ? this.props.onChangeText : text => false
          }
          keyboardType={
            this.props.keyboardType ? this.props.keyboardType : "default"
          }
          placeholder={
            this.props.placeholder ? this.props.placeholder : "Enter"
          }
          style={{ fontSize: MEDIUM }}
          placeholderTextColor="#979797"
        />
      </Item>
    );
  }
}

export default CustomTextInput;
