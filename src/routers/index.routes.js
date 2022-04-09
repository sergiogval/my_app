const express = require('express');
const routers = express.Router();

router.get('/, (req, res) =>  {
res.send('Index')
});

router.get('/, (req, res) =>  {
res.send('About')
});

module.export = router;