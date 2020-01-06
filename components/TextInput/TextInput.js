import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  ShadowPropTypesIOS,
  ViewStyle,
  TextStyle
} from 'react-native';
import Colors from '../../constants/Colors';

import CustomIcon from '../Icon';

const styles = StyleSheet.create({
  card: {
    padding: 10,
    borderRadius: 15,
    margin: 5,
    ...elevationShadowStyle(3),
    backgroundColor: Colors.cardBackground
  }
});

function elevationShadowStyle(elevation) {
  return {
    elevation,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0.5 * elevation },
    shadowOpacity: 0.3,
    shadowRadius: 0.8 * elevation
  };
}

const getWidth = props => {
  if (!props.iconType && !props.label) return '95%';
  if (props.iconType && !props.label) return '85%';
  if (!props.iconType && props.label) return '75%';
  if (props.iconType && props.label) return '65%';
};

const Label = props => {
  return !props.label ? (
    false
  ) : (
    <Text style={{ marginLeft: 10 }}>{props.label}</Text>
  );
};

const Icon = props => {
  return !props.iconType ? (
    false
  ) : (
    <CustomIcon style={{ marginLeft: 10 }} {...props} />
  );
};

export default function CustomTextInput(props) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        ...props.containerStyle
      }}
    >
      <Icon {...props} />
      <Label {...props} />
      <TextInput
        style={{
          height: 50,
          padding: 5,
          margin: 10,
          borderWidth: 1,
          borderColor: Colors.customTextBoxBorder,
          borderRadius: 10,
          width: getWidth(props)
        }}
        placeholder={props.placeHolder}
        autoCapitalize="words"
        autoCompleteType="off"
        autoCorrect={false}
        clearButtonMode="while-editing"
        value={props.value}
        textContentType={props.textContentType}
        keyboardType={props.keyboardType}
      />
    </View>
  );
}

CustomTextInput.defaultProps = {
  textContentType: 'none',
  keyboardType: 'default'
};

CustomTextInput.propTypes = {
  iconType: PropTypes.string,
  iconColor: PropTypes.string,
  iconName: PropTypes.string,
  iconOwner: PropTypes.string,
  placeHolder: PropTypes.string,
  value: PropTypes.string,
  containerStyle: PropTypes.object,
  textContentType: PropTypes.oneOf([
    'none',
    'addressCity',
    'addressCityAndState',
    'addressState',
    'countryName',
    'creditCardNumber',
    'emailAddress',
    'familyName',
    'fullStreetAddress',
    'givenName',
    'jobTitle',
    'location',
    'middleName',
    'name',
    'namePrefix',
    'nameSuffix',
    'nickname',
    'organizationName',
    'postalCode',
    'streetAddressLine1',
    'streetAddressLine2',
    'sublocality',
    'telephoneNumber',
    'username',
    'password',
    'newPassword',
    'oneTimeCode'
  ]),
  keyboardType: PropTypes.oneOf([
    'default',
    'number-pad',
    'decimal-pad',
    'numeric',
    'email-address',
    'phone-pad'
  ])
};
