const API_BASE = "http://localhost:8080/api";

export async function search(num) {
    try {
        const response = await fetch(`http://localhost:8080/api/search?num=${num}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json(); 
    } catch (err) {
        console.error("API search error:", err);
        throw err;
    }
}



export async function submitTree(tree) {
    return await fetch(`${API_BASE}/tree`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(tree),
    });
}

export async function getTree() {
    const response = await fetch(`http://localhost:8080/api/tree`);
    return response.json();
}

