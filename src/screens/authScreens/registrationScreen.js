import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Button, Text } from "native-base";
import { WHITE, GREY, NAVY_BLUE } from "../../theme/colors";
import CustomTextInput from "../../component/CustomComponents/TextInput/CuustomTextInput";
import CustomButton from "../../component/CustomComponents/Button/CustomerButton";
import { SMALL } from "../../font/font";

class RegistrationScreen extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    isFirstNameValid: true,
    isLastNameValid: true,
    isEmailValid: true,
    isPasswordValid: true
  };

  firstNameValidation = text => {
    if (text === "") {
      this.setState({ isFirstNameValid: false, firstName: text });
    } else {
      this.setState({ isFirstNameValid: true, firstName: text });
    }
  };
  lastNameValidation = text => {
    if (text === "") {
      this.setState({ isLastNameValid: false, lastName: text });
    } else {
      this.setState({ isLastNameValid: true, lastName: text });
    }
  };
  emailValidation = text => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      this.setState({ isEmailValid: false });
      this.setState({ email: text });
    } else {
      this.setState({ isEmailValid: true });
      this.setState({ email: text });
    }
  };
  passwordValidation = text => {
    if (text.length < 5) {
      this.setState({ isPasswordValid: false });
      this.setState({ password: text });
    } else {
      this.setState({ isPasswordValid: true });
      this.setState({ password: text });
    }
  };

  render() {
    return (
      <View style={styles.Container}>
        <View style={{ height: 15 }}></View>
        <View style={{ height: 50 }}>
          <CustomTextInput
            placeholder="First Name"
            onChangeText={text => this.firstNameValidation(text)}
          />
          {this.state.isFirstNameValid ? (
            <Text />
          ) : (
            <Text style={{ marginLeft: 15, color: "red" }}>
              First Name is required
            </Text>
          )}
        </View>

        <View style={{ height: 25 }}></View>
        <View style={{ height: 50 }}>
          <CustomTextInput
            placeholder="Last Name"
            onChangeText={text => this.lastNameValidation(text)}
          />
          {this.state.isLastNameValid ? (
            <Text />
          ) : (
            <Text style={{ marginLeft: 15, color: "red" }}>
              Last Name is required
            </Text>
          )}
        </View>

        <View style={{ height: 25 }}></View>
        <View style={{ height: 50 }}>
          <CustomTextInput
            keyboardType="email-address"
            placeholder="Email"
            onChangeText={text => this.emailValidation(text)}
          />
          {this.state.isEmailValid ? (
            <Text />
          ) : (
            <Text style={{ marginLeft: 15, color: "red", marginTop: 4 }}>
              Email is not valid
            </Text>
          )}
        </View>

        <View style={{ height: 25 }}></View>
        <View style={{ height: 50 }}>
          <CustomTextInput
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={text => this.passwordValidation(text)}
          />
          {this.state.isPasswordValid ? (
            <Text />
          ) : (
            <Text style={{ marginLeft: 15, color: "red", marginTop: 4 }}>
              Password must be atleast 4 char long
            </Text>
          )}
        </View>

        <View style={{ height: 30 }}></View>
        <CustomButton
          color={WHITE}
          backgroundColor={"#3ACDE1"}
          Text={"Register"}
          onPress={() => {
            if (
              this.state.firstName != "" &&
              this.state.lastName != "" &&
              this.state.email != "" &&
              this.state.password != "" &&
              this.state.isFirstNameValid === true &&
              this.state.isLastNameValid === true &&
              this.state.isEmailValid === true &&
              this.state.isPasswordValid === true
            ) {
            } else {
              Alert.alert("fields are missing/incorrect");
            }
          }}
        />
      </View>
    );
  }
}

export default RegistrationScreen;

styles = StyleSheet.create({
  Container: {
    backgroundColor: "#F7F7F9",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  }
});
