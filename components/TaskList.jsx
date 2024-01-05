
import { revalidatePath } from 'next/cache'
import prisma from '../utils/db'
import Link from 'next/link'
const getAllTask = async ()=>{
    return await prisma.task.findMany({
        orderBy:{
            createdAt:'desc'
        }
    })
}

const handleDeleteTask =async (formData )=>{
    'use server'
const id = formData.get('id')
//I had to add the form to a add this to a form and make an input field and gave it the value of the id
console.log(id)
//this deletes atask selected by the id
 await prisma.task.delete({
    where:{
        id:id
    }
})
revalidatePath('/tasks')

}

export default async function TaskList (){
const tasks =await getAllTask()
    return (
        <ul className=' mt-8 '>
            {tasks.map(task=>(
                <li key={task.id} className=' flex justify-between items-center px-6 py-4 border border-base-300 rounded-lg shadow-lg mb-4'>
                    <h2 className={` capitalize text-xl${task.completed? 'line-through' : null}`}>{task.content}</h2>
                    <div className='flex gap-6 items-center'>
                        <Link href={`/tasks/${task.id}`} className=' bg-accent btn-sm p-2 rounded-lg'>Edit</Link>
                        <form action={handleDeleteTask}> 
                        <input type="hidden" name='id' value={task.id} />
                        <button className='btn btn-error'>Delete</button>

                        </form>
                            </div>
                </li>
            ))}
        </ul>
    )
}