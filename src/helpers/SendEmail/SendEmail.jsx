/*
For sending Mail
Package used: expo-mail-composer
https://docs.expo.dev/versions/latest/sdk/mail-composer/
*/

import * as MailComposer from 'expo-mail-composer';

import {
  getAppVersion,
  getModelName,
  getOsVersion,
} from '_helpers/DeviceInfoHelper/DeviceInfoHelper';

import {
  getAppName,
  getEmail,
} from '_helpers/PackageJsonHelper/PackageJsonHelper';

/**
 * Send Support Email With DeviceInfo Footer Note
 * const subject: string = getAppName() + " " + "App Support";
 * const emailRecipients: string[] = [getEmail()];
 * const body: string = getEmailFooterMessage();
 * @returns {void}
 */
export const SendSupportEmailWithDeviceInfoFooter = () => {
  const subject = `${getAppName()} App Support`;
  const emailRecipients = [getEmail()];
  const body = getEmailFooterMessage();
  sendEmail(subject, emailRecipients, body);
};

/**
 * Send email using expo MailComposer
 * @param {string} emailSubject
 * @param {string[]} emailRecipients
 * @param {string} emailBody
 */
export const sendEmail = (emailSubject, emailRecipients, emailBody) => {
  MailComposer.composeAsync({
    subject: emailSubject,
    recipients: emailRecipients,
    body: emailBody,
    isHtml: true,
  })
    .then((data) => console.log(data.status))
    .catch((error) => {
      console.log(error);
    });
};

/**
 * Get the formatter Email Footer Message
 * @returns {string} EmailFooterMessage
 */
export const getEmailFooterMessage =
  () => `<br/><br/>--<br/>App Version: ${String(getAppVersion())}
                                    <br/>Platform: ${getModelName()}
                                    <br/>OS: ${getOsVersion()}`;
