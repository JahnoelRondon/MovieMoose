

export function search(url){
    return (
        fetch(url)
        .then(response => response.json())
    )
}

export function details(url){
    return
}