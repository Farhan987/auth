import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Button, Text } from "native-base";
import { WHITE, GREY, NAVY_BLUE } from "../../theme/colors";
import CustomTextInput from "../../component/CustomComponents/TextInput/CuustomTextInput";
import CustomButton from "../../component/CustomComponents/Button/CustomerButton";
import { SMALL } from "../../font/font";

class LoginScreen extends Component {
  state = {
    email: "",
    Password: "",
    isEmailValid: true,
    isPasswordValid: true
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
      this.setState({ Password: text });
    } else {
      this.setState({ isPasswordValid: true });
      this.setState({ Password: text });
    }
  };

  render() {
    return (
      <View style={styles.Container}>
        <View style={{ height: 15 }}></View>
        <View style={{ height: 50 }}>
          <CustomTextInput
            keyboardType="email-address"
            placeholder="Email"
            onChangeText={text => this.emailValidation(text)}
          />
          {this.state.isEmailValid ? (
            <Text />
          ) : (
            <Text style={{ marginLeft: 15, color: "red" }}>
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
            <Text style={{ marginLeft: 15, color: "red" }}>
              Password must be atleast 5 char long
            </Text>
          )}
        </View>

        <View style={{ height: 20 }}></View>
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 30
          }}
          onPress={() =>
            this.props.navigation.navigate("PasswordRecoveryScreen")
          }
        >
          <Text
            style={{ fontSize: SMALL, alignSelf: "center", color: "#979797" }}
          >
            Forget Password
          </Text>
        </TouchableOpacity>

        <View style={{ height: 20 }}></View>
        <CustomButton
          color={WHITE}
          backgroundColor={"#3ACDE1"}
          Text={"Continue"}
          onPress={() => {
            if (
              this.state.email != "" &&
              this.state.Password != "" &&
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

export default LoginScreen;

styles = StyleSheet.create({
  Container: {
    backgroundColor: "#F7F7F9",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  }
});
