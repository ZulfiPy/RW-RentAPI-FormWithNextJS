export { default } from "next-auth/middleware"

export const config = {
    matcher: ['/tasks', '/new-task', '/my-info'],
}