import React from 'react';
import { View } from 'react-native';

const cardStyle = {
    elevation: 2,
    borderRadius: 2,
    padding: 16,
    backgroundColor: 'white'
};

export const Card = (props) => (
    <View
        {...props}
        style={[ props.style, cardStyle ]}
    />
)