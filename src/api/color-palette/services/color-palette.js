'use strict';

/**
 * color-palette service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::color-palette.color-palette');
