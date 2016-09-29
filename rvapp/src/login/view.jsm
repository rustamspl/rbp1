var m = require('@rustamspl/mithril/');
require('./style.jss');
var cls = '.' + requireId('./');
var v = require('../lib/ui/input/value');
var lng = require('../lib/lng/').get;
var lngselect = require('../lib/lng/select/');
//---------------------------
module.exports = function(ctl) {
    return m(cls, [
        m(cls + '-logo'),
        m('form' + cls + '-form', {
            onsubmit: ctl.submit
        }, [
            m(cls + '-row', [
                m('input' + cls + '-login', v({
                    v: ctl.login
                }, {
                    placeholder: lng('Enter login')
                })) //
            ]),
            m(cls + '-row', [
                m('input' + cls + '-pass', v({
                    v: ctl.pas
                }, {
                    placeholder: lng('Enter password'),
                    type: 'password'
                })),
            ]),
            m(cls + '-row', [
                m('button' + cls + '-submit', lng('Login'), {
                    type: 'submit'
                }),
            ]),
            m(lngselect)
        ])
    ]);
};