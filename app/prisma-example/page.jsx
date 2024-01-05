import prisma from "../../utils/db";

const prismaHandlers = async () => {
  await prisma.task.create({
    data: {
      content: "Hello this is Juan",
    },
  });
  const getAllTask = prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return getAllTask;
};

export default async function PrismaPage() {

    const tasks = await prismaHandlers()

  return <div>
    {tasks.map(task=>(
        <h1 key={task.id} className="text-3xl py-4 ">{task.content}</h1>
    ))}
  </div>;
}
