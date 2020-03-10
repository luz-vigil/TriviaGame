
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
      question: "'It's a Dinglehopper!'",
      answers: ["A Bug's Life", "The Little Mermaid", "Toy Story", "The Lion King"],
      correctAnswer: "The Little Mermaid"
    },
    {
      question: "'Yesterday is history, tomorrow is a mystery, and today is a gift...that is why they call it the present.'",
      answers: ["The Karate Kid", "Chicken Little", "Kung Fu Panda", "The Lion King"],
      correctAnswer: "Kung Fu Panda"
    },
    {
      question: "'Oh, yes, the past can hurt. But from the way I see it, you can either run from it, or learn from it.'",
      answers: ["Tangled", "Kung Fu Panda", "Toy Story", "The Lion King"],
      correctAnswer: "The Lion King"
    },
    {
      question: "'I'm sorry I bit you... and pulled your hair... and punched you in the face...'",
      answers: ["Moana", "Lilo & Stitch", "Toy Story 2", "Tangled"],
      correctAnswer: "Lilo & Stitch"
    },
    {
      question: "'Whatever just happened... Blame it on the pig.'",
      answers: ["Moana", "Babe", "Toy Story 3", "Sing"],
      correctAnswer: "Moana"
    },
    {
      question: "'If you can't say something nice...don't say nothing at all'",
      answers: ["Dumbo", "Lilo & Stitch", "Bambi", "Cinderella"],
      correctAnswer: "Bambi"
    },
    {
      question: "'No matter how your heart is grieving, if you keep on believing, the dream that you with can come true.'",
      answers: ["Moana", "Beauty and the Beast", "Cinderella", "Tangled"],
      correctAnswer: "Cinderella"
    },
    {
      question: "'Some people are worth melting for.'",
      answers: ["Moana", "Abominable", "Frozen", "Tangled"],
      correctAnswer: "Frozen"
    },
    
    {
      question: "'If you only do what you can do, you'll never be more than you are now.'",
      answers: ["Frozen", "Kung Fu Panda 3", "Toy Story", "The Lion King"],
      correctAnswer: "Kung Fu Panda 3"
    },
    {
      question: "'You uncultured swine!'",
      answers: ["A Bug's Life", "The Little Mermaid", "Toy Story", "The Lion King"],
      correctAnswer: "Toy Story"
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