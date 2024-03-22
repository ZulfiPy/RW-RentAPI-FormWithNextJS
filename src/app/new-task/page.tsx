import InputTaskForm from "@/components/InputTaskForm"

export default function NewTaskPage() {
    return (
        <section className="container flex flex-col items-center min-h-screen space-y-10">
            <h1 className="text-3xl font-bold mt-10">New Task Form</h1>
            <InputTaskForm />
        </section>
    )
}