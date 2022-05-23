const router = require('express').Router();
const projectRoutes = require('./project-routes');

router.use('/project', projectRoutes);

module.exports = router;
