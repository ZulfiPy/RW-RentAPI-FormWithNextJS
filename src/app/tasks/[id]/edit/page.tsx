
'use client';

import { fetchIndividualTask } from "@/utils/tasksRequests";
import { useState, useEffect } from "react";
import Spinner from "@/components/Spinner";
import EditTaskCardForm from "@/components/EditTaskCardForm";

const ViewTaskPage = ({ params }: { params: { id: string } }) => {
    const { id } = params;
    const [task, setTask] = useState<Task>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {

        const fetchTaskData = async () => {
            try {
                const task = await fetchIndividualTask(params.id);
                setTask(task);
            } catch (error) {
                console.log('error in useEffect', error);
            } finally {
                setLoading(false);
            }
        }

        if (loading) {
            fetchTaskData();
        }

    }, [id]);

    return (
        <section className="container flex flex-col items-center justify-center min-h-screen">
            {loading ?
                <Spinner loading={loading} />
                :
                <EditTaskCardForm task={task} id={id} />
            }
        </section>
    )
}

export default ViewTaskPage;