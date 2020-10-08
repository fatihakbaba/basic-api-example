const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment');

function formatData(doc, obj) {
    let tmpObj = obj;

    delete tmpObj.__v;
    delete tmpObj._id;
    tmpObj.product_id = tmpObj.product_id.toString().padStart(8, "0");
    tmpObj.created_date = moment(tmpObj.created_date).format('YYYY-MM-DD HH:mm:ss')
    obj = tmpObj;

    return obj;
}

// schema options
var options = {
    toJSON: {
        transform: formatData
    }
};

const StockSchema = new Schema({
    product_id: {
        type: Number,
        unique: true,
    },
    name: String,
    stock: Number,
    created_date: {
        type: Date,
        default: Date.now
    }
}, options);

module.exports = mongoose.model('stock', StockSchema);