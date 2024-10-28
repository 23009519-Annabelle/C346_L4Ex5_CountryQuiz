import React from 'react';
import { Text, View, Image } from 'react-native';

const Zoo = ({question, image}) => {
    return (
        <View>
            <Image source={image} style={{ width: 450, height: 300 }} />
            <Text style={{ color: '#5A5A5A' }}>{question}</Text>
        </View>
    );
}


export default Zoo;
