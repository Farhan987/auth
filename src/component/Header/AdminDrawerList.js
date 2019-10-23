import React, { Component } from 'react';
import { View, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Icon, Button } from 'native-base';
import { NAVY_BLUE, GREY, WHITE, BLACK } from '../../theme/colors';
export default class DrawerList extends Component {
	render() {
		return (
			<Container>
				<Content>
					<View
						style={{
							height: 70,
							justifyContent: 'center',
							flexDirection: 'row'
						}}
					>
						<View
							style={{
								flex: 1,
								justifyContent: 'center',
								alignItems: 'center'
							}}
						>
							<TouchableOpacity
								disabled
								style={{
									height: 50,
									width: '90%',
									borderColor: NAVY_BLUE,
									borderWidth: 3,
									borderRadius: 4,
									justifyContent: 'center',
									alignItems: 'center'
								}}
							>
								<Text
									style={{
										fontSize: 18,

										textAlign: 'center',
										color: BLACK
									}}
								>
									Farhan Akram
								</Text>
							</TouchableOpacity>
						</View>

						<View
							style={{
								flex: 1,
								justifyContent: 'center',
								alignItems: 'center'
							}}
						>
							<Button
								transparent
								onPress={() => {
									this.props.HideModal();
								}}
								style={{
									alignSelf: 'flex-end'
								}}
							>
								<Icon
									name="chevron-circle-down"
									type="FontAwesome"
									style={{
										color: 'black',
										alignSelf: 'flex-end',
										fontSize: 30
									}}
								/>
							</Button>
						</View>
					</View>

					<List>
						<ListItem
							onPress={() => {
								this.props.HideModal();
							}}
						>
							<Icon name="home" style={{ color: GREY }} />
							<Text style={{ marginLeft: 10 }}>Dashboard</Text>
						</ListItem>

						<ListItem
							onPress={() => {
								this.props.HideModal();
								this.props.navigation.navigate('TaskListScreen');
							}}
						>
							<Icon name="check-square-o" type="FontAwesome" style={{ color: GREY }} />
							<Text style={{ marginLeft: 10 }}>Tasks</Text>
						</ListItem>
						<ListItem
							onPress={() => {
								this.props.HideModal();
								this.props.navigation.navigate('ItemListScreen');
							}}
						>
							<Icon name="pencil-square-o" type="FontAwesome" style={{ color: GREY }} />
							<Text style={{ marginLeft: 10 }}>Items</Text>
						</ListItem>
						<ListItem
							onPress={() => {
								this.props.HideModal();
								this.props.navigation.navigate('AllChatScreen');
							}}
						>
							<Icon name="commenting" type="FontAwesome" style={{ color: GREY }} />
							<Text style={{ marginLeft: 10 }}>Chat</Text>
						</ListItem>
						<ListItem
							onPress={() => {
								this.props.HideModal();
								this.props.navigation.navigate('AddUserScreen');
							}}
						>
							<Icon name="user" type="FontAwesome" style={{ color: GREY }} />
							<Text style={{ marginLeft: 10 }}>Add User</Text>
						</ListItem>

						<ListItem
							onPress={() => {
								this.props.HideModal();
								this.props.navigation.navigate('PreDefinedTask');
							}}
						>
							<Icon name="check-square-o" type="FontAwesome" style={{ color: GREY }} />
							<Text style={{ marginLeft: 10 }}>Predefined Tasks</Text>
						</ListItem>
						<ListItem
							onPress={() => {
								this.props.HideModal();
								this.props.navigation.navigate('UserProfileScreen');
							}}
						>
							<Icon name="user" type="FontAwesome" style={{ color: GREY }} />
							<Text style={{ marginLeft: 10 }}>User Profile</Text>
						</ListItem>
						<ListItem
							onPress={() => {
								this.props.HideModal();
								this.props.navigation.navigate('SettingScreen');
							}}
						>
							<Icon name="cog" type="FontAwesome" style={{ color: GREY }} />
							<Text style={{ marginLeft: 10 }}>Settings</Text>
						</ListItem>
						<ListItem
							onPress={() => {
								AsyncStorage.removeItem('familyLogin');
								this.props.navigation.navigate('FamilyLoginScreen');
							}}
						>
							<Icon name="sign-out" type="FontAwesome" style={{ color: GREY }} />
							<Text style={{ marginLeft: 10 }}>Logout</Text>
						</ListItem>
					</List>
				</Content>
			</Container>
		);
	}
}
