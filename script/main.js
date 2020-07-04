//Steps to take: 
//1. functions for earth and mars time zone
//2. add variables to functions 
//3. add leading zeros
//3. make the clock visible 


//Get the current time per user + AM PM format
function earthClock () {;
	var eClock = new Date(); 
	
	var hours = eClock.getHours();
	var minutes = eClock.getMinutes(); 
	var seconds = eClock.getSeconds();

    var amPM = (hours < 12) ? "AM" : "PM";
	
//Add leading zeros
    hours = ("0" + hours).slice(-2);
	minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);
	
	
//Display the current time 
    document.getElementById('time').innerHTML = 
    hours + " : "+ minutes + " : " +seconds + "" + amPM;
	var t = setTimeout(earthClock, 500); 

}
