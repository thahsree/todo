import { useState } from 'react'
import React from 'react'
import './List.css'

function List() {

  const [toDos,setToDos] = useState([]);
  const [toDo,setToDo] = useState('');

    const handleDelete = (id) => {
    
    setToDos(toDos.filter((obj) => obj.id !== id));
  };
  function getDayOfWeek(){
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const currentDay = daysOfWeek[currentDate.getDay()];
    return currentDay;
  }
  
  return (
    <div className='app'>
      <div className='MainHeading'>
        <h1>ToDo List</h1>
      </div>
      <div className='SubHeading'>
        <h3>Woop Its {getDayOfWeek()}😊✔️</h3>
      </div>
      <div className='input'>
        <input  value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder='✒️ add item...'/>
        <i onClick={()=>setToDos([...toDos,{id: Date.now(), name: toDo, status: false}])} className="fas fa-plus"></i>
      </div>
      <div className='todos'>
        {
          toDos.map((obj,index)=>{
            return(
              <div className='todo'key={index}>
            <div className='left'>
            <input onChange={(e)=>{
                console.log(e.target.value)
                console.log(obj)
                setToDos(toDos.filter(obj2=>{
                  if(obj2.id===obj.id){
                    obj2.status = e.target.checked
                    console.log(obj2.status)
                  }
                  return obj2
                }))
            }} value={obj.status} type="checkbox" name='' id='check' />
            <p >{obj.name} </p>
            </div>
          <div className='right'>
          <i onClick={()=>handleDelete(obj.id)} className="fas fa-times"></i>
          </div>
        </div>
            )
          })
        }
        {
          toDos.map((obj)=>{
            if(obj.status){
                return <h1>{obj.name}</h1>
            }
            return null
          })
        }
      </div>
    </div>
  )
}

export default List
