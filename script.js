const quiz = [
    {
        question: "What is my age?",
        a: "10",
        b: "23",
        c:"20",
        d:"14",
        correct:"a"

    },
    {
    question: "What is ur age?",
    a: "10",
    b: "23",
    c:"20",
    d:"14",
    correct:"b"

},
{
    question: "What is his age?",
    a: "10",
    b: "23",
    c:"20",
    d:"14",
    correct:"c"

},
{
    question: "What is her age?",
    a: "10",
    b: "23",
    c:"20",
    d:"14",
    correct:"d"

}

]
var currentQues=0;

const element=document.getElementById("bu");
const ans = document.querySelectorAll(".answers");

function getanswer(){
    var answer = undefined;
    
    ans.forEach(ansel => {
        if(ansel.checked){
            answer = ansel.id;
        }
        
        
    });
    
    return answer;
    
    }

function changeQues(){
    deselect();
    document.getElementById("ques").innerHTML=quiz[currentQues].question;
    document.getElementById("a-lab").innerHTML=quiz[currentQues].a;
    document.getElementById("b-lab").innerHTML=quiz[currentQues].b;
    document.getElementById("c-lab").innerHTML=quiz[currentQues].c;
    document.getElementById("d-lab").innerHTML=quiz[currentQues].d;

    
    

}
function deselect(){
    ans.forEach(ansel => {
         ansel.checked=false;
        });
        
}

changeQues();


var score=0;

element.addEventListener("click",() => {
    
    
    
    if (getanswer()){   
        if (getanswer()===quiz[currentQues].correct){
            score++;
        }
        
        currentQues++;
        if(currentQues<quiz.length )
        {
        changeQues();
        }
        else  {

            document.getElementById("quiz").innerHTML= `<h3>Quiz Ended Score: ${score}</h3>`;
        }
    }
   
    
});

