import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { IconButton } from 'react-native-paper';


const HeaderLeft = ({navigation}) => {
    return (
        <IconButton
            icon={() => <Ionicons name="arrow-back" size={21} color="black" />}
            size={21}
            onPress={() => {
                navigation.goBack();
            }}
        />
    );
};

export default HeaderLeft;