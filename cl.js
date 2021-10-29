var myQuestions = [
    {
        question: "What is El-grande's full name?",
        answers: {
          a: 'Olawole Ayokanmi',
          b: 'Adewole Ayokanmi',
          c: 'Olaolu Ayokanmi',
          d:  'Oluwole Ayokanmi'
        },
        correctAnswer: 'd'
      },
    {
        question: "El-grande was born on?",
        answers: {
          a: '22nd october',
          b: '23rd october',
          c: '21st october',
          d:  '20th october'
        },
        correctAnswer: 'c'
      },
    {
        question: "El-grande is from which town in Ekiti state?",
        answers: {
          a: 'Ifaki',
          b: 'Oye',
          c: 'Ilupeju',
          d:  'Ido'
        },
        correctAnswer: 'b'
      },
    {
        question: "El-grande is from which Senatorial District in Ekiti state?",
        answers: {
          a: 'Ekiti Central',
          b: 'Ekiti North',
          c: 'Ekiti West',
          d:  'Ekiti Parapo'
        },
        correctAnswer: 'b'
      },
    {
        question: "The following people dey chop mud steady from El-grande except?",
        answers: {
          a: 'Light of God(imole)',
          b: 'Ajoke (Chinese fork)',
          c: 'Fisayo(Photoshop isonu)',
          d:  'Debbyclassy(brezzident)'
        },
        correctAnswer: 'a'
      },
    {
        question: "Which Club does El-grande Support?",
        answers: {
          a: 'Real Madrid',
          b: 'Barcelona',
          c: 'Manchester City',
          d:  'Man Utd'
        },
        correctAnswer: 'b'
      },
    {
        question: "Who added El-grande to the group?",
        answers: {
          a: 'Kanmi Stitches',
          b: 'King philz',
          c: 'Ctalo',
          d:  'Salamson'
        },
        correctAnswer: 'c'
      },
    {
        question: "ESFH was created on?",
        answers: {
          a: '13th November 2018',
          b: '14th November 2018',
          c: '17th November 2018',
          d:  '18th November 2018'
        },
        correctAnswer: 'd'
      },
    {
      question: "ESFH current have how many members?",
      answers: {
        a: '41',
        b: '40',
        c: '42',
        d:  '39'
      },
      correctAnswer: 'b'
    },
    {
      question: "Novemebr 13/14 ESFH hangout will hold at?",
      answers: {
        a: 'Ilaji national park',
        b: 'Ilaji hotels',
        c: 'Ilaji Gardens',
        d: 'Ilaji Hotels and Resorts center'
      },
      correctAnswer: 'd'
    }
    
  ];
  
  var quizContainer = document.getElementById('quiz');
  var resultsContainer = document.getElementById('results');
  var submitButton = document.getElementById('submit');
  
  generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
  
  function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
  
    function showQuestions(questions, quizContainer){
      // we'll need a place to store the output and the answer choices
      var output = [];
      var answers;
  
      // for each question...
      for(var i=0; i<questions.length; i++){
        
        // first reset the list of answers
        answers = [];
  
        // for each available answer...
        for(letter in questions[i].answers){
  
          // ...add an html radio button
          answers.push(
            '<label>'
              + '<input type="radio" name="question'+i+'" value="'+letter+'">'
              + letter + ': '
              + questions[i].answers[letter]
            + '</label>'
          );
        }
  
        // add this question and its answers to the output
        output.push(
          '<div class="question">' + questions[i].question + '</div>'
          + '<div class="answers">' + answers.join('') + '</div>'
        );
      }
  
      // finally combine our output list into one string of html and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
  
    function showResults(questions, quizContainer, resultsContainer){
      
      // gather answer containers from our quiz
      var answerContainers = quizContainer.querySelectorAll('.answers');
      
      // keep track of user's answers
      var userAnswer = '';
      var numCorrect = 0;
      
      // for each question...
      for(var i=0; i<questions.length; i++){
  
        // find selected answer
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
        
        // if answer is correct
        if(userAnswer===questions[i].correctAnswer){
          // add to the number of correct answers
          numCorrect++;
          
          // color the answers green
          answerContainers[i].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[i].style.color = 'red';
        }
      }
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }
  
    // show questions right away
    showQuestions(questions, quizContainer);
    
    // on submit, show results
    submitButton.onclick = function(){
      showResults(questions, quizContainer, resultsContainer);
    }
  
  }
  var count = 100;
var interval = setInterval(function(){
  document.getElementById('count').innerHTML=count;
  count--;
  if (count === 0){
    clearInterval(interval);
    document.getElementById('count').innerHTML='Done';
    // or...
    alert("You're out of time!");
  }
}, 1000);