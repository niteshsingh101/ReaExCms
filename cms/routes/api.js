var express = require('express');
var router = express.Router();

router.get('/users', (req, res) => {
   
    try {
        const users= [
            {id:1, name:'Nitesh'},
            {id:2, name:'Lokesh'},
            {id:3, name:'Aakash'}
        ];
        res.json(users);
        
    } catch (error) {
        res.send(error);
    }
});
module.exports = router;