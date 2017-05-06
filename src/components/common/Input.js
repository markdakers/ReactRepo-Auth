import React from 'react';
import { TextInput, Platform, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const styles = {
    textInputStyle: {
        height: (Platform.OS === 'ios') ? 20 : null,    // Think height needs to be defined for ios (but seems like not android)
        borderWidth: 1,
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1,
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
};

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.labelStyle}>{ label }</Text>
            <TextInput
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                autoCorrect={false}
                value={value} // Doesn't seem like this is required despite rerender happening on setState
                onChangeText={onChangeText}
                underlineColorAndroid="transparent"
                style={styles.textInputStyle}
            />
        </View>
    );
};

Input.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    onChangeText: PropTypes.func,
    placeholder: PropTypes.string,
    secureTextEntry: PropTypes.bool,
};

Input.defaultProps = { label: '', value: '', onChangeText: null, placeholder: '', secureTextEntry: false };

export { Input };

