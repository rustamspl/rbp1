var m = require('@rustamspl/mithril/');
var conf = require('../app/conf');
var cookie = require('../lib/cookie');
var request = require('../app/request');
var auth = {
    data: m.prop(null),
    get: function() {
        var deferred = m.deferred();
        if (auth.data()) {
            deferred.resolve(auth.data());
        } else {
            // deferred.resolve(null);
            return request({
                method: "GET",
                url: conf.baseUrl + '/api/auth'
            }).then(function(d) {
                auth.data(d);
                return d;
            });
        }
        return deferred.promise;
    },
    set: function(d) {
        auth.data(d);
        //cookie.set(conf.cookie_key, d.session_id);
        m.route('', {});
    },
    logout: function() {
        request({
            method: "DELETE",
            url: conf.baseUrl + '/api/auth'
        }).then(function(d) {
            //  cookie.set(conf.cookie_key,null);
            m.route('a.html', {
                m: 'login'
            });
        });
    }
};
module.exports = auth;