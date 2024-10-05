
import '../App.css';
import { FaEdit, FaTrash, FaCheck } from 'react-icons/fa';

// this componenet is individual card for each task

function ToDoItem({toDo, deleteToDo, markComplete ,editToDo}){
   
    //function to handle Editing
    const handleEdit = ()=> {
        
        const newTask = prompt("Enter the updated task", toDo.task);     //prompt to get the updated task
        
        if(newTask !== null && newTask !== ''){        //if task is not empty then updating the task
            editToDo(toDo.id, newTask);              //calling the editToDo function to update the task
        }
    }

    return (
        
         
        <li key={toDo.id} className= { `card border-2  border-gray-300 rounded-md h-auto  p-2 flex flex-col justify-between     ${toDo.completed? 'bg-green-400 line-through' : 'bg-white'} ` }>

              
              <h2 className='card-title w-22 text-center font-mono font-bold bg-yellow-200 rounded-lg text-sm'><span>Task - <span className='text-xs'>{toDo.id}</span></span></h2>
              
              <div className='h-52 flex justify-center items-center overflow-y-auto' >

               {toDo.completed? 
               ( 
                <p className={`customFont text-black font-mono text-justify text-lg break-words`}>Completed</p>
               ):(
                <p className={`customFont h-44 text-black font-mono text-justify text-xs break-words`}>{toDo.task}</p>
               )
            
               }

              </div>
              
              {/*-----edit, delete, update buttons----- */}
              <div className='flex justify-between gap-2 mb-2'>
                <button className='shine bg-green-600 hover:bg-green-300 rounded-full p-1 w-1/2' onClick={()=> markComplete(toDo.id)}><FaCheck className="text-white mx-auto" /></button>
                <button className="shine bg-blue-600 hover:bg-blue-400 rounded-full p-1 w-1/2" onClick={handleEdit}> <FaEdit className="text-white mx-auto" /> </button>
              </div>
              <button className="shine bg-red-500 hover:bg-orange-400 rounded-full p-1" onClick={()=> deleteToDo(toDo.id)}><FaTrash className="text-white mx-auto" /></button>


        </li>
    )
}

export default ToDoItem;