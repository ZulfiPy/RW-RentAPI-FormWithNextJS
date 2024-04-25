
declare global {
    interface Task {
        _id: string,
        title: string,
        description: string,
        priority: string,
        status: string,
        createdAt: string
    }
}

interface User {
    id: string,
    username: string,
    name: string,
    email: string,
    roles: String[]
}

declare global {
    interface Session {
        user?: User
    }
}

export { };
