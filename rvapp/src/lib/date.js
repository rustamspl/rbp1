var dtRe = /^(\d\d\d\d)-(\d\d)-(\d\d).*/gi;
module.exports = {
    my2js: function(a) {
        var m=a.split('-');
        return new Date(m[0],m[1]-1,m[2]);
    },
    fmt: function(date) {
        var year = date.getFullYear();
        var month = (1 + date.getMonth()).toString();
        month = month.length > 1 ? month : '0' + month;
        var day = date.getDate().toString();
        day = day.length > 1 ? day : '0' + day;
        return  day + '.' + month + '.' +year;
    }
}