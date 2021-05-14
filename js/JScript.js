

let responses = ["Ah I see it, yes","Ask again later","Better not tell you now","Cannot predict now","Concentrate and ask again", "Don’t count on it","It is certain", "It is decidedly so","Most likely","My reply is no","My sources say no","Outlook not so good", "Outlook good", "Reply hazy, try again", "Signs point to yes", "Very doubtful", "Without a doubt", "Yes", "Yes – definitely", "You may rely on it"];

window.onload = function() {
    let eye = document.getElementById("eye");
    let response = document.getElementById("response");
    let iris = document.getElementById("iris");
    let question = document.getElementById("question");
    let irisImg = document.getElementById('iris-img')

  
    // function isNumeric(question){
    //     if (tyepof question ) {
            
    //     }
    // }
    question.addEventListener("keydown", function inputKeyUp(e) {
        if (e.key === 'Enter') {
            
            console.log(question.value.includes('?') )

            const questionLength = question.value.length;

            if(questionLength<=1) {
                alert('Enter a Question!');
            }
            else{

                if(question.value.includes('?') === false){
                    alert('A Question Requires a ?! \n Please Try Again')
                }
                else{
    
                    let whichResponse = Math.floor(Math.random()*responses.length);
        

                    $()
                    
                    irisImg.remove();
                    response.innerText = responses[whichResponse];
                    
                    //response.innerText = responses[4]; //big text
                    //response.innerText = responses[17]; //little text

                    console.log(whichResponse)
                }
            }
            
            


            

           
            
        }
    });
};


// var questionSearch = question.search("?");
//             console.log(questionSearch)

//             if( questionSearch === -1 ){
//                 alert('A question requires a question mark')
//               }else{
//                 alert ('question')
//               }
//             var iChars = "?";