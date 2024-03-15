'use client';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function HomeCarousel() {
    const router = useRouter();

    return (
        <div className="w-44 text-center">
            <Carousel>
                <CarouselContent className="-ml-4">
                    <CarouselItem><Button onClick={() => router.push('/tasks')}>Tasks Table</Button></CarouselItem>
                    <CarouselItem><Button onClick={() => router.push('/new-task')}>New Task</Button></CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}