import { useState } from 'react'
import './App.css'
import Header from './comps/Header.jsx'
import Searchbox from './comps/Searchbox.jsx'
import Task from './comps/Task.jsx'
import Taskadder from './comps/Taskadder.jsx'
import TaskHeader from './comps/Taskheader.jsx'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";

//import Clock from './icons/Clock.jsx'

function App() {
  const [tasks, setTasks]   = useState([]);
  const [completed, setCompleted] = useState(false);
  const [search, setSearch] = useState("");
  const [order, setOrder]   = useState("alphaAZ");
  const [newTaskVal, setNewTaskVal] = useState("");
  
 
  const getNew = () => tasks.sort((a,b) => b.date - a.date);
  const getOld = () => tasks.sort((a,b) => a.date - b.date);
  const getAtZ = () => tasks.sort((a,b) => a.body.localeCompare(b.body));
  const getZtA = () => tasks.sort((a,b) => b.body.localeCompare(a.body));
  const getRad = () => tasks.sort(() => Math.random() - 0.5);
  order === "newer"? getNew() : 
  order === "older"? getOld() : 
  order === "alphaAZ"? getAtZ() : 
  order === "alphaZA"? getZtA() : 
  order === "random"? getRad() : 
  alert('default');

  let setOrd = (ord) => {setOrder(ord)};


    const handleComp = (id) => {
        setTasks((prevTasks) => prevTasks.map((taskk) => taskk.id === id ?
            {...taskk, isCompleted: !taskk.isCompleted} : taskk
        ));
        
        tasks.map((ta) => ta.id === id ? setNewTaskVal(ta.body) : null)
        //alert("Card")
        //status.isCompleted ? el.target.style.background = 'green' :  status.isCompleted ? el.style.background = '#fff'
    }


    let delBtn = (btn) => {
        setTasks(
            tasks.filter((e) => e.id !== btn)
        )
    }
  
  
  
  
  
  let addTass = (newTask) =>{
    let forgedId = tasks.length + 1;
    let date = new Date;
    
    //newTask !== '' ? setOrder("random") : alert('Add something Please!');
    
    newTask !== '' ?
    setTasks([
        ...tasks,
        {
         id: forgedId, 
         body: newTask, 
         isCompleted: false,
         date: date.getTime()
        }
    ]) : alert('Add something Please!');
  }
  
 
  let funcSearch = (e) => setSearch(e);


  let compStyle = {
      transition: '.5s',
      textDecoration: 'line-through',
      background: '#e2d7c7',
      textDecorationColor: '#ddbc12'
  }
  
  
  
   

  return (
    <div className="container">
      <Header />
      <Searchbox searchV={funcSearch} />
      <Taskadder addTas={addTass} newTask={setNewTaskVal}/>
      
      <div className="taskCont">
        <TaskHeader ordr={setOrd}/>
        
        <div className="cont">
            {/*=========================*/}
            
            {tasks.filter((tas) => search === "" ? tas : tas.body.toLowerCase().includes(search.toLowerCase()))
                .map((tas) => {
                
                    let timestamp = tas.date;
                    // Convert to Date object
                    const dateObj = new Date(timestamp);
                    // Format date as dd-mm-yyyy
                    const formattedDate = dateObj.getDate().toString().padStart(2, '0') + '-' + 
                                          (dateObj.getMonth() + 1).toString().padStart(2, '0') + '-' + 
                                          dateObj.getFullYear();
                    // Format time as h:mm:ss
                    const formattedTime = dateObj.getHours().toString().padStart(2, '0') + ':' + 
                                          dateObj.getMinutes().toString().padStart(2, '0') + ':' + 
                                          dateObj.getSeconds().toString().padStart(2, '0');
                    return( <div className="task" style={tas.isCompleted ? compStyle :  null} key={tas.id} onClick={() => handleComp(tas.id)}>
                                <div className="tas">{tas.body} <br/> <FontAwesomeIcon icon={faClock} style={{fontSize: '11px', color: '#bfbfbf'}} /> <span>{formattedTime} || {formattedDate}</span></div>
                                <div className="delBtn" onClick={() => {delBtn(tas.id)}}> <FontAwesomeIcon icon={faTrash} /></div>
                            </div>)
                }
            )}
        </div>
      </div>
    </div>
  )
}

export default App
