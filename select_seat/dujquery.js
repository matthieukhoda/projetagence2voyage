$ . ajax ({ 
  url : 'https://api.aviationstack.com/v1/flights' , 
  data : { 
    access_key : 'YOUR_ACCESS_KEY' }, 
  dataType : 'json' , 
  success : function ( apiResponse ) { if ( Array . isArray ( apiResponse [ 'results' ])) { 
      apiResponse [ 'results' ]. forEach ( flight => { if   
     
       
         (! flight [ 'live' ] [ 'is_ground' ]) { 
          console . log ( `$ {vol ['compagnie aérienne'] ['nom']} vol $ {vol ['vol'] ['iata']}` , `de $ {vol ['départ'] ['aéroport']} ($ {vol ['départ'] ['iata']}) ` , ` vers $ {vol ['arrivée'] ['aéroport']} ($ {vol ['arrivée'] ['iata']}) est dans l'air. » ); } }); } } }); 
              
              
        
      
    
  