'use client';
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "./ui/navigation-menu";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function MainNav() {
    const router = useRouter();
    const { setTheme } = useTheme();

    return (
        <div className="shadow shadow-gray-300 px-8 flex justify-center">
            <NavigationMenu>
                <NavigationMenuList>
                    <div className="h-24 md:px-4 container flex items-center justify-between flex-wrap w-screen">
                        <div className="order-1 font-semibold">
                            <NavigationMenuItem>
                                <Link href="/" legacyBehavior passHref>
                                    <NavigationMenuLink className="font-bold">
                                        Home
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </div>

                        <div className="order-2 w-80 flex justify-around font-semibold ">
                            <NavigationMenuItem>
                                <Link href="/server" legacyBehavior passHref>
                                    <NavigationMenuLink className="font-bold">
                                        Server
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Link href="/client" legacyBehavior passHref>
                                    <NavigationMenuLink className="font-bold">
                                        Client
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Link href="/about" legacyBehavior passHref>
                                    <NavigationMenuLink className="font-bold">
                                        My Info
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </div>

                        <div className="order-3 flex flex-col items-center space-y-3 md:space-x-4 md:space-y-0 md:flex-row">
                            <Button
                                className="font-bold p-5"
                                onClick={() => router.push('/sign-in')}
                            >Sign In</Button>
                            <Button
                                className="font-bold p-5"
                                onClick={() => router.push('/register')}
                            >Register</Button>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button size="icon">
                                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                        <span className="sr-only">Toggle theme</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="start">
                                    <DropdownMenuItem onClick={() => setTheme("light")}>
                                        Light
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => setTheme("dark")}>
                                        Dark
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => setTheme("system")}>
                                        System
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </NavigationMenuList>

            </NavigationMenu>
        </div>
    )
}