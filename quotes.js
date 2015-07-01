/**
 * Created by info2301 on 2015/06/26.
 */
var http = require('http');
var request = require('request');

module.exports = {
    getOptionQuotes: function (body, options) {
        var sjson = JSON.stringify(eval("(" + body + ")"));
        var quotes = JSON.parse(sjson);
        var qta = [];
        var x = 0;
        var i = 0;
        for (var x = 0; x < quotes.calls.length; ++x) {
            if (options['nozint'] != undefined && quotes.calls[x].oi == 0) continue;
            if (options['strikeover'] != undefined && (quotes.calls[x].strike < quotes.underlying_price)) continue;
            var qtl = [];
            qtl[0] = quotes.calls[x].expiry;
            qtl[1] = quotes.underlying_price;
            qtl[2] = quotes.calls[x].strike;
            qtl[3] = quotes.calls[x].b;
            qtl[4] = quotes.calls[x].a;
            qtl[5] = quotes.calls[x].p;
            qtl[6] = quotes.calls[x].oi;
            qtl[7] = getYield(quotes.calls[x].strike,quotes.underlying_price);
            qta[i++] = qtl;

        }
        return qta;

    },
    getAllExpiry: function(body) {
        var sjson = JSON.stringify(eval("(" + body + ")"));
        var quotes = JSON.parse(sjson);
        return quotes.expirations;
    }
}

function getYield(m1,m2) {
    return ((m1 - m2)/m2).toPrecision(2) * 100;
}