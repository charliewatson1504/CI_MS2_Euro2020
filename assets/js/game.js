const question = document.getElementById('question');
const option = Array.from(document.getElementsByClassName('option-text'));
const pointsPerCorrectScore = 50;
const totalQuizQuestions = 5;

let currentQuestion = {};
let questionsAvailable = [];
let questionNumber = 0;
let allowClick = true;
let score = 0;

let questions = [
	{
	  "question": "Who won the Euro 2020 tournament?",
	  "choice1": "Italy",
	  "choice2": "Poland",
	  "choice3": "England",
	  "choice4": "Germany",
	  "answer": 1
	},
	 {
	  "question": "In which stadium was the final played?",
	  "choice1": "Wembley Stadium",
	  "choice2": "Stadio Olimpico",
	  "choice3": "Olympic Stadium",
	  "choice4": "Krestovsky Stadium",
	  "answer": 1
	},
	 {
	  "question": "Which team was ranked highest going into the tournament?",
	  "choice1": "England",
	  "choice2": "Italy",
	  "choice3": "Belgium",
	  "choice4": "Germany",
	  "answer": 3
	},
	 {
	  "question": "Who refereed the final of Euro 2020?",
	  "choice1": "Orel Grinfeld",
	  "choice2": "Bjorn Kuipers",
	  "choice3": "Danny Makkelie",
	  "choice4": "Sergei Karasev",
	  "answer": 2
	},
	 {
	  "question": "Where did the opening ceremony take place?",
	  "choice1": "Rome",
	  "choice2": "London",
	  "choice3": "Madrid",
	  "choice4": "Paris",
	  "answer": 1
	},
	 {
	  "question": "Along with Patrik Schick, who scored 5 goals at Euro 2020?",
	  "choice1": "Harry Kane",
	  "choice2": "Karim Benzema",
	  "choice3": "Romelu Lukaku",
	  "choice4": "Christiano Ronaldo",
	  "answer": 4
	},
	 {
	  "question": "Who won player of the tournament?",
	  "choice1": "Kyle Walker",
	  "choice2": "Pedri",
	  "choice3": "Romelu Lukaku",
	  "choice4": "Gianluigi Donnarumma",
	  "answer": 4
	},
	 {
	  "question": "Which company created the match ball for Euro 2020?",
	  "choice1": "Adidas",
	  "choice2": "Nike",
	  "choice3": "Umbro",
	  "choice4": "Reebok",
	  "answer": 1
	},
	 {
	  "question": "What drink was removed by Christiano Ronaldo in his press conference",
	  "choice1": "Pepsi",
	  "choice2": "Coca Cola",
	  "choice3": "Irn Bru",
	  "choice4": "Dr Pepper",
	  "answer": 2
	},
	 {
	  "question": "How many goals were scored on 'Magic Monday'?",
	  "choice1": "11",
	  "choice2": "13",
	  "choice3": "14",
	  "choice4": "16",
	  "answer": 3
	},
	 {
	  "question": "What record was broken at this tournament for any European Championship since the introduction of the group stage in 1980?",
	  "choice1": "Most clean sheets",
	  "choice2": "Worst discipline",
	  "choice3": "Highest attendance",
	  "choice4": "Most goals scored",
	  "answer": 4
	},
	 {
	  "question": "What was the name of the official song for the tournament?",
	  "choice1": "We love the animals",
	  "choice2": "We are the people",
	  "choice3": "We are the animals",
	  "choice4": "We love the people",
	  "answer": 2
	},
	 {
	  "question": "What was the name of the official mascot?",
	  "choice1": "Skillzy",
	  "choice2": "Ballzy",
	  "choice3": "Glovezy",
	  "choice4": "Bootzy",
	  "answer": 1
	},
	 {
	  "question": "Who had the worst discipline of the tournament?",
	  "choice1": "Ethan Ampadu",
	  "choice2": "Marko Arnautovic",
	  "choice3": "Grzegorz Krychowiak",
	  "choice4": "Ezgjian Alioski",
	  "answer": 3
	},
	 {
	  "question": "How many own goals were scored in the tournament?",
	  "choice1": "11",
	  "choice2": "15",
	  "choice3": "7",
	  "choice4": "9",
	  "answer": 1
	}
      ];

// beginQuiz = () => {
	
// };

// getANewQuestion = () => {
	
// };

console.log(questions);