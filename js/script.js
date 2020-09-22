//get both date inputs
var departure_date = document.getElementById('departure-date');
var return_date = document.getElementById('return-date');


// erase both airport inputs
document.getElementById('departure-airport').value = "";
document.getElementById('arrival-airport').value = "";

//erase both date inputs
departure_date.value = "";
return_date.value = "";


//get the actual date
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


//set today as minimum attribute for departure date
departure_date.setAttribute('min', today);

//set departure date as minimum attribute for return date
departure_date.addEventListener('change', () => {
	return_date.setAttribute('min', departure_date.value);
})

//set actual date plus one year as maximum attribute for return date
return_date.setAttribute('max', yyyy+1+'-'+mm+'-'+dd);

