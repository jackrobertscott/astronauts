import React from 'react';
import MainRoutes from './controllers/MainRoutes';

/**
 * Hooks don't work on the root component...
 */
export default () => <MainRoutes />;
