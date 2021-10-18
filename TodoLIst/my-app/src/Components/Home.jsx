import React ,{useState} from "react";
import {Col,Row} from "react-bootstrap";
import { Todolist } from "./Todolist/Todolist";
import { Addtodo } from "./Todolist/Addtodo";
import './Todolist/Todo.css';

export const Home=()=>{
    const [todoitem, setTodoitem] = useState([]);
    const handleAdd = (newTodo) =>{
    setTodoitem([...todoitem,newTodo]);
    };
    const handleDelete = (curritem) => {
        const filtered = todoitem.filter((item)=> item !== curritem);
        setTodoitem([...filtered]);
    }
    return(
        <div>
            <Row>
                <Col>
            <Addtodo handleAdd={handleAdd}/>
                </Col>
                <Col>
                {todoitem.length > 0 ? (<Todolist todoitem={todoitem} handleDelete={handleDelete}/>): 
                <span> its empty here</span>}
                </Col>
            </Row>
        </div>
            
    );
};