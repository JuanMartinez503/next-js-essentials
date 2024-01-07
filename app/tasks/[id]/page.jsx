import prisma from "../../../utils/db";
import Link from "next/link";
import { redirect } from "next/navigation";

const SingleTaskPage = async ({params}) => {
    console.log(params.id);
    
  const task = await prisma.task.findUnique({
    where:{
        id:params.id
    }
  });

  const { id, completed, content } = task;
  const updateTask = async (formData) => {
    "use server";
    const content = formData.get("content");
    const id = formData.get('id')
    const completed = formData.get('completed')
    await prisma.task.update({
        where:{
            id,
        },
        data:{
            content,
            completed: completed ==='on'?true :false
        }
    })
    redirect('/tasks')

  };
  return (
    <div>
      <div>
        <Link href="/tasks" className="btn btn-accent">
          Back to Tasks{" "}
        </Link>
        <form
          action={updateTask}
          className="max-w-sm p-12 border border-base-300 my-4 rounded-lg shadow-md "
        >
          <input type="hidden" name="id" value={id} />
          <input
            type="text"
            name="content"
            defaultValue={content}
            required
            className="input w-full input-bordered"
          />
          <div className="form-control mt-6">
            <label htmlFor="completed " className="label cursor-pointer">
              <span className="label-text">Completed?</span>
              <input
                type="checkbox"
                defaultChecked={completed}
                id="completed"
                name="completed"
                className=" checkbox checkbox-sm checkbox-primary"
              />
            </label>
          </div>
          <div className="text-center mt-4">
          <button type="submit" className="btn w-full btn-primary">Update</button>

          </div>
        </form>
      </div>
    </div>
  );
};
export default SingleTaskPage;
