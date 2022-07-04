# Packages Used

## DeviceInfo

expo-device provides access to system information about the physical device, such as its manufacturer and model.

[HomePage](https://docs.expo.dev/versions/latest/sdk/device/) | Licence: MIT

`expo install expo-device`

## Version

Returns the CFBundleShortVersionString and the CFBundleVersion and bundleIdentifier on IOS. For Android, returns the versionName, versionCode and applicationId.

### Usage

```js
import VersionNumber from "react-native-version-number";

console.log(VersionNumber.appVersion);
console.log(VersionNumber.buildVersion);
console.log(VersionNumber.bundleIdentifier);
```

[HomePage][https://github.com/apsl/react-native-version-number] | Licence: MIT

`yarn add react-native-version-number`

## Mail Composer

expo-mail-composer allows you to compose and send emails quickly and easily using the OS UI. This module can't be used on iOS Simulators since you can't sign into a mail account on them.

[HomePage](https://docs.expo.dev/versions/v45.0.0/sdk/mail-composer)

`expo install expo-mail-composer`
