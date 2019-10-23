import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";
import { WHITE } from "../../theme/colors";
class SplashScreen extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate("TabScreens");
    }, 3000);
  }

  render() {
    return (
      <React.Fragment>
        <View style={styles.Container}>
          <Image
            resizeMode="stretch"
            source={require("../../images/splash.jpg")}
            style={{ alignSelf: "center", height: 300, width: "100%" }}
          />
        </View>
      </React.Fragment>
    );
  }
}
export default SplashScreen;

styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: WHITE
  }
});
