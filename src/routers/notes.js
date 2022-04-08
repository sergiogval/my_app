const express = require('express');
const routers = express.Router();

router.get('/notes', (res, req) => {
    res.send('Notes from database')
})


module.export = router;