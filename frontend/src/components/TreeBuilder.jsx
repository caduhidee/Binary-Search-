import { use, useState } from "react";
import { submitTree, search } from "../api/apiClient";


function createNode(value = ""){
    return {value, left: null, righ: null};
}
export default function TreeBuilder(){
    const [root, setRoot] = useState(createNode());
    const [, setTick] = useState(0);
    const[searchValue, setSearchValue] = useState("");
    const [searchResult, setSearchResult] = useState("");
    

    const forceRender = () => setTick(tick => tick + 1);
    
    const handleValueChange = (node, newValue) => {
        node.value = newValue;
        forceRender();
    }

    const addChildren = (node) => {
        if (!node.left) node.left = createNode();
        if (!node.right) node.right = createNode();
        forceRender();
    }

    const renderNode = (node) => {
        return (
            <div style = {{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem"}}>
                <input 
                    type = "number"
                    value = {node.value}
                    onChange = {(e) => handleValueChange(node, e.target.value)}
                    placeholder="value"
                />
                {!node.left && !node.right && (
                    <button onClick={() => addChildren(node)}> Add Children </button>
                )}
                <div style = {{ display: "flex", gap: "1rem"}}>
                    {node.left && renderNode(node.left)}
                    {node.right && renderNode(node.right)}
                </div>
            </div>
        );
    };

    const handleSubmit = async () => {
        await submitTree(root);
        alert("Tree submitted");
    };

    const handleSearch = async () => {
        if(searchValue === "") return null;
        const result = await search(Number(searchValue));
        setSearchResult(result.found ? `Found: ${result.value}` : "Value not found");
    }

    return (
        <div style = {{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem"}}>
            <h1>Binary Tree Builder</h1>
            {renderNode(root)}
            <button onClick={handleSubmit}>Enter Tree</button>

            <hr />

            <h2>Search Tree</h2>
            <input
                type="number"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Value to search"
            />
            <button onClick={handleSearch}>Search</button>
            {searchResult && <p>{searchResult}</p>}

        </div>
    );
}