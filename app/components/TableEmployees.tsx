import { mockEmployees } from "../lib/auth";

export default function TableEmployees() {
  return (
    <div>
      <div>
        <h2>Tabla de empleados</h2>
      </div>

      <table>
        <thead>
            <tr>
                <th>Identificador</th>
                <th>Nombre</th>
                <th>Correo electrónico</th>
                <th>Rol en la empresa</th>
            </tr>
        </thead>
        <tbody>
            {mockEmployees.map((employee)=> (
                <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.email}</td>
                    <td>{employee.role}</td>
                </tr>
            ))}
        </tbody>
      </table>

    </div>
  );
}
