import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

const styles = {
    ContainerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative',
    },
};

const CardSection = props => (
    <View style={styles.ContainerStyle}>
        {props.children}
    </View>
    );

CardSection.propTypes = { children: PropTypes.node };
CardSection.defaultProps = { children: [] };

export { CardSection };
