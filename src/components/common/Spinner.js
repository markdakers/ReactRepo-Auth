import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

const styles = {
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
};

const Spinner = ({ spinnerSize }) => {
    return (
        <View style={styles.spinnerStyle}>
            <ActivityIndicator size={spinnerSize} />
        </View>
    );
};

Spinner.propTypes = { spinnerSize: PropTypes.string };
Spinner.defaultProps = { spinnerSize: 'large' };

export { Spinner };
