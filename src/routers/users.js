const express = require('express');
const routers = express.Router();


router.get('users/signup', (req,res) => {
    res.send('Forlulario de autenticación');
})

router.get('users/signin', (req,res) => {
    res.send('Ingresa a la App');
})


module.export = router;