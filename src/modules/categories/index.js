const router = require('express').Router()
const { POST,GET,PUT,DELETE } = require('./controller.js')
const checkToken = require('../../middlewares/checkToken')

router.route( '/categories')
    .post( checkToken,POST )
    .get(GET)
    .put(checkToken,PUT)
    .delete(DELETE)
module.exports = router