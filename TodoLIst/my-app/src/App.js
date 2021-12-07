import React,{useState} from "react";
import './App.css';



function App() {
  const [grid,setGrid] =useState(0);
  const [players,setPlayers] =useState(0);
  const [input,setInput]=useState(false);
  var data={data:[{"number":1,"dice":2,"history":"2,5,3,3,5,3,2","position":"2,7,13,18,20,23,25","result":"winner"},
{"number":2,"dice":2 , "history":"2,4,2,4,3,3,2","position":"2,6,8,12,15,18,20","winner":""}]}

const handleSubmit=()=>{
  setInput(true);
}
  
 
  return (
    <div className="App">
      <h1>
        Login Input
      </h1>

      <h6>Grid Size</h6>
      <input type="number" id=" grid" name="grid" onChange={(e)=>setGrid(e.target.value)}/>
      <h6>Players</h6>
      <input type="number" id="player" name="players" onChange={(e)=>setPlayers(e.target.value)} />
      <br></br>
      <br></br>
      <button onClick={()=>handleSubmit()} >Start Button</button>
      <div>
        <h1>
          Game Card
        </h1>
       
      </div>
      <table style={{border:"2px solid"}} className="App">
        <tr>
        <th>Player Name</th>
        <th>Dice Roll</th>
        <th>Dice Roll History</th>
        <th> position History</th>
        <th>Winner</th>
        </tr>

        
          {input==true && data.data.map((item)=>{
            return(
              <tr>
                <td>{item.number}</td>
                <td>{item.dice}</td>
                <td>{item.history}</td>
                <td>{item.position}</td>
                <td>{item.winner}</td>
              </tr>
            )
          })};
      
      

        
          
        
      </table>

        </div>
  );
}

export default App;
