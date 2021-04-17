const router = require('express').Router();
const apiRoutes = require('./api');
const routes = require('./routes');

router.use('/', apiRoutes);
router.use('/', routes);



module.exports = router;