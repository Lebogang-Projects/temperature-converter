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
        <div className="">
            <ul className="list   rounded-box shadow-md">
                {employees.map((employee, index) => (
                    <li className="list-row w-full m-2 bg-amber-600" key={index}>
                    <div className="card-body  ">
                        <div className="card-title text-2xl">{employee.name} </div>
                        <div className="text-shadow-current">{employee.role} </div>
                    </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}