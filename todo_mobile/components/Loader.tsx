import React from 'react';
import { Dimensions, View, ActivityIndicator } from 'react-native'

const { height } = Dimensions.get('screen')

const Loader = () => {
    return (
        <View style={{
            flex: 1, height: height, justifyContent: 'center',
            alignItems: 'center',
        }}>
            <ActivityIndicator />
        </View>
    );
};

export default Loader;