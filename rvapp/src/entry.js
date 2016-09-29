require('./app/reset.css');
require('./app/style.jss');
var m = require('@rustamspl/mithril/');
//m.route.mode = 'pathname';
 function start() {
    m.redraw.strategy('diff');
    m.route(document.body, '', {
        '': require('./app/')
    });
    document.addEventListener('backbutton', function(event) {
        event.preventDefault(); // EDIT
        navigator.app.exitApp(); // exit the app
    });
}
//document.addEventListener("deviceready", start, false);
start();