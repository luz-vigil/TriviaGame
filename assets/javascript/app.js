
$(document).ready(function () {
  $("#startBtn").show();
  var countDownTime = new Time("5 minutes").getTime();

  var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    var minutes = Math.floor((distance % (1000 * 60 * 5)) / (1000 * 60));

    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("time-left").innerHTML = "All Done!";
    }
  }, 1000);
  // Question set
  var questionList = [
    {
      question: "What was the first full length CGI movie?",
      answers: ["A Bug's Life", "Monsters Inc.", "Toy Story", "The Lion King"],
      correctAnswer: "Toy Story"
    },
    {
      question: "Which of these is NOT a name of one of the Spice Girls?",
      answers: ["Sporty Spice", "Fred Spice", "Scary Spice", "Posh Spice"],
      correctAnswer: "Fred Spice"
    }];


  function gameBegin() {
    $("#quizSection").toggle();
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    //looping through all the questions
    for (var i = 0; i < questionList.length; i++) {
      var newQuestion = $("<div>");
      newQuestion.addClass("question");
      newQuestion.text(questionList[i].question);
      console.log(lquestionList[i].question)
      $("#quizSection").append(newQuestion);
      //looping through all the answers for a question
      console.log(questionList[i].answers.length)
      for (var j = 0; j < questionList[i].answers.length; j++) {
        console.log(questions[i].answers[j])
        //$("#quizSection").append("<input type='radio' name='question-" + i +
          //"' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
          
          $("#quizSection").append("<button class='answer-button' id='button' data-name='" + questionList[i].answers[j]
          + "'>" + questionList[i].answers[j] + "</button>")
      }
      
    }
  }
  $("#startBtn").on("click", function () {
    $("#startBtn").hide();
    gameBegin();
  });
});