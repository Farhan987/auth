import React, { Component } from "react";
import { Text, View } from "react-native";
import { Header, Button, Left, Right, Body, Icon } from "native-base";
import { BLACK, WHITE } from "../../theme/colors";
import { LARGE } from "../../font/font";

export default class CustomHeader extends Component {
  render() {
    return (
      <View>
        <Header style={{ backgroundColor: WHITE }}>
          <Left style={{ flex: 1 }}>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon
                name="arrow-left"
                type="FontAwesome"
                style={{ color: BLACK }}
              />
            </Button>
          </Left>
          <Body style={{ flex: 4 }} />
          <Right style={{ flex: 1 }} />
        </Header>
      </View>
    );
  }
}
