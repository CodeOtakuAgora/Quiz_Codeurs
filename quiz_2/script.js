/*Created by Hugo Fief*/

alert("Voici un quiz qui porte sur le Langage C afin de vérifier ses bases, je vous mêt au défis de faire 20/20")

function submitAnswers() {
    
        var total = 20;
        var score = 0;
    
        //Get user input
    
    
        var q1 = document.forms["csQuizForm"]["q1"].value;
        var q2 = document.forms["csQuizForm"]["q2"].value;
        var q3 = document.forms["csQuizForm"]["q3"].value;
        var q4 = document.forms["csQuizForm"]["q4"].value;
        var q5 = document.forms["csQuizForm"]["q5"].value;        
        var q6 = document.forms["csQuizForm"]["q6"].value;               
        var q7 = document.forms["csQuizForm"]["q7"].value;
        var q8 = document.forms["csQuizForm"]["q8"].value;
        var q9 = document.forms["csQuizForm"]["q9"].value;
        var q10 = document.forms["csQuizForm"]["q10"].value;
        var q11 = document.forms["csQuizForm"]["q11"].value;
        var q12 = document.forms["csQuizForm"]["q12"].value;
        var q13 = document.forms["csQuizForm"]["q13"].value;
        var q14 = document.forms["csQuizForm"]["q14"].value;
        var q15 = document.forms["csQuizForm"]["q15"].value;        
        var q16 = document.forms["csQuizForm"]["q16"].value;               
        var q17 = document.forms["csQuizForm"]["q17"].value;
        var q18 = document.forms["csQuizForm"]["q18"].value;
        var q19 = document.forms["csQuizForm"]["q19"].value;
        var q20 = document.forms["csQuizForm"]["q20"].value;
        
        //Validation
        
        
        for(var i = 1; i <= total; i++){
    
            if (eval('q' + i) == null || eval('q' + i) == '') {
                
   alert('Tu as oublié la question ' + i);
                return false;
            }
    
        }
    
        //Set correct answers
    var answers = 
["b", "b", "c", "c", "b","b","c", "b","b","c","a","b","c","c","b","a","c","c","c","b"];
    
        //Checking answers
    
        for( i = 1; i <= total; i++){
    
            if (eval('q' + i) == answers[i - 1]) {
    
                score++; 
                
           }           
        }
        //Display results
    
        var results = document.getElementById('results');
        
results.textContent = score + "/" + total;
        return false;
    
    }
    
 
 //Viewing results in results box
    $(document).ready(function () {
    
   $('.myLink').on('click', function() {
  $('form').slideToggle(500);
  $('.reset').css('display','initial');
        })
$('.myLink2').on('click', function() {
  $('form').slideToggle(0);
   $('.reset').css('display','none');
   $('input:radio:checked').prop('checked', false);
        })
        })