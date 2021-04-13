import React,{useState} from 'react';
import uuid from 'react-uuid';


const Form = () => {

const[todos,setTodos] =useState([{id:uuid(), text: 'Arrange books in order'},{id:uuid(), text: 'Apply driving licence'}]); //state & setState function for todo
const[input,setInput] =useState();                     //state & setSate function for input
let d = new Date() // set up a date variable from js

const chHandle= (event) => {
  //  console.log(event.target.value)
    setInput(event.target.value) //set input state to whatever is entered in the placeholder
}

const addHandle =(event) =>{
    
     event.preventDefault();      // to make the form behaviour // enter to submit & not reloading the page
 //   console.log([...todos,{id:uuid(),text:input}])
    setTodos([{id:uuid(),text:input},...todos])  // concate todo objs together with new created todo with random id & text from input
    setInput()   // clears the place holder once the todo is submitted
}

const remHandle =(id) => {
    setTodos( todos.filter((todo)=> todo.id !== id)  ) // filter & returns todos with uuid different than clicked
}


    return (
        <div className="app-cont">
            <div className="fm-cont">
           <div><h1>ToDo App</h1><h5 className="dt">{d.toDateString()}</h5></div>
            <form  netlify >
                <input className="inp-fm" value={input} type="text" onChange={chHandle} placeholder="Whats on your mind" />
                <button className="btn" disabled={!input} type="submit"  onClick={addHandle}>+</button>
            </form>
            <div className="td-cont">
               {todos.map((todo)=><ul   key={uuid()}><li>{todo.text}<button className="rem-btn" type="button" onClick={()=>remHandle(todo.id)}> - </button></li></ul>)}
            </div>
            </div>
        </div>
    );
}
export default Form;
