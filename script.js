$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));

var currentTime = moment();

currentTime = currentTime.startOf("hour");

var pastTime = moment().startOf('day').add(9, "hours");
console.log(currentTime);

var timeBlock1 = pastTime.add(0, "h");
timeBlock1 = timeBlock1.format('hh:mm A');
$(".block1").text(timeBlock1);

var timeBlock2 = pastTime.add(1, "h");
timeBlock2 = timeBlock2.format('hh:mm A');
$(".block2").text(timeBlock2);