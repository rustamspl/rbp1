var m = require('@rustamspl/mithril/');
module.exports = {
    lnk: function(a) {
        var t = [];
        var act = m.prop('1');
        for (var k in a) {
            var v = a[k];
            if (m.route.param(k) !== v) {
                //  console.log(m.route.param(k));
                act('0');
            }
            if (v !== undefined) {
                t.push(k + '=' + encodeURIComponent(v));
            }
        }
        var href = location.pathname+(t.length ? '?' : '') + t.join('&'); //(t.length?'/?':'')+
        return {
            href: href,
            act: act(),
            config: m.route
        };
    }
}