


/*
So here is a summary of what works: 
Upon the page loading there is a button for the user to interact with,
upon the user clicking the "start game" button the following things follow that click event:

1.)The "start button" disappears from view using the ".hide" method,

2.)The previously hidden "time remaining" element becomes visible utilizing the ".show" method,

3.)The timer displayed in the the "time remaining" element begins decrementing utilizing a function 'countDown'

4.)The question that is contained within the quizQuestions object - which is an array of objects is displayed using
the displayQuestion function.  This process involves utilizing a random number generator to pull a number from the array
and then pushing into the html the question property of that indexed object within the array.

*/ 


/*
Here is a summary of what is left to do:

1.)Write jQuery code that creates either buttons or clickable text that corresponds with the answers contained in the quizQuestions
object array. These created elements must reference the index of the answer array within the id.

2.)Write a click event function corresponding to the buttons or clickable text that will pass the clicked element's id 
to a conditional statement that compares the index id of the clicked element to correctChoice.

3.)Utilize the outcome of the previous conditional to increment questionsRight and questionsWrong

4.)Write a displayAnswers function that takes the index of the displayQuestion function and calls the same index
for the answer choices

5.)Write the logic to ensure that once a question and its respective answers are passed through the displayQuestion
function that it is not repeated.

6.)Write the code to display results upon answering the next question

7.)Write the code to create a button that will give the user the option to reset the game
*/



var userChoice;

var questionsRight = 0;

var questionsWrong = 0;

var timeLeft = 30;

var quizQuestions = [{
        question: "Kid and Play made their motion picture debut in House Party. What other rap duo were considered by New Line Cinema to star in the lead roles?",
        answers: ["Slick Rick and Doug E. Fresh","Salt N Pepa","DJ Jazzy Jeff and The Fresh Prince","Eric B. & Rakim"],
        correctChoice: 2
        }, {
        question: "Which 1980's film featured Ice-T in a cameo role for his on-screen debut?",
        answers: ["Breakin'","Beatstreet","Krush Groove","Wild Style"],
        correctChoice: [0]
        }, {
        question: "2pac appeared alongside real life friend Jada Pinkett on what 90's sitcom?",
        answers: ["Living Single","A Different World","The Fresh Prince of Bel-Air","Martin"],
        correctChoice: [1]
        }, {
        question: "Martial arts action star Jet Li co-starred alongside which rapper/actor in the films 'Romeo Must Die' and 'Cradle 2 the Grave'?",
        answers: ["Will Smith","The RZA","DMX","Ludacris"],
        correctChoice: [2]
        }, {
        question: "Which rap record label has a film subsidiary that during the late 90's produced the films' I Got The Hook Up', 'Foolish' and a string of direct to home video releases?",
        answers: ["Death Row","Cash Money","Roc-A-Fella","No Limit"],
        correctChoice: [3]
        }, {
        question: "Which of the following rappers have NOT collaborated on the big screen with director F. Gary Gray?",
        answers: ["2Pac","Ice Cube","Andre 3000","Queen Latifah"],
        correctChoice: [0]
        },
    ];

    function numGenerator(x){
        return Math.floor((Math.random() * x.length));
      }

$(document).ready(function(){
    $("#game-timer").hide();
    $("#question-box").hide();
    $("#answer-box").hide();

    $("button").click(function(){
        function displayQuestion() {
            $("#question").html(quizQuestions[numGenerator(quizQuestions)].question);
        }
        displayQuestion();
        
        
        $("button").hide();
        $("#game-timer").show();
        $("#question-box").show();
        $("#answer-box").show();
        $(".user-answer-choice").click(function(){
            console.log("you clicked")
        })
        function countDown(){
            
            $("#game-timer").text("Time Remaining:"+ timeLeft)
            timeLeft--;
        }
        var intervalCtdn = setInterval(countDown,1000);
        setTimeout (x,31000);
        function x (){
            clearInterval(intervalCtdn);
        }
        
        for (var i = 0; i < quizQuestions.length; i++) {
            var gifDiv = $("<div class='item'>");

            // var rating = results[i].rating;

            // var userAnswerChoices = $("<p>").text("Rating: " + rating);

            var userAnswerChoices = $("<p>");
            personImage.addClass("src", quizQuestions[i].answers);

            gifDiv.prepend(userAnswerChoices);
            gifDiv.prepend(personImage);

            $("#gifs-appear-here").prepend(gifDiv);
          }
        
        
    });
    
})

