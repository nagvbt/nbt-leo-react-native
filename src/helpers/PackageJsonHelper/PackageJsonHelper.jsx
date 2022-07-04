// @flow
/* eslint import/no-unresolved: 2 */
const packageJson = require('../../../package.json');

/** *
 * Get the App 'name' from Package.json
 * @returns  {string} name
 */
export const getAppName = () => packageJson.name;

/**
 * Get the 'email' from Package.json
 * @returns {string} email
 */
export const getEmail = () => packageJson.email;

/**
 * Get the 'Website' from Package.json
 * @returns  {string} homepage url
 */
export const getWebsite = () => packageJson.homepage;
