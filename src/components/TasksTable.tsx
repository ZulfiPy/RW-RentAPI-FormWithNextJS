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
                <TableCaption>A list of tasks that need to be done at work.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>№</TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead >Description</TableHead>
                        <TableHead>Priority</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Created At</TableHead>
                        <TableHead>View</TableHead>
                        <TableHead>Edit</TableHead>
                        <TableHead>Delete</TableHead>
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