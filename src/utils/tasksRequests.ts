const API_DOMAIN = process.env.NEXT_PUBLIC_API_DOMAIN || null;

async function fetchTasks() {
    if (!API_DOMAIN) return [];

    try {
        const res = await fetch(`${API_DOMAIN}/tasks`);

        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }

        return {
            status: res.status,
            ok: res.ok,
            data: res.json()
        }
    } catch (error) {
        console.log('error occured while fetching tasks', error);
        return {
            status: undefined,
            ok: undefined,
            data: []
        };
    }
}

async function fetchIndividualTask(id: string) {
    if (!API_DOMAIN) return null;

    try {
        const res = await fetch(`${API_DOMAIN}/tasks/${id}`);

        if (!res.ok) {
            throw new Error('Failed to fetch individual tasks');
        }

        return res.json();
    } catch (error) {
        console.log('error occured while fetch individual task');
        return null;
    }
}

export {
    fetchTasks,
    fetchIndividualTask,
}