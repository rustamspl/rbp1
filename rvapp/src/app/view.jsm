var m = require('@rustamspl/mithril/');
require('./reset.css');
require('./style.jss');
var cls = '.' + requireId('./');

//---------------------------
module.exports = function(ctl) {
    return ctl.loginView || m(cls, [
        m(require('../menu/'), {
            auth: ctl.auth
        }),
        ctl.view,
        m(lngselect),
    ]);
};