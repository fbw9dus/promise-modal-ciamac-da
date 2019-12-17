var countdown = document.querySelector(".modal");
var closeIt = document.querySelector(".close").addEventListener("click",Sixty);

function Sixty(){
      countdown.style.display = "none"
}
function FinishIt(){
      let promise = new Promise(function(resolve,reject){
            setInterval(() =>{
                  resolve("")
            },4000);
      });
      return promise
}

FinishIt({})
.then(hmm => countdown.style.display = "block")