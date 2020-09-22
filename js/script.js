//get both date inputs
var departure_date = document.getElementById('departure-date');
var return_date = document.getElementById('return-date');

//erase both date values
departure_date.value = "";
return_date.value = "";


//gets the actual date
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();
 if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 

today = yyyy+'-'+mm+'-'+dd;



//set today as minimum attribute for departure date input
departure_date.setAttribute('min', today);