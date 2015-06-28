/**
 * Created by info2301 on 2015/06/26.
 */
var http = require('http');
var request = require('request');
//var SpahQL= require('SpahQL');
module.exports = {
  getOptionQuotes: function(body) {
      var sjson = JSON.stringify(eval("(" + body + ")"));
      var quotes = JSON.parse(sjson);

      //var db = SpahQL.db(quotes);
      var qta = [];
      var x=0;
      //for (var x=0;x<db.select("/calls").value().length;++x) {
          var qtl=[];
      qtl[0]="juillet 7";
      qtl[1]="12.50"
          //qtl[0] = db.select("/calls/"+x+"/expiry");
          //qtl[1] = db.select("/calls/"+x+"/s");
          qta[x]=qtl;
      // }

      return qta;

  }
}