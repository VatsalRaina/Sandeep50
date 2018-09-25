//global variable for overall score
var tot = 0;

//set an overall counter for the question number
var questionCounter = 0;

//global variable for number of questions per section
const LAST = 10;

//set global variable for correct list of questions
var questions;

//set global variable to hold list of scores for reach section
var scores = [0,0,0,0,0];

//store index of the option
var option;

// Get the modals
var modalQuestions = document.getElementById('modalQuestions');
var modalOptions = document.getElementById('modalOptions');


//function to open Options Modal
function openOptionsModal(btnOption) {
    modalOptions.style.display = "block";
}

//function to open Questions Modal
function openQuestionsModal(btnOption) {
    modalQuestions.style.display = "block";
    modalOptions.style.display = "none";
    btnOption.disabled=true;
    questionCounter = 0;

    
    //determine index of option
    for (cat = 0; cat < 5; cat++){
        if (data[cat].category == btnOption.id){
            option = cat;
        }
    }

    questions = data[option].categoryQuestions;

    //display correct first question
    document.getElementById("modal-title").innerHTML = btnOption.id;
    displayQuestion();
}

//function to quit Options modal
function quit() {
    modalOptions.style.display = "none";
    location.reload();
}

//function to giveup a section
function giveup() {
    modalQuestions.style.display = "none";
    modalOptions.style.display = "block";
    scores[option] = questionCounter;
    updateScore();
}


//function to display the next question
function displayQuestion() {
    document.getElementById("modal-header").innerHTML="QUESTION "+(questionCounter+1);
    document.getElementById("question").innerHTML=questions[questionCounter].question;
    document.getElementById("A").innerHTML=questions[questionCounter].A;
    document.getElementById("B").innerHTML=questions[questionCounter].B;
    document.getElementById("C").innerHTML=questions[questionCounter].C;
    document.getElementById("D").innerHTML=questions[questionCounter].D;
}


//When answer is chosen
function answerMade(answer){

    //check to see if the answer is correct
    if(answer.id==questions[questionCounter].correct){

        window.setTimeout(correct,1000,answer);
        answer.style.backgroundColor="green";
    }
    else{
        //logic to exit section
        window.setTimeout(wrong,1000, answer);
        answer.style.backgroundColor="red";
    }
}

function correct(answer){
    
        //logic to move forward
        questionCounter=questionCounter+1;

        //check to see this is last question
        if(questionCounter==LAST){
            //deal with end scenario
            window.alert("DONE - 100% in this section!")
        }

        displayQuestion();
        //clear color of all labels
        answer.style.backgroundColor="aqua";
}

function wrong(answer){
    modalQuestions.style.display="none";
    modalOptions.style.display ="block";
    //clear color of all labels
    answer.style.backgroundColor="aqua";
    scores[option] = questionCounter;
    updateScore();
}

//function to update the score
function updateScore() {
    var lbl = document.getElementById('label '+option);
    lbl.innerHTML = scores[option]+'/10';
    lbl.style.fontSize = '200%';

    if (scores[option]<5){
        lbl.style.textShadow = '2px 2px 8px #FF0000';
    } else {
        lbl.style.textShadow = '2px 2px 8px #A5D158';
    }

    //overall score
    tot = tot + scores[option];
    document.getElementById('total').innerHTML = 'TOTAL: ' + tot;
}