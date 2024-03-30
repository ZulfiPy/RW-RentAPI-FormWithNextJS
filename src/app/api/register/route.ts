import User from "@/models/User";
import connectDB from "@/config/database";

// POST /api/register
export async function POST(req: Request) {
    try {
        await connectDB();
        const data = await req.json();
        console.log('data on the server', data);

        const newUser = await new User(data);
        await newUser.save();
        console.log("newUser", newUser);

        return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
        console.log('Error occured while registering new user:', error);
        return new Response(JSON.stringify({ error: 'new user registration failed' }), { status: 409 });
    }
}