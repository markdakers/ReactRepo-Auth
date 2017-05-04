import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { PropTypes } from 'prop-types';


const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
    },
    buttonTextStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    },
};

const Button = ({ onPress, children }) => {
    const { buttonStyle, buttonTextStyle } = styles;
    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={buttonTextStyle}>
                { children }
            </Text>
        </TouchableOpacity>
    );
};

Button.propTypes = {
    onPress: PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.arrayOf(React.PropTypes.node), PropTypes.node]),
};

Button.defaultProps = {
    onPress: () => {},
    children: [],
};

export { Button };
