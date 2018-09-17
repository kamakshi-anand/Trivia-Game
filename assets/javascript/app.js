var score = 0;
var check_value;



$(document).ready(function () {

    //---------------------------------------------------------------
    var sec = 10;
    var time = setInterval(myTimer, 1000);

    function myTimer() {

        document.getElementById('timer').innerHTML = sec + "sec left";
        sec--;
        if (sec == 0) {
            clearInterval(time);
            alert("Time out!! :(");
        }
        //---------------------------------------------------------------------
    }
    
        $(".btn-primary").on("click", function () {

            check_value = $("input[name='capradio']:checked").val();
            if (check_value == "1") {
                score++;
            }

            check_value = $("input[name='radio2']:checked").val();
            if (check_value == "3") {
                score++;
            }

            check_value = $("input[name='radiojack']:checked").val();
            if (check_value == "4") {
                score++;
            }


            check_value = $("input[name='radio4']:checked").val();
            if (check_value == "4") {
                score++;
            }


            check_value = $("input[name='radio5']:checked").val();
            if (check_value == "3") {
                score++;
            }

            check_value = $("input[name='radio6']:checked").val();
            if (check_value == "3") {
                score++;
            }
            check_value = $("input[name='radio7']:checked").val();
            if (check_value == "1") {
                score++;
            }

            check_value = $("input[name='radioeight']:checked").val();
            if (check_value == "1") {
                score++;
            }

            check_value = $("input[name='radionine']:checked").val();
            if (check_value == "1") {
                score++;
            }

            check_value = $("input[name='radio10']:checked").val();
            if (check_value = "3") {
                score++;
            }

            alert("Score is " + score);
      
            // time=0;
            // alert("time is" + time);
            // myTimer();

        });
    
   
});