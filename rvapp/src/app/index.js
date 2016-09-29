var m = require('@rustamspl/mithril/');

var request = require('../app/request');
var conf = require('../app/conf');
var auth = require('../app/auth');
//require('../login/');
var routes = {
    'news': require('../news/'),

};
var app= {
   
    controller: function() {
        if (m.route.param("m") == 'login') {
            this.loginView = require('../login/');
   
        } else {
            this.loginView = null;
            this.view = routes[m.route.param("m")] || routes['news'];
            this.auth=auth.data;
            auth.get();
        }
 
    },
    view: require('./view.jsm')
};
module.exports = app;