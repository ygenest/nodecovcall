/**
 * Created by info2301 on 2015/06/26.
 */
var http = require('http');
var SpahQL = require('spahql');
module.exports = {
  getOptionQuotes: function(symbol) {
    var options = {
      host: 'www.google.com',
      path: '/finance/option_chain?q='+symbol+'&output=json'
    };
    callback = function(response) {
      var str = '';

      //another chunk of data has been recieved, so append it to `str`
      response.on('data', function (chunk) {
        str += chunk;
      });

      //the whole response has been recieved, so we just print it out here
      response.on('end', function () {
        var sjson = JSON.stringify(eval("(" + str + ")"));

        var quotes=JSON.parse(sjson);
        var db=SpahQL.db(quotes);
        var expiry=new Date(db.select("/expiry/y"),db.select("/expiry/m"),db.select("/expiry/d"));
        callback({
          expiry:expiry})
      });
    }
    http.request(options, callback).end();
    return "Le quote de "+exp;
  }
}