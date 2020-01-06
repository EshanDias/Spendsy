import React from 'react';
import PropTypes from 'prop-types';
import {
  Ionicons,
  Entypo,
  MaterialIcons,
  MaterialCommunityIcons
} from '@expo/vector-icons';

import Colors from '../constants/Colors';

function Icon(props) {
  iconProps = {
    size: props.iconSize,
    name: props.iconName,
    color: props.iconColor,
    style: props.style
  };

  switch (props.iconOwner) {
    case 'Ionicons':
      return <Ionicons {...iconProps} />;
    case 'Entypo':
      return <Entypo {...iconProps} />;
    case 'MaterialIcons':
      return <MaterialIcons {...iconProps} />;
    case 'MaterialCommunityIcons':
      return <MaterialCommunityIcons {...iconProps} />;
  }
}

function IconButton(props) {
  const Name = props.iconOwner + '.Button';

  return <Name name={props.name} size={30} name={props.iconName} />;
}

function CustomIconComponent(props) {
  return props.iconType === 'button' ? (
    <IconButton {...props} />
  ) : (
    <Icon {...props} />
  );
}

CustomIconComponent.defaultProps = {
  iconColor: Colors.defaultIcon,
  iconSize: 30
};

CustomIconComponent.propTypes = {
  iconSize: PropTypes.number,
  iconName: PropTypes.string,
  iconColor: PropTypes.string,
  style: PropTypes.object
};

export default CustomIconComponent;
