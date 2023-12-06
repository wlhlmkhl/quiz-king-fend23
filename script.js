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
let rightAnswers = 0;

function updateTitle(){
    title.textContent= `Question ${currentIndex + 1} of ${questions.length}`
};
function processAnswer(elem){
    //get siblings and selected
    let siblings = Array.from(elem.target.parentNode.children).filter(function (sibling) {
        return sibling !== elem.target;});
    let selected = elem.target;
    //give class
        if(selected.value === "true"){
            selected.classList.add("correct");
            rightAnswers++;
        }
        else{
            selected.classList.add("incorrect");
        }
    siblings.forEach((sibling)=>{
        sibling.disabled = true;
    })
    
};

//Start Game!
startBtn.addEventListener("click", startGame);
function startGame(){
    startBtn.classList.add("hide");
    nextBtn.classList.remove("hide");
    questionText.classList.remove("hide");
    updateTitle();
    currentIndex = 0;
    answerContainer.innerHTML ="";
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
//display next question
nextBtn.addEventListener("click", nextQuestion);
function nextQuestion(){
        currentIndex++;
        updateTitle();
        answerContainer.innerHTML="";
        showQuestion(currentIndex);
    
    
};
//Capture the right answer
answerContainer.addEventListener("click", (elem)=>{
//1. Disable alla sibilings
processAnswer(elem);
//2. Ta bort classen selected från alla siblings
if(questions.length === currentIndex + 1){
    startBtn.textContent = 'Restart';
    startBtn.classList.remove("hide");
}
else
    nextBtn.classList.remove("hide");
});
