
export function search(url){
    
    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data.Search))
}