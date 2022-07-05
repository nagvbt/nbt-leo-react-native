/*
For getting VersionNumber
Package used: react-native-version-number
https://github.com/apsl/react-native-version-number

For getting Device Information
Package used: expo-device
https://docs.expo.dev/versions/latest/sdk/device/)
*/

// @flow

// eslint-disable-next-line no-unused-vars
import React from 'react';

import * as Device from 'expo-device';
import VersionNumber from 'react-native-version-number';

/**
 * Get the appVersion using package: react-native-version-number
 * @returns appVersion
 */
export const getAppVersion = (): ?string => VersionNumber.appVersion;

/**
 * Get the Device modelName using package: expo-device
 * @returns modelName
 */
export const getModelName = (): string => Device.modelName;

/**
 * Get the Device osVersion using package: expo-device
 * @returns osVersion
 */
export const getOsVersion = (): string => Device.osVersion;
