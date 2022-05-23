const router = require('express').Router();
const {
  createProject,getprojects,editproject,removeproject,getSingleproject
} = require('../../controllers/projects-controllers');

router.route('/').get(getprojects);
router.route('/').post(createProject);
router.route('/:id').put(editproject)
router.route('/').delete(removeproject)
// router.route('/resource').post(createResource);
router.route('/:id').get(getSingleproject);

module.exports = router;
