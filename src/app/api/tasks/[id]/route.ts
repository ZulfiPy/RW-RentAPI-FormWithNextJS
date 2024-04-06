import connectDB from "@/config/database";
import Task from "@/models/Task";
import { authOptions } from "../../auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";

// GET /api/tasks/[id]
export async function GET(req: Request, { params }: { params: { id: string } }) {
    const session = await getServerSession(authOptions);

    if (!session) {
        return Response.json({ 'message': 'You must be logged in.' }, { status: 401 })
    }

    const { id } = params;

    try {
        await connectDB();

        const task = await Task.findById(id);

        if (!task) {
            return Response.json({ 'message': `Task with ID ${id} not found` }, { status: 404 })
        }

        return Response.json(task, { status: 200 });
    } catch (error) {
        console.log(`error occured while reading task with id ${id}; error: ${error}`);
        return Response.json({ 'message': 'Something went wrong' }, { status: 500 })
    }
}

// PUT /api/tasks/[id]
export async function PUT(req: Request, { params }: { params: { id: string } }) {
    const session = await getServerSession(authOptions);

    if (!session) {
        return Response.json({ 'message': 'You must be logged in.' }, { status: 401 })
    }

    const { id } = params;
    const newTaskData = await req.json();
    console.log(newTaskData)
    const sortedNewTaskData = Object.entries(newTaskData).sort();

    if (Object.keys(newTaskData).length < 1) {
        return Response.json({ 'message': 'Noting to change' }, { status: 400 })
    }

    try {
        await connectDB();

        const task = await Task.findById(id);
        const oldTaskData = {
            title: task.title,
            description: task.description,
            priority: task.priority,
            status: task.status,
            user: task.user
        }
        const sortedOldTaskData = Object.entries(oldTaskData).sort();

        const taskDataUnchanged = JSON.stringify(sortedNewTaskData) === JSON.stringify(sortedOldTaskData);

        if (taskDataUnchanged) {
            return Response.json({ 'message': 'You have to change at least one character to updated the task' }, { status: 400 });
        };

        const newTask = await Task.findOneAndUpdate({ _id: id }, newTaskData, { new: true });

        return Response.json(newTask, { status: 200 });
    } catch (error) {
        console.log(`error occured while updating task with id ${id}; error: ${error}`);
        return Response.json({ 'message': 'Something went wrong' }, { status: 500 });
    }
}

// DELETE /api/tasks/[id]
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    const session = await getServerSession(authOptions);

    if (!session) {
        return Response.json({ 'message': 'You must be logged in.' }, { status: 401 });
    }

    const { id } = params;

    try {
        await connectDB();

        const task = await Task.findById(id);

        if (!task) {
            return Response.json({ 'message': 'Task what you want to delete not found for some reason' });
        }

        const taskToDelete = await Task.findByIdAndDelete(id);

        return Response.json({ 'message': taskToDelete }, { status: 200 });
    } catch (error) {
        console.log(`error occured while deleting task with id ${id}; error: ${error}`);
        return Response.json({ 'message': 'Something went wrong' }, { status: 500 });
    }
}