import {type ChangeEvent} from "react";

interface props {
    filterText: string,
    onType:(e: ChangeEvent<HTMLInputElement>) => void
}
export default function FilterText(inputText: props) {
    return (
        <input className="border-amber-100 bg-amber-50 text-amber-800 h-10" placeholder="Search employees..." onChange={inputText.onType} value={inputText.filterText} />
    )
}