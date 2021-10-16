const router = require('express').Router()
const { POST,GET,PUT } = require('./controller.js')
const checkToken = require('../../middlewares/checkToken')
router.route('/orders')
    .post(checkToken,POST)
    .get(GET)
    .put(checkToken,PUT)
module.exports = router