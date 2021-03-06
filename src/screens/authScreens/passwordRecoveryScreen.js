import React, { Component } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Text } from "native-base";
import { WHITE } from "../../theme/colors";
import CustomTextInput from "../../component/CustomComponents/TextInput/CuustomTextInput";
import CustomButton from "../../component/CustomComponents/Button/CustomerButton";
import { LARGE } from "../../font/font";
import CustomHeader from "../../component/CustomComponents/Header/CustomHeader";

class PasswordRecoveryScreen extends Component {
  state = {
    email: "",
    isEmailValid: true
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
  render() {
    return (
      <React.Fragment>
        <CustomHeader navigation={this.props.navigation} />
        <View style={styles.Container}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 40
            }}
          >
            <Text style={{ fontSize: LARGE, alignSelf: "center" }}>
              Password Recovery
            </Text>
          </View>
          <View style={{ height: 15 }} />
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
          <CustomButton
            color={WHITE}
            backgroundColor={"#3ACDE1"}
            Text={"Send Request"}
            onPress={() => {
              if (this.state.email != "" && this.state.isEmailValid === true) {
                this.props.navigation.navigate("ChangePasswordScreen");
              } else {
                Alert.alert("email is missing/incorrect");
              }
            }}
          />
        </View>
      </React.Fragment>
    );
  }
}

export default PasswordRecoveryScreen;

styles = StyleSheet.create({
  Container: {
    backgroundColor: "#F7F7F9",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  }
});
