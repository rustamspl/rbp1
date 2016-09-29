var m = require('@rustamspl/mithril/');
var r = require('../lib/route.js');
require('./style.jss');
var cls = '.' + requireId('./');
//---------------------------

module.exports = function(ctl,a) {
    return m(cls, "menu");
};