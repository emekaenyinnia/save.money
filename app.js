var data =[
    {
        question1:"whats the name of your laptop",
        answer:"hp",
    },
    {
        question2: "whats the name of your laptop",
        answer: "game",
    },
    {
        question1: "what is this ",
        answer: "fun",
    }



]
function answerQuestion(){
    for (var i = 0; i <= data.length; i++) {
        console.log(data[i].answer)

//         if (data[i].answer === ask){
// console.log("good")
//     }   
//     else{
//         console.log("incorrect")
//     } 
    }
}
answerQuestion();

// answerQuestion(ask);
// var ask = prompt("answer");