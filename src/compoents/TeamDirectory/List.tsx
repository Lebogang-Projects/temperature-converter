interface Employee {
    id: number,
    name: string,
    role: string
}

interface Props {
    employees: Employee[]
}

export default function List({employees}: Props) {
    return (
        <div className="flex flex-row">
            <ul>
                {employees.map((employee, index) => (
                    <li className="card card-border card-xs bg-base-100 w-96" key={index}>
                    <div card-body>
                        <div className="card-title text-2xl">{employee.name} </div>
                        <div>{employee.role} </div>
                    </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}