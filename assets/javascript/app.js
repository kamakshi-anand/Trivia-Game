var score = 0;
var incorrect = 0;
var check_value;
var unanswered = 0;


$(document).ready(function () {

    //---------------------------------------------------------------
    var intervalId;

    // prevents the clock from being sped up unnecessarily-------------------------
    var clockRunning = false;

    //create stopwatch object---------------
    //  alert("in")
    var stopwatch = {
        time: 120,

        reset: function () {
            clearInterval(intervalId);
            clockRunning = false;
            stopwatch.time = 120;
            //   stopwatch.lap = 1;

            $("#timer").text(stopwatch.time);
            //    alert("inside reset");
            // $("#laps").text("");
        },

        start: function () {
            //   alert("inside start");
            stopwatch.time = 120;
            //   alert("time in start funstion is " + stopwatch.time);
            //  alert(clockRunning);
            if (!clockRunning) {
                intervalId = setInterval(stopwatch.count, 1000);
                clockRunning = true;

            }

        },

        stop: function () {
            clearInterval(intervalId);
            clockRunning = false;
        },

        count: function () {
            //increment time by 1----------------------------
            //  alert("time in count funstion is " + stopwatch.time);
            if (stopwatch.time == 0) {
                alert("Time is up");
                clearInterval(intervalId);
                var scoreText = $(".score").html();
                $(".score").html(scoreText + score);
                //debugger;
                $(".score").css("font-size", "50px");
                $(".score").css("color", "green");
                $(".score").css("text-align", "center");

                //   debugger;
                //     alert($(".score").text());
                $(".score").show();
                $(".container").hide();
                $("#submit").hide();
                $(".start").show();
                stopwatch.reset();

            } else {
                stopwatch.time--;
            }
            //create a variable and pass the current time into stopwatch.converter function--------

            //   var converted = stopwatch.timeConverter(stopwatch.time);
            //ask anand about console.log--------------------------------------------very imp
            console.log(stopwatch.time);
            $("#timer").text(stopwatch.time + " Seconds");
        },


    };


    $(".btn-primary").on("click", function () {
        // stopwatch.stop();
        //  debugger;
        // alert(score);
        check_value = $("input[name='capradio']:checked").val();
        //   alert(!$('#selector:checked'));
        //alert("  " + check_value + " ");----------------------------------------------------------

        if (check_value == "1") {
            score++;
        } else if (check_value === undefined) {
            unanswered++;
        } else {
            incorrect++;
        }

        check_value = $("input[name='radio2']:checked").val();
        if (check_value == "3") {
            score++;
        } else if (check_value === undefined) {
            unanswered++;
        }
         else {
            incorrect++;
        }

        check_value = $("input[name='radiojack']:checked").val();
        if (check_value == "4") {
            score++;
        } else if (check_value === undefined) {
            unanswered++;
        } else {
            incorrect++;
        }


        check_value = $("input[name='radio4']:checked").val();
        if (check_value == "4") {
            score++;
        } else if (check_value === undefined) {
            unanswered++;
        } else {
            incorrect++;
        }


        check_value = $("input[name='radio5']:checked").val();
        if (check_value == "3") {
            score++;
        } else if (check_value === undefined) {
            unanswered++;
        } else {
            incorrect++;
        }

        check_value = $("input[name='radio6']:checked").val();
        if (check_value == "3") {
            score++;
        } else if (check_value === undefined) {
            unanswered++;
        } else {
            incorrect++;
        }
        check_value = $("input[name='radio7']:checked").val();
        if (check_value == "1") {
            score++;
        } else if (check_value === undefined) {
            unanswered++;
        } else {
            incorrect++;
        }

        check_value = $("input[name='radioeight']:checked").val();
        if (check_value == "1") {
            score++;
        } else if (check_value === undefined) {
            unanswered++;
        } else {
            incorrect++;
        }

        check_value = $("input[name='radionine']:checked").val();
        if (check_value == "1") {
            score++;
        } else if (check_value === undefined) {
            unanswered++;
        } else {
            incorrect++;
        }

        check_value = $("input[name='radio10']:checked").val();
        if (check_value == "3") {
            //  debugger;
            score++;
        } else if (check_value === undefined) {
            unanswered++;
        } else {
            incorrect++;
        }


        //alert(unanswered);---------------------------------------------------------------
        //   var scoreElement= $(".score").text();
        //  alert(scoreElement);
        $(".score").text($(".score").text() + score);
        alert($(".score").text());
        //     alert($(".score").text());
        $(".score").show();
        $(".score").css("font-size", "50px");
        $(".score").css("color", "green");
        $(".score").css("text-align", "center");


        $(".incorrecttext").text($(".incorrecttext").text() + incorrect);
        //  alert(incorrect);

        $(".incorrect").show();
        $(".incorrect").css("font-size", "50px");
        $(".incorrect").css("color", "green");
        $(".incorrect").css("text-align", "center");
// unanswered latest---------------------------------------------------------------------
        $(".unansweredtext").text($(".unansweredtext").text() + unanswered);
        //  alert(incorrect);

        $(".unanswered").show();
        $(".unanswered").css("font-size", "50px");
        $(".unanswered").css("color", "green");
        $(".unanswered").css("text-align", "center");

        //     alert($(".score").text());
        //    $(".score").show();

        $(".container").hide();
        $("#submit").hide();
        $(".start").show();
        //    btn btn-primary
        $(".start").hide();
        stopwatch.reset();


    });

    $(".btn-start").on("click", function () {
        //score=0;
        // incorrect=0;
        $(".container").show();
        $("#submit").show();
        $(".start").hide();
        // stopwatch.stop();
        //     $(".score").text("Score :");
        //    // $(".incorrect").text("Incorrect Answers :");
        //     $(".score").hide();
        //  //   $(".incorrect").hide();
        //     $("h1").css("padding-top", "20px");
        // alert($("input[name='capradio']:checked").val());
        //       $("#capradio").prop("checked", false);
        //    alert($("input[name='capradio']:checked").val());
        stopwatch.start();
        //    $("input[name='capradio']:checked").val();




    });

});