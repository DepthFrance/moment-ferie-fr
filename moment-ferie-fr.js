// https://github.com/damienlabat/moment-ferie-fr
(function () {

  "use strict";

  var initialize = function (moment) {

    // Source: http://techneilogy.blogspot.fr/2012/02/couple-of-years-ago-i-posted-source.html
    moment.fn.easterDay = moment.fn.paques = function (Y) {
      if (Y === undefined) {
        Y = this.year();
      }
      var a = Y % 19;
      var b = Math.floor(Y / 100);
      var c = Y % 100;
      var d = Math.floor(b / 4);
      var e = b % 4;
      var f = Math.floor((b + 8) / 25);
      var g = Math.floor((b - f + 1) / 3);
      var h = (19 * a + b - d - g + 15) % 30;
      var i = Math.floor(c / 4);
      var k = c % 4;
      var l = (32 + 2 * e + 2 * i - h - k) % 7;
      var m = Math.floor((a + 11 * h + 22 * l) / 451);
      var n0 = (h + l + 7 * m + 114);
      var n = Math.floor(n0 / 31) - 1;
      var p = n0 % 31 + 1;
      var date = new Date(Y, n, p);
      return moment(date);
    };

    moment.fn.lundiDePaques = function (Y) {
      if (Y === undefined) {
        Y = this.year();
      }
      return moment.fn.paques(Y).add(1, "days");
    };

    moment.fn.ascension = function (Y) {
      if (Y === undefined) {
        Y = this.year();
      }
      return moment.fn.paques(Y).add(39, "days");
    };

    moment.fn.pentecote = function (Y) {
      if (Y === undefined) {
        Y = this.year();
      }
      return moment.fn.paques(Y).add(50, "days");
    };

    moment.fn.jourDeLAn = function (Y) {
      if (Y === undefined) {
        Y = this.year();
      }
      return moment("1-1-" + Y, "DD-MM-YYYY");
    };

    moment.fn.feteDuTravail = function (Y) {
      if (Y === undefined) {
        Y = this.year();
      }
      return moment("1-5-" + Y, "DD-MM-YYYY");
    };

    moment.fn.victoireDeAllies = function (Y) {
      if (Y === undefined) {
        Y = this.year();
      }
      return moment("8-5-" + Y, "DD-MM-YYYY");
    };

    moment.fn.feteNationale = function (Y) {
      if (Y === undefined) {
        Y = this.year();
      }
      return moment("14-7-" + Y, "DD-MM-YYYY");
    };

    moment.fn.assomption = function (Y) {
      if (Y === undefined) {
        Y = this.year();
      }
      return moment("15-8-" + Y, "DD-MM-YYYY");
    };

    moment.fn.toussaint = function (Y) {
      if (Y === undefined) {
        Y = this.year();
      }
      return moment("1-11-" + Y, "DD-MM-YYYY");
    };

    moment.fn.armistice = function (Y) {
      if (Y === undefined) {
        Y = this.year();
      }
      return moment("11-11-" + Y, "DD-MM-YYYY");
    };

    moment.fn.noel = function (Y) {
      if (Y === undefined) {
        Y = this.year();
      }
      return moment("25-12-" + Y, "DD-MM-YYYY");
    };

    var listeFerie = {
      "Jour de l'an": moment.fn.jourDeLAn,
      "Fête du travail": moment.fn.feteDuTravail,
      "Victoire des alliés": moment.fn.victoireDeAllies,
      "Fête Nationale": moment.fn.feteNationale,
      "Assomption": moment.fn.assomption,
      "Toussaint": moment.fn.toussaint,
      "Armistice": moment.fn.armistice,
      "Noël": moment.fn.noel,
      "Pâques": moment.fn.paques,
      "Lundi de Pâques": moment.fn.lundiDePaques,
      "Ascension": moment.fn.ascension,
      "Pentecôte": moment.fn.pentecote
    };

    moment.fn.getFerieList = function (Y) {
      if (Y === undefined) {
        Y = this.year();
      }

      var res = [];
      for (var key in listeFerie) {
        if (listeFerie.hasOwnProperty(key)) {
          res.push({name: key, date: listeFerie[key](Y) });
        }
      }
      return res;
    };

    moment.fn.getFerie = function () {
      for (var key in listeFerie) {
        if (listeFerie.hasOwnProperty(key)) {
          if (this.isSame(listeFerie[key].call(this), 'days')) {
            return key;
          }
        }
      }
      return null;
    };

    moment.fn.isFerie = function () {
      return (this.getFerie() !== null);
    };

    moment.fn.isWeekEnd = function () {
      return (this.day() === 0 || this.day() === 6);
    };

    moment.fn.isWorkingDay = function () {
      return (!this.isWeekEnd() && !this.isFerie());
    };

    return moment;
  };

  if (typeof define === "function" && define.amd) {
    define("moment-ferie-fr", ["moment"], function (moment) {
      return this.moment = initialize(moment);
    });
  } else if (typeof module !== "undefined") {
    module.exports = initialize(require("moment"));
  } else if (typeof window !== "undefined" && window.moment) {
    this.moment = initialize(this.moment);
  }

}).call(this);