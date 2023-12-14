const questions = [
    {
        type:"trueOrFalse",
        question: 'There is better cheese in Sweden than in Norway?',
        answers: [
            { text: 'True', correct: true },
            { text: 'False', correct: false },
           
        ]

    },
    {
        type: "oneOfFour",
        question: 'What is the capital of France?',
        answers: [
            { text: 'Paris', correct: true },
            { text: 'Berlin', correct: false },
            { text: 'London', correct: false },
            { text: 'Madrid', correct: false }
        ]
    },

    {   
        type:"multiChoice",
        question: 'Which two langues does Wille Speak?',
        answers: [
            { text: 'Finnish', correct: false },
            { text: 'Swedish', correct: true },
            { text: 'English', correct: true },
            { text: 'Turkish', correct: false }
        ]
    }
  
    // Add more questions as needed
];
