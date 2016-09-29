   var cls = '.' + requireId('./');
   var col = require('../app/conf').colors;
   module.exports = function() {
       return {

           body: {
               ff: 'Arial',
               bg: '#fff',
               color: '#444',
                 maw:'800px',
               mar:'0 auto',

               // pad:0,
               // mar:0
              
           },
           button: {
               bg: col.main,
               bd: 'none',
               color: col.main2,
           },
          
       }
   }