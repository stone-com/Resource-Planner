const router = require('express').Router();
const {
    createResource,getResources,editResource,removeResource,getSingleResource
  } = require('../../controllers/resource-controllers');
  
  router.route('/').get(getResources);
  router.route('/').post(createResource);
  router.route('/:id').put(editResource)
  router.route('/').delete(removeResource)
  // router.route('/resource').post(createResource);
  router.route('/:id').get(getSingleResource);
  
  module.exports = router;