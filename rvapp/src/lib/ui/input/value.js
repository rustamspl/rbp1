var m = require('@rustamspl/mithril/');
module.exports = function(p, a) {
    var a = a || {};
    var f = m.withAttr("value", p.v);
    a.onchange = f
    a.onkeyup = f;
    a.value = p.v();
    return a;
};