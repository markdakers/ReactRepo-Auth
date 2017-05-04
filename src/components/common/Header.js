// Snippets => nfn , imd
// Import libraries
import React from 'react';
import { Text, View, Platform } from 'react-native';
import PropTypes from 'prop-types';

const styles = {
    textStyle: {
        fontSize: 32,
    },
    viewStyle: {
        backgroundColor: '#F8F8E8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        paddingBottom: 5,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        elevation: (Platform.OS === 'android') ? 3 : 0, // shadow doesn't work on android
        position: 'relative',
    },
};

// Make component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

Header.propTypes = { headerText: PropTypes.string.isRequired };
// Header.defaultProps = { headerText: 'Dont need default with isRequired' };

// const Header2 = () => <Text>Albums!</Text>;

// Make components available to other parts of the app
export { Header };
// export { Header, Header2 };

