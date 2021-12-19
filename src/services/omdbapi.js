
export function search(url){
    return (
        fetch(url)
        .then(response => response.json())
    )
}