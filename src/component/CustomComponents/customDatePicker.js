import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Icon, DatePicker } from "native-base";
import { CUSTOM_FEILD_COLOR } from "../../theme/colors";
import { LARGE } from "../../font/font";

export default class CustomDatePicker extends Component {
  state = { chosenDate: new Date(), setDate: "" };

  setDate = newDate => {
    this.setState({ chosenDate: newDate });
  };

  render() {
    return (
      <View
        style={{
          height: 55,
          flexDirection: "row",
          marginTop: 10,
          width: "97%",
          justifyContent: "center",
          alignSelf: "center",
          borderRadius: 5,
          borderWidth: 1,
          borderColor: CUSTOM_FEILD_COLOR
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Icon
            name={this.props.iconName ? this.props.iconName : "?"}
            type="FontAwesome"
            style={{ fontSize: LARGE }}
          />
        </View>
        <View
          style={{
            flex: 3,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={{ alignSelf: "flex-start" }}>
            {this.props.title ? this.props.title : "Select Date"}
          </Text>
        </View>

        <View
          style={{ flex: 3, justifyContent: "center", alignItems: "center" }}
        >
          <DatePicker
            androidMode={"spinner"}
            defaultDate={new Date(1995, 1, 1)}
            minimumDate={new Date(1990, 1, 1)}
            maximumDate={new Date(2002, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"slide"}
            placeHolderTextStyle={{ color: "black" }}
            placeHolderText="Select"
            textStyle={{ color: "black" }}
            placeHolderTextStyle={{ color: "black" }}
            onDateChange={this.state.setDate}
            disabled={false}
            style={{ alignSelf: "flex-start" }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
