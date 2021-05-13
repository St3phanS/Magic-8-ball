
let answers = ["Ah I see it, yes","Ask again later","Better not tell you now","Cannot predict now","Concentrate and ask again", "Don’t count on it","It is certain", "It is decidedly so","Most likely","My reply is no","My sources say no","Outlook not so good", "Outlook good", "Reply hazy, try again", "Signs point to yes", "Very doubtful", "Without a doubt", "Yes", "Yes – definitely", "You may rely on it"];

window.onload = function() {
    let eye = document.getElementById("eye");
    let answer = document.getElementById("answer");
    let iris = document.getElementById("iris");
    let question = document.getElementById("question");

    // function isNumeric(question){
    //     if (tyepof question ) {
            
    //     }
    // }
    question.addEventListener("keydown", function inputKeyUp(e) {
        if (e.key === 'Enter') {
            // alert('success')
            
            var format = /[?]/;

            if( question.match(format) ){
                alert('question')
              }else{
                alert ('A question requires a question mark')
              }
            //var iChars = "?";

           
            // submit
        }
    });
};