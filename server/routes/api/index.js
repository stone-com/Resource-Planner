const router = require('express').Router();

const projectRoutes = require('./project-routes');
const resourceRoutes = require('./resource-routes');

router.use('/project', projectRoutes);
router.use('/resource', resourceRoutes);

module.exports = router;
