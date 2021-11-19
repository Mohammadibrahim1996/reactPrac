import React,{useState, useEffect} from 'react';

export const Prac =()=>{
    const [matchData, setMatchData]=useState([]);    
    const [cntryName, setCntryName]=useState("");
    const [avg, setAvg]=useState(0);
    const data =[ {country: "Pakistan", score: 23}, {country: "Pakistan", score: 127}, {country: "India", score: 3}, {country: "India", score: 71}, {country: "Australia", score: 31}, {country: "India", score: 22}, {country: "Pakistan", score: 81}, ];
    
    useEffect(()=>{ 
        setMatchData(data);
    },[data])
    useEffect(() => {
        const filteredData= matchData.filter(item=> item.country===cntryName)
        let scores=0;
        filteredData.forEach(element => {
            scores=scores + element.score;
        }); 
        setAvg(scores/filteredData.length)
    }, [cntryName])
    return(
        <div>
            <h3>Average data</h3>
            <input type="text" onChange={e=>setCntryName(e.target.value)} />
            <h1>{avg>0?avg:0}</h1>
        </div>
    )
}
