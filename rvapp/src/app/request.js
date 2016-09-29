var m = require('@rustamspl/mithril/');
var conf = require('./conf');
var cookie = require('../lib/cookie');
module.exports = function(a) {
    a.config =a.config|| function(x) {
        x.setRequestHeader(conf.cookie_key, cookie.get(conf.cookie_key));
    };
    a.background=true;
    a.initialValue=a.initialValue||{};
    var deferred = m.deferred();
    var p=deferred.promise;
    p(a.initialValue);
    m.request(a).then(function(d) {
        p.load(false);   
        deferred.resolve(d); 
        m.redraw();       
    }, function(err) {
        p.load(false);
       
        if (err && err.error&&err.error.class == 'ex_noauth') {            
            m.route('', {
                m: 'login'
            });
        } else  deferred.reject(err);
        m.redraw();
    });
    p.load=m.prop(true);
    return p;
};