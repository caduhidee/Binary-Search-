import {useState} from "react";
import {search} from "../api/apiClient";
   
export default function TreeBuildVisualizer(){
    const [input, setInput] = useState("");
    const [result, setResult] = useState(null);

    const handleSearch = async () => {
        const output = await search(Number(input));
        setResult(output);
    }
}