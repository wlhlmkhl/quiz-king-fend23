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
let counter = 0;

function updateTitle(){
    title.textContent= `Question ${currentIndex + 1} of ${questions.length}`
};

function processAnswer1(elem, counter){
    let selected = elem.target;
    //give class
    if(selected.value === "true"){
        selected.classList.add("correct");
        rightAnswers++;
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
    const maxSelections = 2;
    if (counter < maxSelections) {

        if (selected.value === "true") {
            selected.classList.add("correct");
        } else {
            selected.classList.add("incorrect");
        };
        counter++;

        // Disable the selected button after processing the answer
        selected.disabled = true;
    }
    else if(counter===maxSelections){
        console.log("blipp");
    };
    

       
};


//Start Game!
startBtn.addEventListener("click", startGame);
function startGame(){
    currentIndex = 0;
    updateTitle();
    startBtn.classList.add("hide");
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
        btn.classList.add("btn");
        btn.innerHTML = answer.text;
        btn.value = answer.correct;
        btn.dataset.type = questions[index].type;
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
if(elem.target!==answerContainer){

    if(elem.target.dataset.type ==="multiChoice"){
        processAnswer2(elem);
    }
    else{
        processAnswer1(elem);
    }
    if(questions.length === currentIndex + 1){
        startBtn.textContent = 'Restart';
        startBtn.classList.remove("hide");
    }
    else
    nextBtn.classList.remove("hide");
};
});
