import { baseUrl, repositoriesAndEventsQuantity } from '../variables.js'

async function getEvents(userName) {
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${repositoriesAndEventsQuantity}`)
    return await response.json()
}

export { getEvents }