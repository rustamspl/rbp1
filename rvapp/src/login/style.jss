  var cls = '.' + requireId('./');
  var col = require('../app/conf').colors;
  module.exports = function() {
      return {
          [cls + '-logo']: {
              mar:'50px auto 10px auto',
              'width':'250px',
              'height':'250px',
              'background-image':'url(/img/logo1.png)',
              'background-size':'contain',
          },
          [cls]: {

              '&-form': {
                  mar: '0px auto',
                  maw: '280px',
                  overflow:'hidden',
              },
              '&-row': {
                  pad: '10px',
                  bxz:'bb',

              },
              // '&-title': {
              //     pad: '10px 0',
              //     ta: 'center',
              //     fz: '20px',
              // },           // '&-title': {
              //     pad: '10px 0',
              //     ta: 'center',
              //     fz: '20px',
              // },
              // '&-label': {
              //     width: '100px',
              //     d: 'ib',
              //     ta: 'right',
              //     pad: '5px',
              //     color: col.label
              // },
              'input': {
                  width: '260px',
                  d: 'b',
                  pad: '5px',
                  'fz':'20px',
                   bxz:'bb',
                   ta:'center',
              },
              '&-submit': {
                  width: '260px',
                  d: 'b',
                  pad: '10px 10px',
                  mar: '0 auto',
                  'fz':'20px',
                   bxz:'bb',
              }
          }
      };
  };