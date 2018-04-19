/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	ScrollView,
	Image,
	Text,
	ActivityIndicator,
	View
} from 'react-native';

import { fetchApi } from './api';

function convertFtoC(f) {
	// (F-32)*5/9 = C 
	return ((f - 32) * 5 / 9).toFixed(0);
}

class Today extends Component {

	render() {
		return (
			<View style={{ flex: 1, alignItems: 'center', marginVertical: 10 }}>
				<Text style={styles.today}>
					Hoje
				</Text>
				<Text style={{ fontSize: 15 }}>
					{ this.props.date }
				</Text>
				<View style={{ flexDirection: 'row' }}>
					<Text style={{ textAlign: 'center', paddingHorizontal: 10, textAlignVertical: 'center' }}>
						{ `Mínimo\n${this.props.min}` }
					</Text>
					<Image
						style={{ width: 64, height: 64 }}
						source={{ uri: "https://icon-icons.com/icons2/38/PNG/128/clouds_weather_cloud_4496.png" }}	
					/>
					<Text style={{ textAlign: 'center', paddingHorizontal: 10, textAlignVertical: 'center' }}>
						{ `Máximo\n${this.props.max}` }
					</Text>
				</View>
			</View>
		);
	}

}

export default class App extends Component {

	state = {}

	componentWillMount() {
		fetchApi().then((forecast) => {
			this.setState({ forecast })
		});
	}

	render() {
		return (
			<ScrollView>
				<Today
					date="20 de abril"
					min="20º"
					max="25º"
				/>
				<View style={styles.container}>
					{
						this.state.forecast ?
						(
							this.state.forecast.map((item) => (
								<View style={{ flex: 1, height: 20, flexDirection: 'row' }} key={item.code}>
									<Text style={{ width: 150 }}>
										{ item.date }
									</Text>
									<Text style={{ width: 50 }}>
										{ convertFtoC(item.low) }
									</Text>
									<Text style={{ width: 50 }}>
										{ convertFtoC(item.high) }
									</Text>
								</View>
							))
						) :
						(
							<ActivityIndicator/>
						)
					}
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
	today: {
		fontSize: 25,
		fontWeight: 'bold'
	}
});
