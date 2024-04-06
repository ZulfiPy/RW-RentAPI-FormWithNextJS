'use client';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "./ui/table";
import { Button } from "./ui/button";
import { FaEye, FaPen, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";
import { useRouter } from "next/navigation";

export default function TasksTable() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const router = useRouter();

    useEffect(() => {

        async function getTasks() {

            if (loading) {
                try {
                    const response = await fetch('/api/tasks');

                    if (response.status === 404) return setLoading(false);

                    if (response.ok && response.status === 200) {
                        const responseData = await response.json();
                        setTasks(responseData);
                    }
                } catch (error) {
                    console.log('error in fetching tasks useEffect', error);
                } finally {
                    setLoading(false);
                }
            }
        }

        getTasks();
    }, []);

    return (
        <div className="text-left border-2 rounded-lg p-4">

            {loading ?
                <Spinner loading={loading} /> :
                tasks.length === 0 ?
                    (
                        <p>
                            Table is empty. Please add a new task toastify see task rendered in the tasks table
                        </p>
                    ) : (
                        <Table>
                            <TableCaption>A list of tasks that need to be done at work.</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>ID</TableHead>
                                    <TableHead>Title</TableHead>
                                    <TableHead>Description</TableHead>
                                    <TableHead>Priority</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Created At</TableHead>
                                    <TableHead>View</TableHead>
                                    <TableHead>Edit</TableHead>
                                    <TableHead>Delete</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {tasks.map((task, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{task._id}</TableCell>
                                        <TableCell>{task.title}</TableCell>
                                        <TableCell>{task.description}</TableCell>
                                        <TableCell>{task.priority}</TableCell>
                                        <TableCell>{task.status}</TableCell>
                                        <TableCell>
                                            {`${task.createdAt.split('T')[0]} ${task.createdAt.split('T')[1].slice(0, 8)}`}
                                        </TableCell>
                                        <TableCell>
                                            <Button
                                                type="button"
                                                onClick={() => router.push(`tasks/${task._id}/view`)}>
                                                <FaEye className="mr-1" />View
                                            </Button>
                                        </TableCell>
                                        <TableCell>
                                            <Button
                                                type="button"
                                                onClick={() => router.push(`/tasks/${task._id}/edit`)}>
                                                <FaPen className="mr-1" />Edit
                                            </Button>
                                        </TableCell>
                                        <TableCell>
                                            <Button
                                                type="button"
                                                onClick={async () => {
                                                    const { _id } = task
                                                    const deleteRequest = async () => {
                                                        const response = await fetch(`/api/tasks/${_id}`, {
                                                            method: 'DELETE'
                                                        })

                                                        return response;
                                                    }
                                                    await deleteRequest();
                                                    const newTasks = tasks.filter(task => task._id != _id);
                                                    setTasks(newTasks);
                                                }}>
                                                <FaTimes className="mr-1" />Delete
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    )}
        </div>
    )
}