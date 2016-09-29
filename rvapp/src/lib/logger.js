var m = require('@rustamspl/mithril/');
var cbs = [];
module.exports = {
    reg: function(cb) {
        cbs.push(cb);
    },
    out: function(t) {
        console.log(t,cbs);
        cbs.map(function(cb) {
            try{
                cb(t)
            }catch(e){

            }
            
        });
        //m.redraw(true);
    }
};