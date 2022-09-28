import React, { useState } from 'react'
import './Todo.css'
function Todo() {
  const[calcul,setCalcul]=useState([])
  const[data,setData]=useState(null)
  const[newList,setNewList]=useState("")
 
  const InıtıalState=[
    { id:1,baslik :"Do your homework"},
    {id:2 , baslik:"Work css"}
  ]
   const [list,setList]=useState(InıtıalState);
  
  function getData(val) {
    val.preventDefault();
    setData(val.target.value)
    setList(false)
    
  }
  const onClicks=()=>{
    if(newList===""){
      setList("emty list")
    }
    else { setList([...list , {id:Date.now() , baslik:newList}]);setNewList("") }
  }

  
  return (
    <div className='bigAlice'>
      <div className='bigConteiner'>
        <div className='HeaderToDo'>
          <div className='inputcss'>
          <div className="form__group field">
  <input value={newList} onChange={(e)=>{setNewList(e.target.value)}} type="input" className="form__field" placeholder="Name" name="name" id='name' required />
  <label htmlFor="name" className="form__label">Add ToDo</label>
         </div>
          </div>
          <button className="gg-add-r" onClick={()=>{setList([...list , {id:Date.now() , baslik:newList}]);setNewList("") }}></button>
 

        </div>
        <div className='Footercss'>
          <div>
            <div className='sonuç'>
              {
                list.map(item=> <div className='kutucuk' key={item.id}>{item.baslik}</div>)
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Todo;
