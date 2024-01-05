
import { revalidatePath } from "next/cache";
import prisma from "../utils/db"

const handleTask = async (formData)=>{
    'use server';
const task = formData.get('content')//this has to matched the number on the input field
console.log(task);
    await prisma.task.create({
        data:{
            content:task
        }
    })
    revalidatePath('/tasks') //this helps to reload the page after a new task is added
}


export default function TaskForm (){
 
    return (
<form action={handleTask} className=" join w-full" > 
    <input type="text"  className=" border rounded shadow p-3 mr-4 w-full" placeholder="Enter Your Task Here" name="content" required />
    <button type="submit"className="btn btn-accent ">Add Task</button>
</form>
    )
}