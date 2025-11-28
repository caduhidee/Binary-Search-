import {useState} from "react";
import {search} from "../api/apiClient";

export default function BinarySearchVisualizer(){
    const [input, setInput] = useState("");
    const [result, setResult] = useState(null);

    const handleSearch = async () => {
        const output = await search(Number(input));
        setResult(output);
    };


    return (
        <div>
            <h1>Binary Search</h1>
            
            <input
                type = "number"
                value = {input}
                onChange = {e => setInput(e.target.value)}
                placeholder = "Enter a number"
            />
            <button onClick = {handleSearch}> Search </button>
            {result !== null && <p>Result: {result}</p>}
        </div>
        
    );
}

