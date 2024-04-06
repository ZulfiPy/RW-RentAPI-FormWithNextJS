import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";

interface MyProfileCardProps {
    session: Session | null
}

const MyProfileCard: React.FC<MyProfileCardProps> = ({ session }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Your Data</CardTitle>
                <CardDescription>Here is provided your user session data</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col space-y-3">
                <label>
                    <span className="font-bold underline">ID:</span> {session?.user?.id}
                </label>
                <label>
                    <span className="font-bold underline">Username:</span> {session?.user?.username}
                </label>
                <label>
                    <span className="font-bold underline">Name:</span> {session?.user?.name}
                </label>
                <label>
                    <span className="font-bold underline">Email:</span> {session?.user?.email}
                </label>
                <label>
                    <span className="font-bold underline">Roles:</span> {!session?.user?.roles ? "No Roles" : "User role assigned"}
                </label>
            </CardContent>
        </Card>
    )
}

export default MyProfileCard;