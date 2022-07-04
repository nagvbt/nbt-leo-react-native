import React from 'react';
import PropTypes from 'prop-types';
import { Input as RNVInput } from 'react-native-elements';
import { StyleSheet } from 'react-native';
// Version: 3.4.2
// Author: Nag

/**
 * Inputs allow users to enter text into a UI. They typically appear in forms and dialogs.
 * errorStyle was Fixed
 */
const Input = ({
  containerStyle,
  disabled,
  disabledInputStyle,
  errorMessage,
  errorProps,
  // errorStyle,
  InputComponent,
  inputContainerStyle,
  inputStyle,
  label,
  labelProps,
  labelStyle,
  leftIcon,
  leftIconContainerStyle,
  placeholder,
  renderErrorMessage,
  rightIcon,
  rightIconContainerStyle,
}) => (
  <RNVInput
    containerStyle={containerStyle}
    disabled={disabled}
    disabledInputStyle={disabledInputStyle}
    errorMessage={errorMessage}
    errorProps={errorProps}
    errorStyle={styles.errorStyle}
    InputComponent={InputComponent}
    inputContainerStyle={inputContainerStyle}
    inputStyle={inputStyle}
    label={label}
    labelProps={labelProps}
    labelStyle={labelStyle}
    leftIcon={leftIcon}
    leftIconContainerStyle={leftIconContainerStyle}
    placeholder={placeholder}
    renderErrorMessage={renderErrorMessage}
    rightIcon={rightIcon}
    rightIconContainerStyle={rightIconContainerStyle}
  />
);

Input.propTypes = {
  /**
   *  styling for view containing the label, the input and the error message
   */
  containerStyle: PropTypes.objectOf(PropTypes.object),
  /**
   * disables the input component
   */
  disabled: PropTypes.bool,
  /**
   * disabled styles that will be passed to the style props of the React Native TextInput (optional)
   */
  disabledInputStyle: PropTypes.objectOf(PropTypes.object),
  /**
   * adds error message (optional)
   */
  errorMessage: PropTypes.string,
  /**
   * props to be passed to the React Native Text component used to display the error message (optional)
   */
  errorProps: PropTypes.objectOf(PropTypes.object),
  /**
   * add styling to error message (optional)
   */
  // errorStyle: PropTypes.objectOf(PropTypes.object),
  /**
   *React Native Component: component that will be rendered in place of the React Native TextInput (optional)
   */
  InputComponent: PropTypes.elementType,
  /**
   * styling for Input Component Container (optional)
   */
  inputContainerStyle: PropTypes.objectOf(PropTypes.object),
  /**
   * style that will be passed to the style props of the React Native TextInput (optional)
   */
  inputStyle: PropTypes.objectOf(PropTypes.object),
  /**
   * add a label on top of the input (optional)
   */
  label: PropTypes.string || PropTypes.elementType,
  /**
   * props to be passed to the React Native Text component used to display the label or React Component used instead of simple string in label prop (optional)
   */
  labelProps: PropTypes.string || PropTypes.elementType,
  /**
   * styling for the label (optional); You can only use this if label is a string
   */
  labelStyle: PropTypes.objectOf(PropTypes.object),
  /**
   * displays an icon on the left (optional)
   */
  leftIcon: PropTypes.object || PropTypes.elementType,
  /**
   * styling for left Icon Component container
   */
  leftIconContainerStyle: PropTypes.objectOf(PropTypes.object),
  /**
   * Placeholder text for the input
   */
  placeholder: PropTypes.string,
  /**
   * If the error message container should be rendered (take up vertical space). If false, when showing errorMessage, the layout will shift to add it at that time.
   */
  renderErrorMessage: PropTypes.bool,

  /**
   * displays an icon on the right (optional)
   */
  rightIcon: PropTypes.object || PropTypes.elementType,
  /**
   * styling for right  Icon Component container - View style (object)
   */
  rightIconContainerStyle: PropTypes.objectOf(PropTypes.object),
};

Input.defaultProps = {
  containerStyle: {},
  disabled: false,
  disabledInputStyle: {},
  errorMessage: '',
  errorProps: {},
  // errorStyle: undefined,
  InputComponent: undefined,
  inputContainerStyle: {},
  inputStyle: {},
  label: undefined,
  labelProps: undefined,
  labelStyle: {},
  leftIcon: undefined,
  leftIconContainerStyle: {},
  placeholder: '',
  renderErrorMessage: true,
  rightIcon: undefined,
  rightIconContainerStyle: {},
};

const styles = StyleSheet.create({
  errorStyle: {
    color: 'red',
  },
});
export default Input;
