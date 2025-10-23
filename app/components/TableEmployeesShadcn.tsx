import { mockEmployees } from "../lib/auth";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function TableEmployees() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[110px]">Identificador</TableHead>
          <TableHead>Nombre</TableHead>
          <TableHead>Correo electrónico</TableHead>
          <TableHead>Rol en la empresa</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {mockEmployees.map((employee) => (
          <TableRow key={employee.id} className="font-medium">
            <TableCell>{employee.id}</TableCell>
            <TableCell>{employee.name}</TableCell>
            <TableCell>{employee.email}</TableCell>
            <TableCell>{employee.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
