"use strict";

/**
 *  task controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::task.task", ({ strapi }) => ({
  async me(ctx) {
    const user = ctx.state.user;
    if (!user) {
      return ctx.badRequest(null, [
        { messages: [{ id: "No authorization header was found" }] },
      ]);
    }

    ctx.query = {
      ...ctx.query,
      filters: { ...ctx.query.filters, ...ctx.query, id: user.id },
    };

    const { data } = await super.find(ctx);

    if (!data) {
      return ctx.notFound();
    }

    ctx.body = data;
  },
}));
