'use client'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "./ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "./ui/select";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import taskSchema from "@/validators/task";

type taskInputType = z.infer<typeof taskSchema>

const InputTaskForm = () => {
    const router = useRouter();
    const form = useForm<taskInputType>({
        resolver: zodResolver(taskSchema),
        defaultValues: {
            title: "",
            description: "",
            priority: "",
            status: ""
        },
    });

    function handleSubmittedForm(values: taskInputType) {
        console.log(values);
        form.reset();
    };

    return (
        <div>
            <Form {...form}>
                <form
                    className="flex flex-col space-y-4"
                    onSubmit={form.handleSubmit(handleSubmittedForm)}>
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Title:</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter task title" {...field} />
                                </FormControl>
                                <FormDescription>
                                    Ex.: Insurance, Discount Cards...
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description:</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter task description" {...field} />
                                </FormControl>
                                <FormDescription>
                                    Ex.: Order new discount cards
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="priority"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Priorty:</FormLabel>
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select task priority" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="Low">Low</SelectItem>
                                        <SelectItem value="Middle">Middle</SelectItem>
                                        <SelectItem value="High">High</SelectItem>
                                    </SelectContent>
                                    <FormDescription>
                                        Select: Low/Middle/High
                                    </FormDescription>
                                    <FormMessage />
                                </Select>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="status"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Status:</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter task description" {...field} />
                                </FormControl>
                                <FormDescription>
                                    Ex.: Started/Close to Finish/Finished
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button
                        type="submit"
                        className="self-center p-5 font-bold text-md"
                    >Add New Task</Button>
                    <Button
                        type="button"
                        onClick={() => router.push('/tasks')}
                        className="py-7 font-bold text-md"
                    >Check Tasks Table</Button>
                </form>
            </Form>
        </div>
    )
}

export default InputTaskForm;