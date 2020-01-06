import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableHighlight } from 'react-native';

import Colors from '../constants/Colors';

function elevationShadowStyle(elevation) {
  return {
    elevation,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 1.5 * elevation },
    shadowOpacity: 0.3,
    shadowRadius: 0.8 * elevation
  };
}

function CustomButton(props) {
  return (
    <TouchableHighlight
      style={{
        height: 40,
        margin: 10,
        borderRadius: 10,
        backgroundColor: props.bgColor,
        justifyContent: 'center',
        alignItems: 'center',
        ...elevationShadowStyle(3),
        ...props.styles
      }}
      onPress={props.onPress}
      underlayColor={props.underlayColor}
    >
      <Text
        style={{
          color: props.textColor,
          padding: 25,
          fontWeight: 'bold',
          fontSize: 18
        }}
      >
        {props.name}
      </Text>
    </TouchableHighlight>
  );
}

CustomButton.defaultProps = {
  bgColor: Colors.submitButton,
  textColor: Colors.submitButtonText,
  underlayColor: Colors.submitButtonOverlay
};

CustomButton.propTypes = {
  style: PropTypes.object,
  onPress: PropTypes.func,
  name: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  underlayColor: PropTypes.string
};

export default CustomButton;
