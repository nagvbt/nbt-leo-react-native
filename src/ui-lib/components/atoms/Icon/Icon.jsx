import React from 'react';
import PropTypes from 'prop-types';
import { Icon as RNVIcon } from 'react-native-elements';

const Icon = ({
  type,
  name,
  color,
  raised,
  disabled,
  onPress,
  containerStyle,
}) => (
  <RNVIcon
    type={type}
    name={name}
    color={color}
    raised={raised}
    disabled={disabled}
    onPress={onPress}
    containerStyle={containerStyle}
  />
);

Icon.propTypes = {
  /**
   *  Type of Icons
   */
  type: PropTypes.oneOf([
    'antdesign',
    'entypo',
    'evilicon',
    'feather',
    'font-awesome',
    'font-awesome-5',
    'fontisto',
    'foundation',
    'ionicon',
    'material',
    'material-community',
    'octicon',
    'simple-line-icon',
    'zocial',
  ]),
  name: PropTypes.string,
  color: PropTypes.string,
  raised: PropTypes.bool,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,

  containerStyle: PropTypes.objectOf(PropTypes.object),
};

Icon.defaultProps = {
  type: 'font-awesome',
  name: 'check-circle',
  color: 'black',
  raised: false,
  disabled: false,
  onPress: () => null,
  containerStyle: {},
};
export default Icon;
