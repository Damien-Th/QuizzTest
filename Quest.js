   
var score = 0;
func();

function func() {
 
    var nb = Math.floor(Math.random() * 3);
    var Quest = [];
        
    Quest[0] = {
       question: 'What do you think about javascript ?',
       anwser: '1: It\'s a good' + '\n' + '2: I don\'t like it',
       correct: '1'
   };
    
    Quest[1] = {
       question: 'What do you prefer ?',
       anwser: '1: Front-end' + '\n' +'2: Back-end',
       correct: '1'
   };
    
    Quest[2] = {
       question: 'What language do you like the most?',
       anwser: '1: PHP'+ '\n' + '2: Ruby' + '\n' + '3: Js',
       correct: '3'
   };
       
var laquestion = prompt('please select the correct anwser (just type the number) or type exit to quit.' + '\n' + Quest[nb].question + '\n' + Quest[nb].anwser);
    
    
    if(laquestion === Quest[nb].correct) {
        score++; 
        if(score > 9){window.alert("The score is 10 you Won");} 
        
    else {
        window.alert('correct anwser ');
        window.alert(' the score is ' + score);
        func();} 
    }
    
else if(laquestion === 'exit') {window.alert('goodbye');}

else {window.alert('try again'); func();} 
    
    }



