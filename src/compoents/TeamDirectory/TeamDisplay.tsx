import List from "./List";
import FilterText from "./FilterText";
import { employeeData } from "./data";
import { useState } from "react";
import {type ChangeEvent} from "react";

export default function TeamDisplay() {
    const [query, setQuery] = useState("");

    function handleFilter(queryText: string) {
        
            return employeeData.filter(emp => emp.name.includes(queryText) || emp.role.includes(queryText))
     
    }

    function handleOnType(e: ChangeEvent<HTMLInputElement>) {
        setQuery(e.target.value)
    }
    
    return (
        <div>
        <FilterText onType={handleOnType} filterText={query} />
          
        <List employees={handleFilter(query)}/>
        </div>
    )
}