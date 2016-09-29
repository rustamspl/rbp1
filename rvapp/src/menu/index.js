var m = require('@rustamspl/mithril/');
var auth = require('../app/auth');
module.exports ={
        controller: function  () {
            this.logout=auth.logout;
        },
        view: require('./view.jsm')
    };
