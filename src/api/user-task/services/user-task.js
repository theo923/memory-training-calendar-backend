'use strict';

/**
 * user-task service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-task.user-task');
