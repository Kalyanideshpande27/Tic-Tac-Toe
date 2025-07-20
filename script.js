let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#newbtn");
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg");

let turnO = true;
let count = 0

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetgame = () => {
    turnO = true;
    enabledboxes();
    msgContainer.classList.add("hide")
}

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if(turnO){
            box.innerText = "O"
            turnO = false;
        }else{
            box.innerText = "X"
            turnO = true;
        }

        box.disabled = true ; 
        count++;

        let isWinner =  checkwinner();
        
        if (count == 9 && ! isWinner)
        {
            checkdraw();
        }


    });

});

const disabledboxes = () => {
    for(let box of boxes){
        box.disabled= true;
    
    }
}

const enabledboxes = () => {
    for(let box of boxes){
        box.disabled= false ;
        box.innerText = "";
    }
}

const  showwinner = (winner)  => {
    msg.innerText = `🎉 Hooray! ${winner} takes the victory! `
    msgContainer.classList.remove("hide");
    disabledboxes();
}

const checkwinner = () => {
    for(let pattern of winPatterns) {
        let posi1 = boxes[pattern[0]].innerText;
        let posi2 = boxes[pattern[1]].innerText;
        let posi3 = boxes[pattern[2]].innerText;

        if(posi1 === posi2 && posi2 === posi3 && posi1 !== ""){
            console.log("winner is ",  posi1);

            showwinner(posi1);
    }
   }

 } ;

newGameBtn.addEventListener("click", resetgame);
resetBtn.addEventListener("click", resetgame);

const checkdraw = () => {
        msg.innerText = "It’s a tie! Great minds think alike.";
        msgContainer.classList.remove("hide");
        disabledboxes();

}
