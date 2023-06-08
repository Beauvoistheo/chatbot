let dialog;

const choice=document.querySelector("#choice");
const question=document.querySelector(".question");
const answer=document.querySelector(".answer");

 fetch(`http://localhost:3000/api/v1/dialog`)
 .then(response => response.json())
 .then(({data}) => {
    console.log(data)
   dialog = data
   dialog.forEach(dialog =>{
    choice.innerHTML += `<option value="${dialog.question}">`;
   })
    document.getElementById("form").addEventListener("submit", function(event){
        event.preventDefault();
        console.log(document.querySelector("#ice-cream-choice"));
        // document.querySelector(".question").innerHTML=document.querySelector("#ice-cream-choice").value
        // document.querySelector(".answer").innerHTML="Coucou"
        dialog.forEach(element =>{
            if(element.question === document.querySelector("#ice-cream-choice").value){
                document.querySelector(".answer").innerHTML=element.answer
                console.log(".answer")
            }
        })
})
 })
 .catch(error => {
   console.error('Une erreur s\'est produite:', error);
 });






  