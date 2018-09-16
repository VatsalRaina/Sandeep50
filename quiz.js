// window.alert(questions[0].question)

//set an overall counter for the question number
var questionCounter = 0;

//global variable for number of questions
const LAST = 10;

// Get the modal
var modal = document.getElementById('modal');

// Get the button that opens the modal
var btn = document.getElementById("openModalButton");

// Get the button element that closes the modal
var close = document.getElementById("exitModalButton");

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on close button, close the modal
close.onclick = function() {
    modal.style.display = "none";
    window.alert("you got a score of "+questionCounter);
    location.reload();
}

//function to display current question
function displayQuestion(){
    document.getElementById("modal-header").innerHTML="QUESTION "+(questionCounter+1);
    document.getElementById("question").innerHTML=questions[questionCounter].question;
    document.getElementById("A").innerHTML=questions[questionCounter].A;
    document.getElementById("B").innerHTML=questions[questionCounter].B;
    document.getElementById("C").innerHTML=questions[questionCounter].C;
    document.getElementById("D").innerHTML=questions[questionCounter].D;
}

//display first question
displayQuestion();

//When answer is chosen
function answerMade(answer){


    //check to see if the answer is correct
    if(answer.id==questions[questionCounter].correct){

        window.setTimeout(correct,1000,answer);
        answer.style.backgroundColor="green";
    }
    else{
        //logic to exit game and save the user's score
        window.setTimeout(wrong,1000);
        answer.style.backgroundColor="red";
    }
}

function correct(answer){
    
        //logic to move forward
        questionCounter=questionCounter+1;

        //check to see this is last question
        if(questionCounter==LAST){
            //deal with end scenario
            window.alert("YOU ARE DONE! Congratulations you must be very close to Sandeep to know him so well.")
        }

        displayQuestion();
        //clear color of all labels
        answer.style.backgroundColor="white";
}

function wrong(){
    window.alert("Gameover");
    window.alert("You got a score of "+questionCounter);
    modal.style.display="none";
    location.reload();
}