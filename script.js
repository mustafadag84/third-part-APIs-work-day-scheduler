// use the Moment.js library to work with date and time
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));

var currentTime = moment();

currentTime = currentTime.startOf("hour");

var pastTime = moment().startOf('day').add(9, "hours");
console.log(currentTime);

// all my variables goes here
var timeBlock1 = pastTime.add(0, "h");
timeBlock1 = timeBlock1.format('hh:mm A');
$(".block1").text(timeBlock1);

var timeBlock2 = pastTime.add(1, "h");
timeBlock2 = timeBlock2.format('hh:mm A');
$(".block2").text(timeBlock2);

var timeBlock3 = pastTime.add(1, "h");
timeBlock3 = timeBlock3.format('hh:mm A');
$(".block3").text(timeBlock3);

var timeBlock4 = pastTime.add(1, "h");
timeBlock4 = timeBlock4.format('hh:mm A');
$(".block4").text(timeBlock4);

var timeBlock5 = pastTime.add(1, "h");
timeBlock5 = timeBlock5.format('hh:mm A');
$(".block5").text(timeBlock5);

var timeBlock6 = pastTime.add(1, "h");
timeBlock6 = timeBlock6.format('hh:mm A');
$(".block6").text(timeBlock6);

var timeBlock7 = pastTime.add(1, "h");
timeBlock7 = timeBlock7.format('hh:mm A');
$(".block7").text(timeBlock7);

var timeBlock8 = pastTime.add(1, "h");
timeBlock8 = timeBlock8.format('hh:mm A');
$(".block8").text(timeBlock8);

var timeBlock9 = pastTime.add(1, "h");
timeBlock9 = timeBlock9.format('hh:mm A');
$(".block9").text(timeBlock9);

function inception(){
    timeBlock1 = moment().startOf('day').add(9, "hours");
    currentTime = currentTime.startOf("hour");
    if(currentTime.isAfter(timeBlock1)){
        $(".form9").addClass("past");
    }else if(currentTime.isBefore(timeBlock1)){
        $(".form9").addClass("future");
    }else if(currentTime.isSame(timeBlock1)){
        $(".form9").addClass("present");
    };
    

}