let startBtn = document.querySelector("#start-btn");
let nextBtn = document.querySelector("#next-btn");
let questionText = document.querySelector("#question-text");
let answerContainer = document.querySelector("#answer-container");
let title = document.querySelector("#title");

let currentIndex = 0;
let rightAnswers = [];
function updateTitle(){
    title.textContent= `Question ${currentIndex + 1} of ${questions.length}`
}
//Start Game!
startBtn.addEventListener("click", startGame);
function startGame(){
    startBtn.classList.add("hide");
    nextBtn.classList.remove("hide");
    questionText.classList.remove("hide");
    updateTitle();
    showQuestion(currentIndex);
};

//Function for question
function showQuestion(index){
    questionText.textContent = questions[index].question;
    questions[index].answers.forEach((answer)=>{
        let btn = document.createElement("button");
        btn.classList.add("btn");
        btn.innerHTML = answer.text;
        btn.value = answer.correct;
        answerContainer.appendChild(btn);
        nextBtn.classList.add("hide");

    })};
// Display next question

// if (shuffledQuestions.length > currentQuestionIndex + 1) {
//     nextButton.classList.remove('hide')
//   } else {
//     startButton.innerText = 'Restart'
//     startButton.classList.remove('hide')
//   }
// }
nextBtn.addEventListener("click", nextQuestion);
function nextQuestion(){
        currentIndex++;
        updateTitle();
        answerContainer.innerHTML="";
        showQuestion(currentIndex);
    
    
};
//Capture the right answer
answerContainer.addEventListener("click", (event)=>{
let ans = event.target.value;
//1. Disable alla sibilings

//2. Ta bort classen selected från alla siblings

event.target.classList.add("selected");

if(questions.length === currentIndex + 1){

    startBtn.textContent = 'Restart';
    startBtn.classList.remove("remove");
}
else{
    nextBtn.classList.remove("hide");
}


});
