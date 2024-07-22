import React from 'react';
import { Dimensions, View, ActivityIndicator } from 'react-native'

const { height } = Dimensions.get('screen')

/**
 * A component that displays a loader with an activity indicator.
 * @returns The Loader component.
 */
const Loader = () => {
    return (
        <View style={{
            flex: 1, height: height, justifyContent: 'center',
            alignItems: 'center',
        }} testID='loader'>
            <ActivityIndicator testID='activity-indicator' />
        </View>
    );
};

export default Loader;