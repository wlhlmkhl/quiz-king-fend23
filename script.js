// buttons
let startBtn = document.querySelector("#start-btn");
let nextBtn = document.querySelector("#next-btn");
let resultBtn = document.querySelector("#result-btn");
// divs & other
let questionText = document.querySelector("#question-text");
let answerContainer = document.querySelector("#answer-container");
let title = document.querySelector("#title");
// global variables and functions
let currentIndex = 0;
let playersAnswers = [];
let counter = 0;

function updateTitle(){
    title.textContent= `Question ${currentIndex + 1} of ${questions.length}`
};

function getAnswers() {
    let answers = Array.from(document.querySelectorAll(".correct, .incorrect"));

    let correctAnswers = answers.filter(answer => answer.classList.contains("correct"));
    let incorrectAnswers = answers.filter(answer => answer.classList.contains("incorrect"));

    let answerArraySize = Math.min(4, correctAnswers.length + incorrectAnswers.length);
// boolean som kollar att antalet rätt är lika stor som arrayen och inga incorrect.
    let allCorrect = correctAnswers.length === answerArraySize && incorrectAnswers.length === 0;


    let answerObject = {
        question: questionText.textContent,
        answers: Array.from({ length: answerArraySize }, (_, index) => {
            return {
                text: answers[index].textContent, 
                correct: answers[index].classList.contains("correct"),
            };
        }),
        allCorrect: allCorrect,
    };

    playersAnswers.push(answerObject); // Push answerObject into playersAnswers array
    console.log(answerObject);

    return answerObject;
};


function processAnswer1(elem, counter){
    let selected = elem.target;
    //give class
    if(selected.value === "true"){
        selected.classList.add("correct");
    }
    else{
        selected.classList.add("incorrect");
    };
    //disable sibling
    let siblings = Array.from(elem.target.parentNode.children).filter(function (sibling) {
        return sibling !== elem.target;});
        siblings.forEach((sibling)=>{
            sibling.disabled = true;
        });
       
    
};
function processAnswer2(elem){
    let siblings = Array.from(elem.target.parentNode.children);
    let selected = elem.target;
    const maxSelections = siblings.filter((sibling)=>{
        if(sibling.value === "true"){return sibling;}}).length;
    if (counter < maxSelections) {

        if (selected.value === "true") {
            selected.classList.add("correct");
        } 
        else {
            selected.classList.add("incorrect");
        };
        counter++;

        // behövs denna?
        selected.disabled = true;
    }
    else if(counter===maxSelections){
        siblings.forEach((sibling) => {
            sibling.disabled = true;});
        counter = 0;
    };
    

       
};


//Start Game!
startBtn.addEventListener("click", startGame);
function startGame(){
    currentIndex = 0;
    updateTitle();
    startBtn.classList.add("hide");
    resultBtn.classList.add("hide");

    nextBtn.classList.remove("hide");
    questionText.classList.remove("hide");
    answerContainer.innerHTML ="";
    showQuestion(currentIndex);
};

//Function for question
function showQuestion(index){

    questionText.textContent = questions[index].question;
    questions[index].answers.forEach((answer)=>{
        let btn = document.createElement("button");
        btn.classList.add("btn","answer-btn");
        btn.innerHTML = answer.text;
        btn.value = answer.correct;
        btn.dataset.type = questions[index].type;
        answerContainer.appendChild(btn);
        nextBtn.classList.add("hide");

    })};
//display next question & store answers
nextBtn.addEventListener("click", nextQuestion);
function nextQuestion(){  

        getAnswers();
        currentIndex++;
        updateTitle();
        answerContainer.innerHTML="";
        showQuestion(currentIndex);
    
    
};
//Capture answer
answerContainer.addEventListener("click", (elem)=>{
//Only buttons
if(elem.target!==answerContainer){
// Identify which type of question
    if(elem.target.dataset.type ==="multiChoice"){
        processAnswer2(elem);
    }
    else{
        processAnswer1(elem);
    }

    // Next Button or Restart button
    if(questions.length === currentIndex + 1){
        startBtn.textContent = 'Restart';
        startBtn.classList.remove("hide");
        resultBtn.classList.remove("hide");
    }
    else
    nextBtn.classList.remove("hide");
};
});
function showResults(){
    getAnswers();
    title.classList.add("hide");
    questionText.classList.add("hide");
    resultBtn.classList.add("hide");

    answerContainer.innerHTML="";
    let pointsCounter = 0;

    playersAnswers.forEach((object)=>{
        let text = document.createElement("p");
        text.textContent = object.question;
        object.answers.forEach((answer)=>{
            text.textContent += answer.text 
            if(answer.correct){
                console.log("blipp");
            }
        })
        

        answerContainer.appendChild(text);
    })

    
};
resultBtn.addEventListener("click", showResults);