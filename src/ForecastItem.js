import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    item: { paddingVertical: 2, flexDirection: 'row', },
    date: { fontSize: 14, flex: 2 },
    temperature: { fontSize: 14, flex: 1, },
    headerLabel: { fontWeight: 'bold', fontSize: 15 }
});

class ForecastItem extends React.Component {

    render() {
        const { date, high, low, code } = this.props.data;
        return (
            <View style={styles.item} key={code}>
                <Text style={styles.date}>
                    { date }
                </Text>
                <Text style={styles.temperature}>
                    { low }
                </Text>
                <Text style={styles.temperature}>
                    { high }
                </Text>
            </View>
        );
    }

}

ForecastItem.Header = () => (
    <View style={styles.item}>
        <Text style={[ styles.date, styles.headerLabel ]}>
            Data
        </Text>
        <Text style={[ styles.temperature, styles.headerLabel ]}>
            Mín.
        </Text>
        <Text style={[ styles.temperature, styles.headerLabel ]}>
            Máx.
        </Text>
    </View>
);

export { ForecastItem }