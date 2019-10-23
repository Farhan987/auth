import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, Alert } from 'react-native';
import { Container, Header, Button, Left, Right, Body, Icon } from 'native-base';
import DrawerList from './AdminDrawerList';

export default class CustomHeader extends Component {
	state = {
		modalVisible: false
	};

	setModalVisible() {
		this.setState({ modalVisible: true });
	}

	HideModal = () => {
		this.setState({ modalVisible: false });
	};

	render() {
		return (
			<View>
				<Header style={{ backgroundColor: 'white' }}>
					<Left style={{ flex: 1 }} />
					<Body style={{ flex: 4 }}>
						<View
							style={{
								flex: 1,
								marginLeft: 50,
								flexDirection: 'row',
								alignSelf: 'center'
							}}
						>
							<Button
								style={{
									height: 26,
									width: 60,
									alignSelf: 'center',
									borderColor: 'black',
									borderRadius: 5,
									borderWidth: 1,

									justifyContent: 'center'
								}}
								transparent
								onPress={() => this.props.navigation.navigate('TaskListScreen')}
							>
								<Text style={{ color: 'black', alignSelf: 'center', fontSize: 12, fontWeight: 'bold' }}>
									Tasks
								</Text>
							</Button>
							<View
								style={{
									height: 50,
									width: 10
								}}
							/>
							<Button
								style={{
									height: 26,
									width: 60,
									alignSelf: 'center',
									borderColor: 'black',
									borderRadius: 5,
									borderWidth: 1,

									justifyContent: 'center'
								}}
								transparent
								onPress={() => this.props.navigation.navigate('ItemListScreen')}
							>
								<Text style={{ color: 'black', alignSelf: 'center', fontSize: 12, fontWeight: 'bold' }}>
									Items
								</Text>
							</Button>
							<View
								style={{
									height: 50,
									width: 10
								}}
							/>
							<Button
								style={{
									height: 26,
									width: 60,
									alignSelf: 'center',
									borderColor: 'black',
									borderRadius: 5,
									borderWidth: 1,

									justifyContent: 'center'
								}}
								transparent
								onPress={() => this.props.navigation.navigate('AllChatScreen')}
							>
								<Text style={{ color: 'black', alignSelf: 'center', fontSize: 12, fontWeight: 'bold' }}>
									Chat
								</Text>
							</Button>
						</View>
					</Body>
					<Right style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,marginBottom:10}}>
						<Button
						style={{alignSelf: 'center' ,alignItems:"center",justifyContent:"center"}}
							transparent
							onPress={() => {
								this.setModalVisible();
							}}
						>
							<Icon name="menu" style={{ color: 'black', fontSize: 40}} />
						</Button>
					</Right>
				</Header>

				<Modal
					animationType="slide"
					transparent={false}
					visible={this.state.modalVisible}
					onRequestClose={() => {
						Alert.alert('Modal has been closed.');
					}}
				>
					<DrawerList navigation={this.props.navigation} HideModal={this.HideModal} />
				</Modal>
			</View>
		);
	}
}
