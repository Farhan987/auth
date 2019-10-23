import React, { Component } from "react";
import {
  Container,
  Header,
  Tab,
  Tabs,
  TabHeading,
  Icon,
  Text
} from "native-base";
import LoginScreen from "./authScreens/loginScreen";
import RegistrationScreen from "./authScreens/registrationScreen";
export default class TabsAdvancedExample extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs style={{ backgroundColor: "white" }} />
        <Tabs tabBarUnderlineStyle={{ backgroundColor: "#3ACDE1" }}>
          <Tab
            heading={
              <TabHeading style={{ backgroundColor: "white" }}>
                <Text style={{ color: "black" }}>SIGN IN</Text>
              </TabHeading>
            }
          >
            <LoginScreen navigation={this.props.navigation} />
          </Tab>
          <Tab
            heading={
              <TabHeading style={{ backgroundColor: "white" }}>
                <Text style={{ color: "black" }}>SIGN UP</Text>
              </TabHeading>
            }
          >
            <RegistrationScreen navigation={this.props.navigation} />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
