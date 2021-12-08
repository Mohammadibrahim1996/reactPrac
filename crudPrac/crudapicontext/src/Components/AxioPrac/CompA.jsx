import React,{useState} from 'react'

export const CompA  = () => {
    const [num,setNum] = useState(0);
    return (
        <div>
            <h1>Pokemon</h1>
            <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="25">25</option>
            </select>
        </div>
    )
}
