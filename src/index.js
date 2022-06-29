async function user(){
    const response = await fetch('https://api.github.com/users/paulomonezi')
    return await response.json()
}