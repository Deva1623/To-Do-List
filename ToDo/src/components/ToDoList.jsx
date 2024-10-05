import ToDoItem from "./ToDoItem";


//this componennt is the area where all cards will display, its parent of TODO item.

function ToDoList({itemsToDo, deleteToDo, markComplete ,  editToDo}){  //receiving props from App.jsx and sending to Todo item child}

    return(
        <div className="container mx-auto px-4">

     
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-6">

        {itemsToDo.map(toDo=>(
                
                        
                <ToDoItem  key = {toDo.id}   toDo = {toDo}   deleteToDo = {deleteToDo}   markComplete = {markComplete}  editToDo={editToDo} > </ToDoItem>
        ))}
        
        </ul>


        </div>
       
    )
}

export default ToDoList;