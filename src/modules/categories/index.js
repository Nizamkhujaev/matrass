const router = require('express').Router()
const { POST,GET,PUT,DELETE } = require('./controller.js')

router.route('/carousel')
    .post( POST )
    .get(GET)
    .put(PUT)
    .delete(DELETE)
module.exports = router