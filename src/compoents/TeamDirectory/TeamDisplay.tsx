import List from "./List";
import FilterText from "./FilterText";
import { employeeData } from "./data";
import { useState } from "react";
import {type ChangeEvent} from "react";

export default function TeamDisplay() {
    const [query, setQuery] = useState("");

    function handleFilter(queryText: string) {
        return employeeData.filter(emp => emp.name.toLowerCase().includes(queryText.toLowerCase()) || emp.role.toLowerCase().includes(queryText.toLowerCase()))
    }

    function handleOnType(e: ChangeEvent<HTMLInputElement>) {
        setQuery(e.target.value)
    }
    
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <FilterText onType={handleOnType} filterText={query} />
            
            <List employees={handleFilter(query)}/>
        </div>
    )
}