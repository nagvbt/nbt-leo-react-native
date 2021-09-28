import React from 'react';
import PropTypes from 'prop-types';
import { Button as RNVButton } from 'react-native-elements';

const Button = ({
  type,
  title,
  icon,
  raised,
  disabled,
  onPress,
  containerViewStyle,
}) => (
  <RNVButton
    type={type}
    title={title}
    icon={icon}
    raised={raised}
    disabled={disabled}
    onPress={onPress}
    containerViewStyle={containerViewStyle}
  />
);

Button.propTypes = {
  type: PropTypes.oneOf(['solid', 'clear', 'outline']),
  title: PropTypes.string,
  icon: PropTypes.elementType,
  raised: PropTypes.bool,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
  containerViewStyle: PropTypes.objectOf(PropTypes.object),
};

Button.defaultProps = {
  type: 'solid',
  title: 'Solid Button',
  raised: false,
  disabled: false,
  onPress: () => null,
  containerViewStyle: {},
  icon: undefined,
};
export default Button;
