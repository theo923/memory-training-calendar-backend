module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7e4e13ffcc349820623ecb9f0dedf275'),
  },
});
