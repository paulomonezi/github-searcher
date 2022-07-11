import { baseUrl, repositoriesAndEventsQuantity } from '../variables.js'

async function getRepositories(userName){
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesAndEventsQuantity}`)
    return await response.json()
}

export { getRepositories }