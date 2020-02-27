

var countDownTime = new Time("5 minutes").getTime();

var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  var minutes = Math.floor((distance % (1000 * 60 * 5)) / (1000 * 60));

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML =  minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time-left").innerHTML = "All Done!";
  }
}, 1000);

function gameBegin() {
    $("#startBtn").on("click", function () {
        $(this).hide();
        $("#quizSection").toggle();
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        for (var i = 0; i < libraryOfInfo.length; i++) {
            var newQuestion = $("<div>");
            newQuestion.addClass("question");
            newQuestion.text(libraryOfInfo[i].question);
            console.log(libraryOfInfo[i].question)
            $("#content").append(newQuestion)