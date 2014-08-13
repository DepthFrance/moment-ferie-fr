var moment = require("./moment-ferie-fr");
var assert = require("assert");

var y2014 = moment("2014", "YYYY");
assert.equal(true, (y2014.noel().isSame("12-25-2014")));
assert.equal(y2014.noel().format("DD/MM/YYYY"), "25/12/2014");
assert.equal(y2014.lundiDePaques().format("DD/MM/YYYY"), "21/04/2014");
assert.equal(y2014.ascension().format("DD/MM/YYYY"), "29/05/2014");
assert.equal(y2014.pentecote().format("DD/MM/YYYY"), "09/06/2014");
assert.equal(y2014.jourDeLAn().format("DD/MM/YYYY"), "01/01/2014");
assert.equal(y2014.feteDuTravail().format("DD/MM/YYYY"), "01/05/2014");
assert.equal(y2014.victoireDeAllies().format("DD/MM/YYYY"), "08/05/2014");
assert.equal(y2014.feteNationale().format("DD/MM/YYYY"), "14/07/2014");
assert.equal(y2014.assomption().format("DD/MM/YYYY"), "15/08/2014");
assert.equal(y2014.toussaint().format("DD/MM/YYYY"), "01/11/2014");
assert.equal(y2014.armistice().format("DD/MM/YYYY"), "11/11/2014");

process.exit(0);