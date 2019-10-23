import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Textarea, Input, Item, Icon } from "native-base";
import { CUSTOM_FEILD_COLOR } from "../../theme/colors";
import { LARGE } from "../../font/font";

export default class CustomTextarea extends Component {
  render() {
    return (
      <View>
        <Item
          regular
          style={{
            width: "97%",
            borderColor: CUSTOM_FEILD_COLOR,
            borderWidth: 2,
            borderRadius: 5,
            justifyContent: "flex-start",
            alignItems: "flex-start",
            alignSelf: "center",
            marginTop: 10
          }}
        >
          <Icon
            name="file-text"
            type="FontAwesome"
            style={{ fontSize: LARGE, marginTop: 10 }}
          />

          <Textarea
            rowSpan={5}
            placeholder="Description"
            style={{ width: "97%", borderRadius: 5 }}
          />
        </Item>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
