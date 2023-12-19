const questions = [
    {
        type: "trueOrFalse",
        question: "JavaScript is a programming language used for both client-side and server-side development?",
        answers: [
          { text: "True", correct: true },
          { text: "False", correct: false },
        ],
      },
      {
        type: "trueOrFalse",
        question: "JavaScript is a statically-typed language?",
        answers: [
          { text: "True", correct: false },
          { text: "False", correct: true },
        ],
      },
      {
        type: "trueOrFalse",
        question: "JavaScript is primarily used for styling web pages?",
        answers: [
          { text: "True", correct: false },
          { text: "False", correct: true },
        ],
      },
      {
        type: "trueOrFalse",
        question: "JavaScript is an object-oriented programming language?",
        answers: [
          { text: "True", correct: true },
          { text: "False", correct: false },
        ],
      },
    
      // oneOfFour questions
      {
        type: "oneOfFour",
        question: "What is the correct way to declare a variable in JavaScript?",
        answers: [
          { text: "var x = 5;", correct: true },
          { text: "variable x = 5;", correct: false },
          { text: "x = 5;", correct: false },
          { text: "let x: 5;", correct: false },
        ],
      },
      {
        type: "oneOfFour",
        question: "Which of the following is a correct syntax for a 'for-loop'",
        answers: [
          { text: "for(let i = 5; i<10; 1++)", correct: true },
          { text: "for(i = 0; 10>i; i++)", correct: false },
          { text: "for{let i = 10; i===100; i++}", correct: false },
          { text: "for.each(()=>{console.log('blipp')})", correct: false },
        ],
      },
      {
        type: "oneOfFour",
        question: "What does 'DOM' stand for in the context of web development?",
        answers: [
          { text: "Document Object Model", correct: true },
          { text: "Data Object Model", correct: false },
          { text: "Dynamic Object Model", correct: false },
          { text: "Document Oriented Model", correct: false },
        ],
      },
      //multiChoice Questions
      {
        type: "multiChoice",
        question: "Which built-in methods can be used to convert a string to uppercase in JavaScript? (Select all that apply)",
        answers: [
          { text: "toUpperCase()", correct: true },
          { text: "toLowerCase()", correct: false },
          { text: "toUpperCasecase()", correct: false },
          { text: "changeCase('upper')", correct: false },
        ],
      },
      {
        type: "multiChoice",
        question: "What are the correct ways to declare an array in JavaScript? (Select all that apply)",
        answers: [
          { text: "let myArray = [];", correct: true },
          { text: "var myArray = [];", correct: true },
          { text: "const myArray = [];", correct: true },
          { text: "array myArray = [];", correct: false },
        ],
      },
      {
        type: "multiChoice",
        question: "Which of the following are valid ways to comment in JavaScript? (Select all that apply)",
        answers: [
          { text: "// This is a comment", correct: true },
          { text: "# This is a comment", correct: false },
          { text: "/* This is a comment */", correct: true },
          { text: "-- This is a comment", correct: false },
        ],
      }
    // Add more questions as needed
];
