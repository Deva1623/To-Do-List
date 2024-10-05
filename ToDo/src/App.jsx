import './index.css'
import './App.css'

//--------------------------------------------------------------
import Header from './components/Header'
import ToDoList from './components/ToDoList'
import { useState } from 'react'
import AddToDo from './components/AddToDo'
import SnackBar from './components/SnackBar'

//---------Parent App component ---------------------------------------
function App() {
  
  //state to manage lsit of todos-----------------------------------
  const [toDos, setToDos] = useState([])

  
  //func to add new to do item-------------------------------------------
  const addToDo = (input) =>{

    const toDoObject = {
       id:Date.now(),
       task: input,
       completed: false
    }

    setToDos([...toDos, toDoObject]);   //adding new to do item to list
    showSnackBar('Added Successfully');
  };

  //func to delete to-do item--------------------------------------------
  const delToDo = (id)=>{
    const confirmation = confirm('Are you sure You want to Delete?');

    if(confirmation){
      setToDos( toDos.filter(toDo=> toDo.id !== id) );   //if user confirms then delete
      showSnackBar('Deleted Successfully');
    }
  }

  // function to mark complete -------------------------------------------
  const markComplete = (id)=>{
    
    //finding the matching toDo and marking it complete
    setToDos( toDos.map( (toDo)=> toDo.id === id?  {...toDo,  completed: !toDo.completed}: toDo)  )
    
  }
  
  //function edit old todo---------------------------------------------
  const editToDo = (id, updatedTask)=>{
     
    //finding the matching toDo and editing it
    setToDos( toDos.map( (toDo)=> toDo.id === id? {...toDo, task:updatedTask}: toDo ) )
    showSnackBar('Task Edited');


  }
   
  //function to show snackbar-------------------------------------------
  const [snackBarMsg , setSnackbarMsg] = useState('');
  const [snackBarOpen, setSnackbarOpen] = useState(false);

  const showSnackBar = (message)=>{
    
    setSnackbarMsg(message);
    setSnackbarOpen(true);

    //-----hiding------
    setTimeout(()=>{
      setSnackbarOpen(false);
    },5000)
  }

//------------------------------------------------------------------------

//passing props to child--> AddToDo component, ToDo list and snackbar
  return (
      
    <div className='min-h-screen'>

      <div className='w-full'>

      <Header></Header>
      
      <AddToDo  addToDo = {addToDo} showSnackBar={showSnackBar}></AddToDo>

      <ToDoList  key={toDos.id} itemsToDo = {toDos} deleteToDo={delToDo} markComplete = {markComplete} editToDo={editToDo}> </ToDoList>
      
      {snackBarOpen && (  <SnackBar message={snackBarMsg}  close = {()=> setSnackbarOpen(false)} />) }
  
      
      </div>

    </div>
  )
}

export default App
