module.exports = {
  routes: [
    {
      method: "GET",
      path: "/:task/:me",
      handler: "task.me",
      config: {
        policies: [],
      },
    },
  ],
};
