let boxes= document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newbtn= document.querySelector("#new-btn");
let container= document.querySelector(".msg-container");
let msg= document.querySelector("#msg");
let turn= true; 
const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
let count=0;
const resetGame=()=>{
      turn =true;
      count=0;
      enableboxes();
      container.classList.add("hide");

}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        
        if(turn === true){
            box.innerText="O";
            box.style.color="green";
             
             
            turn = false;
        }
        else{
            box.innerText="X";
            box.style.color="blue";
             
              
            turn= true;
        }
        box.disabled= true;
        count++;
        let isWinner = checkWinner();
        
        if(count ===9 && !isWinner){
            gameDraw();
        }
    });
});
const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    container.classList.remove("hide");
    disableboxes();
  };
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}


const showWinner=(winner)=>{
    msg.innerText=`Congratulation , Winner is ${winner}`;
    container.classList.remove("hide");
    disableboxes();
}

const checkWinner = () => {
    for(let pattern of winPattern){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("winner");
                showWinner(pos1);
            }
        }
    }
};

reset.addEventListener("click",resetGame);
newbtn.addEventListener("click",resetGame);