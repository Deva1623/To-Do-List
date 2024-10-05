import { useState } from "react";
import '../App.css'

function AddToDo({addToDo, showSnackBar}){

    const [input , setInput] = useState("");       //state to store the input value
    const handleSubmit = (e)=>{

        e.preventDefault();

        if(input !== ''){                //if user enters some task is not blank then add it to the list
            addToDo(input.trim());      //removing trailing whitespace
        }else{
            showSnackBar('Please enter something');     //if empty search snackbar will come in bottom

        }
    }

    return (

        <section className="my-10">

        {/*-----form to add task----- */}

        <form onSubmit={handleSubmit} className="flex justify-center items-center mt-5">
            <input placeholder='Whats in your mind...😃' className=" search-bar border border-black p-2 rounded-xl w-72"  type='text' value={input} onChange={(e)=> setInput(e.target.value)}></input>
            
            <button className='add-btn bg-teal-800  text-white font-bold p-3 rounded-full ml-4' type='submit'>Add</button>
        </form>
        
        </section>
        
    )
}

export default AddToDo;