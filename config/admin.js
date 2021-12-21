module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '619e091377614cffd8410138e295378a'),
  },
});
