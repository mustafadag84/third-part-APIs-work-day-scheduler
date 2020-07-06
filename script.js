// used the Moment.js library to work with date and time
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

    timeBlock2 = moment().startOf('day').add(10, "hours");
    currentTime = currentTime.startOf("hour");
    if(currentTime.isAfter(timeBlock2)){
        $(".form10").addClass("past");
    }else if(currentTime.isBefore(timeBlock2)){
        $(".form10").addClass("future");
    }else if(currentTime.isSame(timeBlock2)){
        $(".form10").addClass("present");
    };
    
    timeBlock3 = moment().startOf('day').add(11, "hours");
    currentTime = currentTime.startOf("hour");
    if(currentTime.isAfter(timeBlock3)){
        $(".form11").addClass("past");
    }else if(currentTime.isBefore(timeBlock3)){
        $(".form11").addClass("future");
    }else if(currentTime.isSame(timeBlock3)){
        $(".form11").addClass("present");
    };

    timeBlock4 = moment().startOf('day').add(12, "hours");
    currentTime = currentTime.startOf("hour");
    if(currentTime.isAfter(timeBlock4)){
        $(".form12").addClass("past");
    }else if(currentTime.isBefore(timeBlock4)){
        $(".form12").addClass("future");
    }else if(currentTime.isSame(timeBlock4)){
        $(".form12").addClass("present");
        console.log(currentTime)
    };

    timeBlock5 = moment().startOf('day').add(13, "hours");
    currentTime = currentTime.startOf("hour");
    if(currentTime.isAfter(timeBlock5)){
        $(".form1").addClass("past");
    }else if(currentTime.isBefore(timeBlock5)){
        $(".form1").addClass("future");
    }else if(currentTime.isSame(timeBlock5)){
        $(".form1").addClass("present");
    };
    timeBlock6 = moment().startOf('day').add(14, "hours");
    currentTime = currentTime.startOf("hour");
    if(currentTime.isAfter(timeBlock6)){
        $(".form2").addClass("past");
    }else if(currentTime.isBefore(timeBlock6)){
        $(".form2").addClass("future");
    }else if(currentTime.isSame(timeBlock6)){
        $(".form2").addClass("present");
    };
    timeBlock7 = moment().startOf('day').add(15, "hours");
    currentTime = currentTime.startOf("hour");
    if(currentTime.isAfter(timeBlock7)){
        $(".form3").addClass("past");
    }else if(currentTime.isBefore(timeBlock7)){
        $(".form3").addClass("future");
    }else if(currentTime.isSame(timeBlock7)){
        $(".form3").addClass("present");
    };
    timeBlock8 = moment().startOf('day').add(16, "hours");
    currentTime = currentTime.startOf("hour");
    if(currentTime.isAfter(timeBlock8)){
        $(".form4").addClass("past");
    }else if(currentTime.isBefore(timeBlock8)){
        $(".form4").addClass("future");
    }else if(currentTime.isSame(timeBlock8)){
        $(".form4").addClass("present");
    };
    timeBlock9 = moment().startOf('day').add(17, "hours");
    currentTime = currentTime.startOf("hour");
    if(currentTime.isAfter(timeBlock9)){
        $(".form5").addClass("past");
        
    }else if(currentTime.isBefore(timeBlock9)){
        $(".form5").addClass("future");
    }else if(currentTime.isSame(timeBlock9)){
        $(".form5").addClass("present");
    };

}

inception();
console.log(inception)

var h = [9, 10, 11, 12, 1, 2, 3, 4, 5];
for (var i = 0; i < h.length; i++){
    var hourData = localStorage.getItem(h[i]);
    $(".form" + h[i]).val(hourData);
}

$(".saveBtn").click(function(){
    event.preventDefault();
    var formInput = $(this).siblings(".form-control").val();
    var listInput = $(this).parent().data("hour");
    localStorage.setItem(listInput,formInput);
    console.log("@@@@@")   
})