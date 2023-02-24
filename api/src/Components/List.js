import React from 'react'


const List = () =>{
    return(
        <div className='main-container'>
   
  <input type="text" className="Input" placeholder="Enter your Task"/>
  <br></br>
  <button onclick="newElement()" class="addBtn">Add new Task</button>
  <br></br>
  <br></br>

           <ul className="myList">
                <li>Hit the gym</li>
                <li>Pay bills</li>
                <li>Meet George</li>
                <li>Buy eggs</li>
                <li>Read a book</li>
                <li>Organize office</li>
           </ul>
        </div>
        
    )
}

export default List;