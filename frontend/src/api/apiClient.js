export async function search(value){
    const response = await fetch('https://localhost:8080/api/search?value=${value}');
    return response.json();
}