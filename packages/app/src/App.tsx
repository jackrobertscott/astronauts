import React from 'react';
import { Login } from './controllers/Login';

/**
 * Hooks don't work on the root component...
 */
export default () => <Login />;
