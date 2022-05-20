import { useEffect, useState } from "react"
import { SquareComponet } from "./sqaure"
import './tic-tac.css'
const initial =[" ","","","","","","","",""]
export const TicTac =()=>{
    const [gameState,updategameState] =useState(initial)
    const [isXchance,updateXChance]=useState(false)



    const handle=(index)=>{
      let string= Array.from(gameState)
      string[index]=isXchance?"X":"0";
      updategameState(string)
      updateXChance(!isXchance)
    }

useEffect(()=>{
const winner = checkWinner()
if(winner){
    alert(`${winner} has won the game`)
    updategameState(initial)
}

},[gameState])
function checkWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
        return gameState[a];
      }
    }
    return null;
  }


    return(
        <>
    
     <div className="line1">
<SquareComponet  className={"comp1"} state={gameState[0]} onClick={()=>{handle(0)}}  />
<SquareComponet className={"comp2"} state={gameState[1]} onClick={()=>{handle(1)}}/>
<SquareComponet className={"comp3"} state={gameState[2]} onClick={()=>{handle(2)}}/>
     </div>
     <div className="line2">
     <SquareComponet className={"comp4"} state={gameState[3]} onClick={()=>{handle(3)}}/>
     <SquareComponet className={"comp5"} state={gameState[4]} onClick={()=>{handle(4)}}/>
     <SquareComponet className={"comp6"} state={gameState[5]} onClick={()=>{handle(5)}}/>
     </div>
     <div className="line3">
     <SquareComponet className={"comp7"} state={gameState[6]} onClick={()=>{handle(6)}}/>
     <SquareComponet className={"comp8"} state={gameState[7]} onClick={()=>{handle(7)}}/>
     <SquareComponet className={"comp9"} state={gameState[8]} onClick={()=>{handle(8)}}/>
     </div>
 <button onClick={()=>{updategameState(initial)}}>Reset Game</button>
        </>
    )
}