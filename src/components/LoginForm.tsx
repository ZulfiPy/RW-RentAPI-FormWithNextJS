'use client';

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { loginSchema } from "@/validators/login";

import Link from "next/link";

type loginInputType = z.infer<typeof loginSchema>;

const LoginForm = () => {
    const form = useForm<loginInputType>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            username: "",
            password: ""
        }
    });

    function handleLoginForm(values: loginInputType) {
        console.log(values);
    };

    return (
        <div className="mt-20">
            <Card>
                <CardHeader>
                    <CardTitle>Sign In</CardTitle>
                    <CardDescription>Provide accurate data to successful logging in.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form
                            className="flex flex-col space-y-4"
                            onSubmit={form.handleSubmit(handleLoginForm)}>
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Username:</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Enter a username"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            Example: DaveGray777
                                        </FormDescription>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password:</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="password"
                                                placeholder="Enter a password"
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <Button type="submit">Sign In</Button>

                            <Link
                                href="/register"
                                className="self-center hover:underline">
                                Forgot username or password?
                            </Link>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div >
    )
}

export default LoginForm;