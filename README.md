moment-ferie-fr
===============

Plug-in jours feriés en France pour Moment.js


exemple utilisation:
-----------

  var day = moment("9-6-2014", "DD-MM-YYYY");

  day.isFerie();  // boolean
  day.getFerie(); // titre 'Penteĉote'
  
  day.getFerieList(); // liste jours feriés de l'année de day
  moment().getFerieList(2018);  // liste jours feriés de l'année 2018
  
  day.lundiDePaques(); // jour de paques de l'année de day
  moment().lundiDePaques(2018); // jour de paques de l'année 2018
  
  /*
    idem pour:
    
    day.paques();
    day.lundiDePaques();
    day.ascension();
    day.pentecote();
    
    day.jourDeLAn();
    day.feteDuTravail();
    day.victoireDeAllies();
    day.feteNationale();
    day.assomption();
    day.toussaint();
    day.armistice();
    day.noel();
    
    */
  
  
  
