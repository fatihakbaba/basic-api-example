var express = require('express');
var router = express.Router();

//Models
const Stock = require('../models/Stock');

/* GET stocks page. */
router.get('/', (req, res, next) => {
    const promise = Stock.find({});
    let result;
    promise.then((data) => {
        result = {
            code: 0,
            msg: "success",
            data: data
        }
        res.json(result);
    }).catch((err) => {
        result = {
            code: -1,
            msg: "error",
        }
        res.json(result);
    });
});

router.post('/', (req, res, next) => {
    const stock = new Stock(req.body);
    const promise = stock.save();

    let result;
    promise.then((data) => {
        result = {
            code: 0,
            msg: "success",
            data: data
        }

        res.json(result);
    }).catch((err) => {
        result = {
            code: -1,
            msg: "error",
        }
        res.json(result);
    });
});

module.exports = router;