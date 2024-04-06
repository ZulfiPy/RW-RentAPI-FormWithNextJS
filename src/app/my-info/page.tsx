'use client';
import MyProfileCard from "@/components/MyProfileCard";
import { useSession } from "next-auth/react";

export default function MyInfo() {
    const { data: session } = useSession();

    return (
        <section className="container flex flex-col items-center justify-center min-h-screen">
            <div>
                <MyProfileCard session={session as Session} />
            </div>
        </section>
    )
}