// jest.config.js
// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */

/* eslint arrow-body-style: ["error", "as-needed", { "requireReturnForObjectLiteral": true }] */

const config = {
  verbose: true,
};

module.exports = config;

// Or async function
module.exports = async () => {
  return {
    verbose: true,
  };
};
