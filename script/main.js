//Steps to take: 
//1. functions for earth and mars time zone
//2. add variables to functions 
//3. make the clock visible 


//Get the current time per user + AM PM format
function earthClock () {;
	var eClock = new Date(); 
	
	var hours = eClock.getHours();
	var minutes = eClock.getMinutes(); 
	var seconds = eClock.getSeconds();


    var amPM = (hours < 12) ? "AM" : "PM";

//Display the current time 
    document.getElementById('time').innerHTML = 
    hours + " : "+ minutes + " : " +seconds + "" + amPM;
	var t = setTimeout(earthClock, 500); 

}