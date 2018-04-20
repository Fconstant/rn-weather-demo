import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Image,
	Text,
	ActivityIndicator,
	View
} from 'react-native';

import { fetchForecast } from './api';
import { convertFtoC } from './util';
import { ForecastItem } from './ForecastItem';
import { Card } from './Card';
import { TodayForecast } from './TodayForecast';

export default class App extends Component {

	state = {}

	componentWillMount() {
		fetchForecast().then((forecast) => {
			this.setState({
				today: forecast.shift(),
				forecast
			})
		});
	}

	renderItem = (i) => (
		<View key={`item:${i.code}`}>
			<ForecastItem data={i}/>
			<View style={styles.separator}/>
		</View>
	)

	render() {
		return (
			<View style={styles.container}>
				{
					this.state.forecast ?
					(
						<React.Fragment>
							<TodayForecast
								data={this.state.today}
							/>
							<Card style={{ width: 320 }}>
								<ForecastItem.Header/>
								{
									this.state.forecast.map(
										this.renderItem
									)
								}
							</Card>
						</React.Fragment>
					) :
					(
						<ActivityIndicator size="large" style={{ flex: 1 }} />
					)
				}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
	separator: {
		height: StyleSheet.hairlineWidth,
		backgroundColor: '#0006'
	}
});
