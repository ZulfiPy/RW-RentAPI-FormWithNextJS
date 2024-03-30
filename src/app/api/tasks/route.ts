import connectDB from "@/config/database";
import Task from "@/models/Task";
import { authOptions } from "../auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import type { NextApiRequest, NextApiResponse } from "next";

// GET /api/tasks
export async function GET(req: Request, res: Response) {
    const session = await getServerSession(authOptions);

    if (!session) {
        return Response.json({ message: "You must be logged in" }, { status: 401 });
    }
    try {
        await connectDB();
        const tasks = await Task.find({ user: session.user?.id });

        if (tasks.length === 0) {
            return Response.json({ message: "No tasks found" }, { status: 404 });
        }

        return Response.json(tasks, { status: 200 });
    } catch (error) {
        console.log('error occured while reading tasks', error);
        return Response.json({ message: "Something went wrong" }, { status: 500 });
    }
}

// POST /api/tasks
export async function POST(req: Request, res: Response) {
    const session = await getServerSession(authOptions);

    if (!session) {
        return Response.json({ message: "You must be logged in" }, { status: 401 });
    }

    const data = await req.json();

    try {
        await connectDB();

        const newTask = await new Task(data).save();

        return Response.json(newTask, { status: 201 })
    } catch (error) {
        console.log('error occured while adding new task(POST request)', error);
        return Response.json({ message: "Something went wrong" }, { status: 500 })
    }
}