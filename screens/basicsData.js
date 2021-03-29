const basicsData = [
{ //Javascript Basics Object
title: "JavaScript Basics", 
topics: [{ 
    title: 'Introduction',
    reviews: [
    {   reviewTitle: "Review",
        title: "console.log()", 
        image: `${require("./consoleLog.png")}`, 
        explanation: `The console.log() method is used to log or print messages to the console. 
        It can also be used to print objects and other information.` 
    }
    ],
    practices: [
    {   practiceTitle: "Practice",
        question: "Eliminate the option which does NOT exhibit the use of a Number data type.",
        image: `${require("./consoleLog.png")}`,
        answers: [
            "console.log('1')",
            "console.log(1.5)", 
            "console.log(5000)", 
             "console.log(1)"
        ],
        correctAnswer: "console.log('1')"
    }
]
//}, 
// {
//     title: "Conditionals",
//     reviews: [
//     {   reviewTitle: "Review",
//         title: "console.log()", 
//         codeImg: "./consoleLog.png", 
//         explanation: `The console.log() method is used to log or print messages 
//         to the console. It can also be used to print objects and other information.` 
//     }
//     ],
//     practices: [
//     {   practiceTitle: "Practice",
//         title: 'Practice',
//         question: "Practice Question 1",
//         codeImg: "./consoleLog.png",
//         answers: {
//             correctAnswer: "This is correct.",
//             wrongAnswers: ["incorrect", "incorrect", "incorrect"]
//         }
//     }
// ]},
// {
//     title: 'Functions',
//     reviews: [
//     {   reviewTitle: "Review",
//         title: "console.log()", 
//         codeImg: "./consoleLog.png", 
//         explanation: `The console.log() method is used to log or print messages 
//         to the console. It can also be used to print objects and other information.` 
//     }
//     ],
//     practices: [
//     {   practiceTitle: "Practice",
//         title: 'Practice',
//         question: "Practice Question 1",
//         codeImg: "./consoleLog.png",
//         answers: {
//             correctAnswer: "This is correct.",
//             wrongAnswers: ["incorrect", "incorrect", "incorrect"]
//         }
//     }
// ]},
// {
//     title: 'Scope',
//     reviews: [
//         {   reviewTitle: "Review",
//         title: "console.log()", 
//         codeImg: "./consoleLog.png", 
//         explanation: `The console.log() method is used to log or print messages 
//         to the console. It can also be used to print objects and other information.` 
//     }
//     ],
//     practices: [
//     {   practiceTitle: "Practice",
//         title: 'Practice',
//         question: "Practice Question 1",
//         codeImg: "./consoleLog.png",
//         answers: {
//             correctAnswer: "This is correct.",
//             wrongAnswers: ["incorrect", "incorrect", "incorrect"]
//         }
//     }
// ]},
// {
//     title:'Arrays',
//     reviews: [
//         {   reviewTitle: "Review",
//         title: "console.log()", 
//         codeImg: "./consoleLog.png", 
//         explanation: `The console.log() method is used to log or print messages 
//         to the console. It can also be used to print objects and other information.` 
//     }
//     ],
//     practices: [
//     {   practiceTitle: "Practice",
//         title: 'Practice',
//         question: "Practice Question 1",
//         codeImg: "./consoleLog.png",
//         answers: {
//             correctAnswer: "This is correct.",
//             wrongAnswers: ["incorrect", "incorrect", "incorrect"]
//         }
//     }
// ]},
// {
//     title: 'Loops',
//     reviews: [
//         {   reviewTitle: "Review",
//         title: "console.log()", 
//         codeImg: "./consoleLog.png", 
//         explanation: `The console.log() method is used to log or print messages 
//         to the console. It can also be used to print objects and other information.` 
//     }
//     ],
//     practices: [
//     {   practiceTitle: "Practice",
//         title: 'Practice',
//         question: "Practice Question 1",
//         codeImg: "./consoleLog.png",
//         answers: {
//             correctAnswer: "This is correct.",
//             wrongAnswers: ["incorrect", "incorrect", "incorrect"]
//         }
//     }
// ]},
// {
//     title: 'Iterators',
//     reviews: [
//     {   reviewTitle: "Review",
//         title: "console.log()", 
//         codeImg: "./consoleLog.png", 
//         explanation: `The console.log() method is used to log or print messages 
//         to the console. It can also be used to print objects and other information.` 
//     }
//     ],
//     practices: [
//     {   practiceTitle: "Practice",
//         title: 'Practice',
//         question: "Practice Question 1",
//         codeImg: "./consoleLog.png",
//         answers: {
//             correctAnswer: "This is correct.",
//             wrongAnswers: ["incorrect", "incorrect", "incorrect"]
//         }
//     }
// ]},
// {
//     title: 'Objects',
//     reviews: [
//         {   reviewTitle: "Review",
//         title: "console.log()", 
//         codeImg: "./consoleLog.png", 
//         explanation: `The console.log() method is used to log or print messages 
//         to the console. It can also be used to print objects and other information.` 
//     }
//     ],
//     practices: [
//     {   practiceTitle: "Practice",
//         title: 'Practice',
//         question: "Practice Question 1",
//         codeImg: "./consoleLog.png",
//         answers: {
//             correctAnswer: "This is correct.",
//             wrongAnswers: ["incorrect", "incorrect", "incorrect"]
//         }
//     }
// ]}, 
// {title: 'Classes',
// reviews: [
//     {   reviewTitle: "Review",
//     title: "console.log()", 
//     codeImg: "./consoleLog.png", 
//     explanation: `The console.log() method is used to log or print messages 
//     to the console. It can also be used to print objects and other information.` 
// }
// ],
// practices: [
// {   practiceTitle: "Practice",
//     title: 'Practice',
//     question: "Practice Question 1",
//     codeImg: "./consoleLog.png",
//     answers: {
//         correctAnswer: "This is correct.",
//         wrongAnswers: ["incorrect", "incorrect", "incorrect"]
//     }
// }
// ]
}
]
}, 
{ //HTML Basics Object
title: "HTML Basics", 
topics: {
    title: "HTML Basics", 
    reviews: [
    {   reviewTitle: "Review",
        title: "console.log()", 
        codeImg: "./consoleLog.png", 
        explanation: `The console.log() method is used to log or print messages 
        to the console. It can also be used to print objects and other information.` 
    }
    ],
    practices: [
    {   practiceTitle: "Practice",
        title: 'Practice',
        question: "Practice Question 1",
        codeImg: "./consoleLog.png",
        answers: {
            correctAnswer: "This is correct.",
            wrongAnswers: ["incorrect", "incorrect", "incorrect"
            ]
        }
    }
    ]
}},{ //CSS Basics Object
    title: "CSS Basics", 
    topics: {
        title: "CSS Basics", 
        reviews: [
        {   reviewTitle: "Review",
            title: "", 
            codeImg: "", 
            explanation: `Blah, blah, blah` 
        }
        ],
        practices: [
        {   practiceTitle: "Practice",
            title: 'Practice',
            question: "Practice Question 1",
            codeImg: "./consoleLog.png",
            answers: {
                correctAnswer: "This is correct.",
                wrongAnswers: ["incorrect", "incorrect", "incorrect"
                ]
            }
        }
        ]
}},
{ //React Basics Object
    title: "React Basics", 
    topics: {
        title: "React Basics", 
        reviews: [
        {   reviewTitle: "Review",
            title: "", 
            codeImg: "", 
            explanation: `Blah, blah, blah.` 
            }
        ],
        practices: [
        {   practiceTitle: "Practice",
            title: 'Practice',
            question: "Practice Question 1",
            codeImg: "",
            answers: {
                correctAnswer: "This is correct.",
                wrongAnswers: ["incorrect", "incorrect", "incorrect"
                ]
            }
            }
            ]
        }},
        { //GIT Basics Object
            title: "Git Basics", 
            topics: {
                title: "Git Basics", 
                reviews: [
                {   reviewTitle: "Review",
                    title: "", 
                    codeImg: "", 
                    explanation: `Blah, blah, blah.` 
                }
                ],
                practices: [
                {   practiceTitle: "Practice",
                    title: 'Practice',
                    question: "Practice Question 1",
                    codeImg: "",
                    answers: {
                        correctAnswer: "This is correct.",
                        wrongAnswers: ["incorrect", "incorrect", "incorrect"
                        ]
                    }
                }
                ]
            }}, 
            { //Node Basics Object
                title: "Node Basics", 
                topics: {
                    title: "Node Basics", 
                    reviews: [
                    {   reviewTitle: "Review",
                        title: "", 
                        codeImg: "", 
                        explanation: `Blah, blah, blah.` 
                    }
                    ],
                    practices: [
                    {   practiceTitle: "Practice",
                        title: 'Practice',
                        question: "Practice Question 1",
                        codeImg: "",
                        answers: {
                            correctAnswer: "This is correct.",
                            wrongAnswers: ["incorrect", "incorrect", "incorrect"
                            ]
                        }
                    }
                    ]
                } }


            ]

    


export default basicsData

//code images:

// //consoleLog.png

// console.log('Hello World!');
// //Prints: Hello World!