'use client';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "./ui/navigation-menu";
import Link from "next/link";
import { Button } from "./ui/button";

export default function MainNav() {
    return (
        <div className="shadow shadow-gray-300 px-8 flex justify-center">
            <NavigationMenu>
                <NavigationMenuList>
                    <div className="h-24 md:px-4 container flex items-center justify-between flex-wrap bg-black w-screen">
                        <div className="order-1 font-semibold">
                            <NavigationMenuItem>
                                <Link href="/" legacyBehavior passHref>
                                    <NavigationMenuLink className="hover:text-gray-500">
                                        Home
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </div>

                        <div className="order-2 w-80 flex justify-around font-semibold ">
                            <NavigationMenuItem>
                                <Link href="/server" legacyBehavior passHref>
                                    <NavigationMenuLink className="hover:text-gray-500">
                                        Server
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Link href="/client" legacyBehavior passHref>
                                    <NavigationMenuLink className="hover:text-gray-500">
                                        Client
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Link href="/about" legacyBehavior passHref>
                                    <NavigationMenuLink className="hover:text-gray-500">
                                        My Info
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </div>

                        <div className="order-3">
                            <Button className="font-bold mr-1">Log In</Button>
                            <Button className="font-bold ml-1">Register</Button>
                        </div>
                    </div>
                </NavigationMenuList>

            </NavigationMenu>
        </div>
    )
}