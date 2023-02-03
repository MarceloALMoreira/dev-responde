const { json } = require('express');
const express = require('express')


const router = express.Router()

router.get('/teste', (request, response) => {
    return response.status(200).json()
})

module.exports = router;