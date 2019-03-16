import React from 'react';
import SignIn from './controllers/SignIn';

/**
 * Hooks don't work on the root component...
 */
export default () => <SignIn />;
