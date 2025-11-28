export async function search(value){
    const response = await fetch('http://localhost:8080/api/search?num=${value}');
    return response.json();
}

export async function submitTree(rootNode){
    const response = await fetch(`http://localhost:8080/api/tree`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(rootNode),
    });
    return response.text;
}  

export async function getTree() {
    const response = await fetch(`http://localhost:8080/api/tree`);
    return response.json();
}

