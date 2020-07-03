$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));

var currentTime = moment();

currentTime = currentTime.startOf("hour");

var pastTime = moment().startOf('day').add(9, "hours");
console.log(currentTime);
