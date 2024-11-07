let arr=[["","",""],
         ["","",""],
         ["","",""]];
let blocks={
        one:{
            color:"",
            clickedBy:""
          },
      two:{
         color:"",
         clickedBy:""
         },
    three:{
          color:"",
         clickedBy:""
    },
    four:{
         color:"",
         clickedBy:""
    },
    five:{
         color:"",
         clickedBy:""
    },
    six:{
         color:"",
         clickedBy:""
    },
    seven:{
        color:"",
        clickedBy:""
    },
    eight:{
         color:"",
         clickedBy:""
    },
    nine:{
        color:"",
         clickedBy:""
    },
};

// const one={
//     color:"",
//     clickedBy:"",
// };
// const two={
//     color:"",
//     clickedBy:"",
// };
// const three={
//     color:"",
//     clickedBy:"",
// };
// const four={
//     color:"",
//     clickedBy:"",
// };
// const five={
//     color:"",
//     clickedBy:"",
// };
// const six={
//     color:"",
//     clickedBy:"",
// };
// const seven={
//     color:"",
//     clickedBy:"",
// };
// const eight={
//     color:"",
//     clickedBy:"",
// };
// const nine={
//     color:"",
//     clickedBy5:"",
// };



let currChance="";
let h3=document.querySelector(".chance");

let winner="";
let h2=document.querySelector("h2");
let winnerDeclared=false;
let isDraw=false;
let count=0;

let random=Math.floor((Math.random())*2)+1;
if(random==1){
    currChance="Player1";
}else{
    currChance="Player2";
}
h3.innerText=`Current chance: ${currChance}`;

boxes=document.querySelectorAll(".block");
for(box of boxes){
    box.addEventListener("click",selectPlayer);
}




function selectPlayer(){
    let boxNumber=this.getAttribute("id");
   // let playerAction=currChance;
   // console.log(boxNumber);
   // console.log(currChance);
//    if(currChance=="player1"){
//     setforPlayer1(currChance,boxNumber);
//     // blocks[boxNumber].color="green";
//     // currChance="player2";
//    } 
if(blocks[boxNumber].color=="" && blocks[boxNumber].clickedBy=="" && currChance=="Player1"){
    blocks[boxNumber].color="green";
    blocks[boxNumber].clickedBy="1";
    currChance="Player2";
    h3.innerText=`Current chance: ${currChance}`;
    count++;
    this.classList.add("cross");
    updateArrForX(boxNumber);
    checkForWinner(boxNumber,blocks[boxNumber].clickedBy);
   // console.log(blocks[boxNumber]);
  //  console.log(currChance);
 // console.log("Player1 block executed");
 console.log(arr);
}
//    if(currChance=="player2"){
//     setforPlayer2(currChance,boxNumber);
//     // blocks[boxNumber].color="red"
//     // currChance="player1";
//    }
 
if(blocks[boxNumber].color=="" && blocks[boxNumber].clickedBy=="" && currChance=="Player2"){
    blocks[boxNumber].color="red";
    blocks[boxNumber].clickedBy="2";
    currChance="Player1";
    h3.innerText=`Current chance: ${currChance}`;
    count++;
    this.classList.add("circle");
    updateArrForO(boxNumber);
    checkForWinner(boxNumber,blocks[boxNumber].clickedBy);
    //console.log(blocks[boxNumber]);s
    //console.log(currChance);
   // console.log("Player2 block executed");
   console.log(arr);
}

if(count==9&&winnerDeclared==false){
   h2.innerText="Match Tie";
   let btn=document.createElement("button");
   btn.innerText="Reset";
   btn.classList.add("btnStyle");
   h2.append(btn);
   btn.addEventListener("click",resetGame);
    
}


  if(winnerDeclared){
    
    displayWinner();
  }
   
    //console.log(blocks[boxNumber]);
}

// function checkDraw(){
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr.length;j++){
//             if(arr[i][j]!=""&&winnerDeclared){
//                 alert("Game is draw");
//                 resetGame();
//             }
//         }
//     }
// }


// function setforPlayer1(currChance,boxNumber){
//         if(blocks[boxNumber].color=="" && blocks[boxNumber].clickedBy==""){
//             blocks[boxNumber].color="green";
//             blocks[boxNumber].clickedBy="1";
//             currChance="player2";
//             console.log(blocks[boxNumber]);
//             console.log(currChance);
//         }

// }
// function setforPlayer2(currChance,boxNumber){
//     if(blocks[boxNumber].color=="" && blocks[boxNumber].clickedBy==""){
//         blocks[boxNumber].color="red";
//         blocks[boxNumber].clickedBy="2";
//         currChance="player1";
//         console.log(blocks[boxNumber]);
//         console.log(currChance);
//     }

// }


// function changeColor(){
//     let clickedBox=this.getAttribute("id");
//     if(chance=="player1" && clicked[clickedBox]!="green"){
       
//         //console.log(clicked[clickedBox]);
        
//             this.classList.add("green");
           
//                 chance="player2";
//                clicked[clickedBox]="green";
            
            
           
//             updateArrForX(clickedBox);
//             console.log(clickedBox);
//            // checkWinner(clickedBox);
//             h3.innerText=`Current chance: ${chance}`;
//             console.log(arr);
//             clicked.clickedBox=true;
//             this.setAttribute("type","");
        
      
//     }else if(chance=="player2" && clicked[clickedBox]!="red"){
//         // let clickedBox=this.getAttribute("id");
//        // console.log(clicked[clickedBox]);
        
//             this.classList.add("red");
          
//                 chance="player1";
//                clicked[clickedBox]="red";
        
            
           
//             updateArrForO(clickedBox);
//             console.log(this.getAttribute("id"));
//             h3.innerText=`Current chance: ${chance}`;
//             console.log(arr);
//             clicked.clickedBox=true;
        
        
//     }
   
// }

function updateArrForX(clickedBox){
    if(clickedBox=="one" &&arr[0][0]==""){
        arr[0][0]="X";
    }else if(clickedBox=="two" &&arr[1][0]==""){
        arr[1][0]="X"
    }else if(clickedBox=="three" &&arr[2][0]==""){
        arr[2][0]="X";
    }else if(clickedBox=="four"&&arr[0][1]==""){
        arr[0][1]="X";
    }
    else if(clickedBox=="five" &&arr[1][1]==""){
        arr[1][1]="X";
    }
    else if(clickedBox=="six" &&arr[2][1]==""){
        arr[2][1]="X";
    }else if(clickedBox=="seven" &&arr[0][2]==""){
        arr[0][2]="X";
    }else if(clickedBox=="eight" &&arr[1][2]==""){
        arr[1][2]="X";
    }
    else if(clickedBox=="nine" &&arr[2][2]==""){
        arr[2][2]="X";
    }
}

function updateArrForO(clickedBox){
    if(clickedBox=="one" &&arr[0][0]==""){
        arr[0][0]="O";
    }else if(clickedBox=="two" &&arr[1][0]==""){
        arr[1][0]="O"
    }else if(clickedBox=="three" &&arr[2][0]==""){
        arr[2][0]="O";
    }else if(clickedBox=="four"&&arr[0][1]==""){
        arr[0][1]="O";
    }
    else if(clickedBox=="five" &&arr[1][1]==""){
        arr[1][1]="O";
    }
    else if(clickedBox=="six" &&arr[2][1]==""){
        arr[2][1]="O";
    }else if(clickedBox=="seven" &&arr[0][2]==""){
        arr[0][2]="O";
    }else if(clickedBox=="eight" &&arr[1][2]==""){
        arr[1][2]="O";
    }
    else if(clickedBox=="nine" &&arr[2][2]==""){
        arr[2][2]="O";
    }
}


function checkForWinner(boxNumber,currPlayer){
    if(boxNumber=="one"){
      //  console.log("entered the destination");
        if(arr[0][0]==arr[0][1] && arr[0][0]==arr[0][2]){
            winnerDeclared=true;
            winner=`Player ${currPlayer}`;    
        }
        if(arr[0][0]==arr[1][0]&&arr[0][0]==arr[2][0]){
            winnerDeclared=true;
            winner=`Player ${currPlayer}`;
        }
        if(arr[0][0]==arr[1][1]&&arr[0][0]==arr[2][2]){
            winnerDeclared=true;
            winner=`Player ${currPlayer}`;
        }
    }
    if(boxNumber=="two"){
        if(arr[1][0]==arr[0][0]&& arr[1][0]==arr[2][0]){
            winnerDeclared=true;
            winner=`Player ${currPlayer}`;
        }
        if(arr[1][0]==arr[1][1]&&arr[1][0]==arr[1][2]){
            winnerDeclared=true;
            winner=`Player ${currPlayer}`;
        }
    }
    if(boxNumber=="three"){
        if(arr[2][0]==arr[2][1] && arr[2][0]==arr[2][2]){
            winnerDeclared=true;
            winner=`Player ${currPlayer}`;    
        }
        if(arr[2][0]==arr[1][0]&&arr[2][0]==arr[0][0]){
            winnerDeclared=true;
            winner=`Player ${currPlayer}`;
        }
        if(arr[2][0]==arr[1][1]&&arr[2][0]==arr[0][2]){
            winnerDeclared=true;
            winner=`Player ${currPlayer}`;
        }
    }

    if(boxNumber=="four"){
        if(arr[0][1]==arr[0][0]&&arr[0][1]==arr[0][2]){
            winnerDeclared=true;
            winner=`Player ${currPlayer}`;
        }
        if(arr[0][1]==arr[1][1]&& arr[0][1]==arr[2][1]){
            winnerDeclared=true;
            winner=`Player ${currPlayer}`;
        }
    }
    if(boxNumber=="five"){
        if(arr[1][1]==arr[0][0]&&arr[1][1]==arr[2][2]){
            winnerDeclared=true;
            winner=`Player ${currPlayer}`;
        }
        if(arr[1][1]==arr[0][2]&& arr[1][1]==arr[2][0]){
            winnerDeclared=true;
            winner=`Player ${currPlayer}`;
        }
        if(arr[1][1]==arr[0][1]&&arr[1][1]==arr[2][1]){
            winnerDeclared=true;
            winner=`Player ${currPlayer}`;
        }
        if(arr[1][1]==arr[1][0]&&arr[1][1]==arr[1][2]){
            winnerDeclared=true;
            winner=`Player ${currPlayer}`;
        }
    }
    if(boxNumber=="six"){
        if(arr[2][1]==arr[2][0]&&arr[2][1]==arr[2][2]){
            winnerDeclared=true;
            winner=`Player ${currPlayer}`;
        }
        if(arr[2][1]==arr[1][1]&&arr[2][1]==arr[0][1]){
            winnerDeclared=true;
            winner=`Player ${currPlayer}`;
        }
    }
    if(boxNumber=="seven"){
        //  console.log("entered the destination");
          if(arr[0][2]==arr[0][1] && arr[0][2]==arr[0][0]){
              winnerDeclared=true;
              winner=`Player ${currPlayer}`;    
          }
          if(arr[0][2]==arr[1][2]&&arr[0][0]==arr[2][2]){
              winnerDeclared=true;
              winner=`Player ${currPlayer}`;
          }
          if(arr[0][2]==arr[1][1]&&arr[0][2]==arr[2][0]){
              winnerDeclared=true;
              winner=`Player ${currPlayer}`;
          }
      } 
      if(boxNumber=="eight"){
        if(arr[1][2]==arr[0][2]&& arr[1][2]==arr[2][2]){
            winnerDeclared=true;
            winner=`Player ${currPlayer}`;
        }
        if(arr[1][2]==arr[1][1]&&arr[1][2]==arr[1][0]){
            winnerDeclared=true;
            winner=`Player ${currPlayer}`;
        }
    }
    if(boxNumber=="nine"){
        //  console.log("entered the destination");
          if(arr[2][2]==arr[2][1] && arr[2][2]==arr[2][0]){
              winnerDeclared=true;
              winner=`Player ${currPlayer}`;    
          }
          if(arr[2][2]==arr[1][2]&&arr[2][2]==arr[0][2]){
              winnerDeclared=true;
              winner=`Player ${currPlayer}`;
          }
          if(arr[2][2]==arr[1][1]&&arr[2][2]==arr[0][0]){
              winnerDeclared=true;
              winner=`Player ${currPlayer}`;
          }
      }


}

function displayWinner(){
    h2.innerText=`${winner} is the Winner`;
   // h2.setAttribute("role","alert");
    let btn=document.createElement("button");
    btn.innerText="Reset";
    btn.classList.add("btnStyle");
    h2.append(btn);
    btn.addEventListener("click",resetGame);
}

function resetGame(){
    for(box of boxes){
        box.classList.remove("cross");
        box.classList.remove("circle");
    }
    h2.innerText="";
    count=0;

    winnerDeclared=false;
     arr=[["","",""],
          ["","",""],
          ["","",""]];
     blocks={
        one:{
            color:"",
            clickedBy:""
          },
      two:{
         color:"",
         clickedBy:""
         },
    three:{
          color:"",
         clickedBy:""
    },
    four:{
         color:"",
         clickedBy:""
    },
    five:{
         color:"",
         clickedBy:""
    },
    six:{
         color:"",
         clickedBy:""
    },
    seven:{
        color:"",
        clickedBy:""
    },
    eight:{
         color:"",
         clickedBy:""
    },
    nine:{
        color:"",
         clickedBy:""
    },
};
}
