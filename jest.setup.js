// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom

// example https://github.com/sabertazimi/blog/blob/main/jest.setup.js

// setup next/router mock
// https://github.com/vercel/next.js/issues/7479  or https://github.com/vercel/next.js/discussions/23034
// https://github.com/scottrippey/next-router-mock
// https://jamespotz.github.io/blog/how-to-mock-userouter

import '@testing-library/jest-dom/extend-expect';
