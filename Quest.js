
let game;
let score;
let question = []

const boxAccueil = document.getElementById('accueil')
const boxFin = document.getElementById('fin')
boxFin.classList.add('hide')

const eltScoreFinal = document.getElementById('scoreFinal')

const eltBtnEnd = document.getElementById('btnEnd')

const boxContainer = document.getElementById('container')
boxContainer.classList.add('hide')

const startButton = document.getElementById('btnStart')
startButton.addEventListener('click', startGame)

const eltQuestion = document.getElementById('question')

const eltReponse1 = document.getElementById('reponse1')
const eltReponse2 = document.getElementById('reponse2')
const eltReponse3 = document.getElementById('reponse3')
const eltReponse4 = document.getElementById('reponse4')

const eltBtnNext = document.getElementById('btnNext')
eltBtnNext.addEventListener('click', setNextQuestion, hideNextBtn)

const hidenext = eltBtnNext.classList.remove('hide')

function hideNextBtn() {
    hidenext;
}

let Quest = [];

Quest[0] = {
    question: 'Quel était le premier langage de programmation numérique de l’histoire ?',
    anwser1: "Fortran",
    anwser2: "Assembly",
    anwser3: "Short Code",
    anwser4: "Algol",
    correct: "Short Code"
};

Quest[1] = {
    question: 'En quelle année a été créé le langage C++ ?',
    anwser1: "1979",
    anwser2: "1983",
    anwser3: "1988",
    anwser4: "1989",
    correct: "1983"
};

Quest[2] = {
    question: 'Lequel des quatre langages suivants est le plus ancien ?',
    anwser1: "Java",
    anwser2: "Javascript",
    anwser3: "Visual Basic",
    anwser4: "C#",
    correct: "Visual Basic"
};

Quest[3] = {
    question: 'Lequel des langages de programmation suivants n’existe pas ?',
    anwser1: "Rawdon",
    anwser2: "Brainfuck",
    anwser3: "Actor",
    anwser4: "Eiffel",
    correct: "Rawdon"
};

Quest[4] = {
    question: 'Quel est le langage de programmation le plus utilisé par les ingénieurs logiciels et développeurs ?',
    anwser1: "C++",
    anwser2: "JavaScript",
    anwser3: "Java",
    anwser4: "Python",
    correct: "Python"
};

Quest[5] = {
    question: 'Comment s\'appelle l\'outil d\'audit de site, basé sur Lighthouse, proposé par Google ?',
    anwser1: "Web.li",
    anwser2: "Web.div",
    anwser3: "Web.html",
    anwser4: "Web.dev",
    correct: "Web.dev"
};

Quest[6] = {
    question: 'Quel est le nom de la version 5.1 de WordPress ?',
    anwser1: "Claudia",
    anwser2: "andra",
    anwser3: "Jennifer",
    anwser4: "Betty",
    correct: "Betty"
};

Quest[7] = {
    question: 'Selon lIEEE Spectrum, quel était le langage de programmation le plus populaire en 2018 ?',
    anwser1: "Python",
    anwser2: "PHP",
    anwser3: "Cobol",
    anwser4: "Go",
    correct: "Python"
};

Quest[8] = {
    question: 'Qui a racheté GitHub ?',
    anwser1: "Microsoft",
    anwser2: "Apple",
    anwser3: "IBM",
    anwser4: "Google'",
    correct: "Microsoft"
};

Quest[9] = {
    question: 'Comment s\'appelle la conférence annuelle que Google organise pour les développeurs ?',
    anwser1: "Dev summit",
    anwser2: "Chrome Dev conference",
    anwser3: "Chrome Dev summit",
    anwser4: "Google Dev conf",
    correct: "Chrome Dev summit"
};

Quest[10] = {
    question: 'Quel est le CMS le plus utilisé ?',
    anwser1: "Dotclear",
    anwser2: "WordPress",
    anwser3: "Drupal",
    anwser4: "Joomla",
    correct: "WordPress"
};

Quest[11] = {
    question: 'Comment s\'appelle le logiciel de programmation qui permet aux enfants d\'apprendre à coder dès 8 ans ?',
    anwser1: "Scratt",
    anwser2: "Scratch",
    anwser3: "Scoot",
    anwser4: "Shoot",
    correct: "Scratch"
};

Quest[12] = {
    question: 'Quel est le pourcentage de sites web avec ".com" en extension de domaine ?',
    anwser1: "46.7%",
    anwser2: "72.4%",
    anwser3: "33.5%",
    anwser4: "58.8%",
    correct: "46.7%"
};

Quest[13] = {
    question: 'Google a lancé un programme éducatif pour apprendre le machine learning en ligne, comment s\'appelle t-il ?',
    anwser1: "G.AI",
    anwser2: "Google Al learning Program",
    anwser3: "Learning with Google Al",
    anwser4: "Googlai",
    correct: "Learning with Google Al"
};

Quest[14] = {
    question: 'Quel est le nom du concours de code organisé par HelloWork et le BDM ?',
    anwser1: "BattleTitle",
    anwser2: "BattleRoyal",
    anwser3: "BattleDev",
    anwser4: "BattelDiv",
    correct: "BattleDev"
};
 

const eltBtn = document.querySelector('.btn')


let arr = [];

function shuffle(){

do {
  let num = Math.floor(Math.random() * 15);
  arr.push(num);
  arr = arr.filter((item, index) => {
    return arr.indexOf(item) === index
  });
} while (arr.length < 15);
    
    }

var nb;


function startGame() {
    score = 0
    shuffle()
    boxAccueil.classList.add('hide')
    boxContainer.classList.remove('hide')
    eltBtnNext.classList.add('hide')
    setNextQuestion() 
}

function fresh() {
    eltReponse1.classList.remove('lose', 'win')
    eltReponse2.classList.remove('lose', 'win')
    eltReponse3.classList.remove('lose', 'win')
    eltReponse4.classList.remove('lose', 'win')
    eltBtnNext.classList.add('hide')
}


function questionEventHandler(element, answer) {
    if (!game) return; 
  
   const won = answer === Quest[nb].correct
    element.classList.add(won ? 'win' : 'lose')
    
    
    if(answer === Quest[nb].correct){
        score++;
        endGame()
        arr.shift();
}else{
    endGame()
    arr.shift();
}
    
        game = false
        eltBtnNext.classList.remove('hide')
    
}


eltReponse1.addEventListener('click', (event) => questionEventHandler(event.target, Quest[nb].anwser1));
eltReponse2.addEventListener('click', (event) => questionEventHandler(event.target, Quest[nb].anwser2));
eltReponse3.addEventListener('click', (event) => questionEventHandler(event.target, Quest[nb].anwser3));
eltReponse4.addEventListener('click', (event) => questionEventHandler(event.target, Quest[nb].anwser4));


function setNextQuestion() {
    fresh()
    
    nb = arr[0];
    
    eltQuestion.innerHTML = Quest[nb].question
    eltReponse1.innerHTML = Quest[nb].anwser1
    eltReponse2.innerHTML = Quest[nb].anwser2
    eltReponse3.innerHTML = Quest[nb].anwser3
    eltReponse4.innerHTML = Quest[nb].anwser4

    game = true

    
}


 function endGame(){
     
     if(arr.length === 1){
            boxFin.classList.remove('hide')
            boxContainer.classList.add('hide')
            eltScoreFinal.innerHTML = score + "/15"
           return eltBtnEnd.addEventListener('click', function(){
                boxFin.classList.add('hide')
                boxAccueil.classList.remove('hide')
            });
       }    
 }
