var input = prompt('What is your name?')

function heyYouGotTheTime(){
  var currentTime   = new Date();
  var currentHour   = currentTime.getHours();
  var currentMinute = currentTime.getMinutes();
  var currentSecond = currentTime.getSeconds();
  var currentDay    = currentTime.getDay();
  var currentDate   = currentTime.getDate();
  var currentMonth  = currentTime.getMonth();
  var currentYear   = currentTime.getYear();
  var clockDisplay  = document.getElementById('clock');
  var timeOfDay     = 'AM';
  var greeting      = document.getElementById('greeting');
  var ending        = document.getElementById('ending');


  if (currentSecond < 10) { currentSecond = '0' + currentSecond }
  if (currentMinute < 10) { currentMinute = '0' + currentMinute }
  if (currentHour < 10)   { currentHour = '0' + currentHour }
  if (currentHour > 12)   { currentHour = currentHour - 12 ; timeOfDay = 'PM'};
  if (currentHour === 0)  { currentHour = 12 };
  if (currentDay === 1){
    currentDay = 'Monday'
  } else if(currentDay === 2){
    currentDay = 'Tuesday'
  } else if(currentDay === 3){
    currentDay = 'Wednesday'
  } else if(currentDay === 4){
    currentDay = 'Thursday'
  } else if(currentDay === 5){
    currentDay = 'Friday'
  } else if(currentDay === 6){
    currentDay = 'Saturday'
  } else if(currentDay === 7){
    currentDay = 'Sunday'
  }

  if (currentMonth === 1){
    currentMonth = 'JAN'
  } else if(currentMonth === 2){
    currentMonth = 'FEB'
  } else if(currentMonth === 3){
    currentMonth = 'MAR'
  } else if(currentDay === 4){
    currentMonth = 'APR'
  } else if(currentMonth === 5){
    currentMonth = 'MAY'
  } else if(currentMonth === 6){
    currentMonth = 'JUNE'
  } else if(currentMonth === 7){
    currentMonth = 'JUL'
  } else if(currentMonth === 8){
    currentMonth = 'AUG'
  } else if(currentMonth === 9){
    currentMonth = 'SEP'
  } else if(currentMonth === 10){
    currentMonth = 'OCT'
  } else if(currentMonth === 11){
    currentMonth = 'NOV'
  } else if(currentMonth === 12){
    currentMonth = 'DEC'
  }

  currentYear = currentYear - 100 + 2000;

greeting.innerText = `And it is ${currentDay}, my dudes.`

clockDisplay.innerText = `
        ${currentMonth} ${currentDate}th ${currentYear}

${currentHour} : ${currentMinute} : ${currentSecond} ${timeOfDay}
`;

body.classList.remove('night');
body.classList.remove('evening');
body.classList.remove('morning')


if(timeOfDay === 'AM'){
  ending.innerHTML = `GOOD MORNING, ${input}! Today is...`;
  body.classList.add('morning');
} else {
  if(currentHour < 4){
    ending.innerHTML = `GOOD AFTERNOON, ${input}! Today is...`;
    body.classList.add('evening');
  } else if(currentHour > 4 && currentHour < 9){
    ending.innerHTML = `GOOD EVENING, ${input}! Today is...`;
    body.classList.add('evening');
  } else {
    ending.innerHTML = `GOOD NIGHT, ${input}! Today is...`;
    body.classList.add('night');
  }
}

}



// window.addEventListener('onload', alertGreeting)


heyYouGotTheTime();

setInterval(heyYouGotTheTime, 1000)
