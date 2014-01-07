Moment-ferie-fr
===============

Plug-in [Moment.js][1] jours feriés en France 


exemple utilisation:
-----------

    var day = moment("9-6-2014", "DD-MM-YYYY");

    console.log( day.isFerie() );  // boolean
    console.log( day.getFerie() ); // string, 'Penteĉote'
  
    console.log( day.getFerieList() ); // array, liste jours feriés de l'année de day
    console.log( moment().getFerieList(2018) );  // array, liste jours feriés de l'année 2018
  
    console.log( day.lundiDePaques() ); // momentObj, jour de paques de l'année de day
    console.log( moment().lundiDePaques(2018) ); // momentObj, jour de paques de l'année 2018
  
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
  
  

  [1]: http://momentjs.com/
