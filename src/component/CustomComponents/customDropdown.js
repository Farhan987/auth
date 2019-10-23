import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Icon, Picker, Item } from 'native-base';
import { CUSTOM_FEILD_COLOR } from '../../theme/colors';
import { MEDIUM, LARGE } from '../../font/font';

export default class CustomDropdown extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: ''
		};
	}
	onValueChange(value) {
		this.setState({
			selected: value
		});
	}

	render() {
		return (
			<Item
				regular
				style={{
					alignSelf: 'center',
					borderColor: CUSTOM_FEILD_COLOR,
					borderRadius: 8,
					height: this.props.Inputheight ? this.props.Inputheight : 50,

					flexDirection: 'row',
					marginTop: 10,
					width: '97%',
					justifyContent: 'center',
					alignSelf: 'center',
					borderWidth: 1,
					borderColor: CUSTOM_FEILD_COLOR
				}}
			>
				{this.props.iconName ? (
					<View
						style={{
							flex: 1,
							justifyContent: 'center',
							alignItems: 'center'
						}}
					>
						<Icon
							name={this.props.iconName ? this.props.iconName : ''}
							type="FontAwesome"
							style={{ fontSize: LARGE, marginRight: 10 }}
						/>
					</View>
				) : (
					false
				)}
				<View
					style={{
						flex: 3,
						justifyContent: 'center',
						alignItems: 'center',
						marginLeft: this.props.marginLeft ? this.props.marginLeft : 0
					}}
				>
					<Text
						style={{
							alignSelf: 'flex-start',
							fontSize: MEDIUM,
							color: this.props.placeholderColor ? this.props.placeholderColor : CUSTOM_FEILD_COLOR,
							marginLeft: 5
						}}
					>
						{this.props.title ? this.props.title : ''}
					</Text>
				</View>
				<View style={{ flex: 3 }}>
					<Picker
						mode="dropdown"
						iosHeader="Select your SIM"
						iosIcon={<Icon name="arrow-down" />}
						style={{ width: undefined }}
						selectedValue={this.state.selected}
						onValueChange={this.onValueChange.bind(this)}
					>
						<Picker.Item label="x" value="key0" />
						<Picker.Item label="y" value="key1" />
						<Picker.Item label="z" value="key2" />
					</Picker>
				</View>
			</Item>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	}
});
