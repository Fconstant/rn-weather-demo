import React from 'react';
import {
    View,
    Text,
	StyleSheet,
	Image
} from 'react-native';
import { Card } from './Card';

const styles = StyleSheet.create({
	today: {
		fontSize: 25,
		fontWeight: 'bold'
	}
});

export class TodayForecast extends React.Component {

	render() {
		const { date, low, high } = this.props.data;
		return (
			<Card style={{ width: 320, alignItems: 'center', marginVertical: 18 }}>
				<Text style={styles.today}>
					Hoje
				</Text>
				<Text style={{ fontSize: 15 }}>
					{ date }
				</Text>
				<View style={{ flexDirection: 'row' }}>
					<Text style={{ textAlign: 'center', fontSize: 16, paddingHorizontal: 12, textAlignVertical: 'center' }}>
						{ `Mínimo\n${low}` }
					</Text>
					<Image
						style={{ width: 64, height: 64 }}
						source={{ uri: "https://icon-icons.com/icons2/38/PNG/128/clouds_weather_cloud_4496.png" }}	
					/>
					<Text style={{ textAlign: 'center', fontSize: 16, paddingHorizontal: 12, textAlignVertical: 'center' }}>
						{ `Máximo\n${high}` }
					</Text>
				</View>
			</Card>
		);
	}

}