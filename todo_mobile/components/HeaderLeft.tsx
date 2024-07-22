import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { IconButton } from 'react-native-paper';

type HeaderLeftProps = {
    navigation: any;
};

/**
 * Renders a custom header component with a back button.
 *
 * @param {HeaderLeftProps} props - The component props.
 * @param {NavigationProp<ParamListBase>} props.navigation - The navigation object.
 * @returns {React.ReactElement} The rendered component.
 */
const HeaderLeft = ({navigation}:HeaderLeftProps) => {
    return (
        <IconButton
            icon={() => <Ionicons name="arrow-back" size={21} color="black" />}
            size={21}
            onPress={() => {
                navigation.goBack();
            }}
            testID='back-button'
        />
    );
};

export default HeaderLeft;