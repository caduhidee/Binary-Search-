import {useState} from "react";
import {search} from "../api/apiClient";
   
export default function TreeBuildVisualizer(){
    const [input, setInput] = useState("");
    const [result, setResult] = useState(null);

    const handleSearch = async () => {
        const output = await search(Number(input));
        setResult(output);
    }

    return (
        <div>
            <h1>Build a binary tree</h1>
                <div className = "vstack">
                    <input
                        type = "number"
                        value = {input}
                        onChange = {e => setInput(e.target.value)}
                        placeholder = "root value"
                    />
                    <div className="hstack">
                        <input
                            type = "number"
                            value = {input}
                            onChange = {e => setInput(e.target.value)}
                            placeholder = "left value"
       a                 />
                        <input
                            type = "number"
                            value = {input}
                            onChange = {e => setInput(e.target.value)}
                            placeholder = "right value"
                        />
                    </div>
                    <button onClick = {handleSearch}> add row </button>
                    {}

                </div>



        </div>
    );
}