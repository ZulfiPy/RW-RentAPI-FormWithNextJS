import HomeCarousel from "@/components/HomeModuleCarousel";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/options";

import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(authOptions);

  // console.log(session)

  return (
    <section className="container flex flex-col items-center justify-center min-h-screen">
      {session
        ? <HomeCarousel />
        : <Link
          href="/api/auth/signin"
          className="font-bold">
          Welcome to the RW-Rent internal systems page.<br/>
          If you wish to use inner system ,please sign in.
        </Link>}
    </section >
  );
}
