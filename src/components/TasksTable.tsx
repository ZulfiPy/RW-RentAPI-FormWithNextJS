import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "./ui/table";
import { Button } from "./ui/button";
import { FaEye, FaPen, FaTimes } from "react-icons/fa";

export default function TasksTable() {
    return (
        <div className="text-left">
            <Table>
                <TableCaption className="text-black">A list of tasks that need to be done at work.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-black">№</TableHead>
                        <TableHead className="text-black">Title</TableHead>
                        <TableHead className="text-black">Description</TableHead>
                        <TableHead className="text-black">Priority</TableHead>
                        <TableHead className="text-black">Status</TableHead>
                        <TableHead className="text-black">Created At</TableHead>
                        <TableHead className="text-black">View</TableHead>
                        <TableHead className="text-black">Edit</TableHead>
                        <TableHead className="text-black">Delete</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>Insurance</TableCell>
                        <TableCell>924WDR kahjujuhtum Swedbank</TableCell>
                        <TableCell>Mid</TableCell>
                        <TableCell>Not started</TableCell>
                        <TableCell>08:26 14.03.2024</TableCell>
                        <TableCell>
                            <Button>
                                <FaEye className="mr-1" />View
                            </Button>
                        </TableCell>
                        <TableCell>
                            <Button>
                                <FaPen className="mr-1" />Edit
                            </Button>
                        </TableCell>
                        <TableCell>
                            <Button>
                                <FaTimes className="mr-1" />Delete
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}