import { user } from '/src/scripts/services/user.js'
import { repositories } from '/src/scripts/services/repositories.js'

document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value
    getUserProfile(userName)
})

document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13

    if (isEnterKeyPressed) {
        getUserProfile(userName)
    }
})

function getUserProfile(userName) {


    user(userName).then((userData) => {
        let userInfo = `<div class="info">
                            <img src="${userData.avatar_url}" alt="Profile photo" />
                            <div class="data">
                              <h1>${userData.name ?? "Don't have any registered name 😢"}</h1>
                              <p>${userData.bio ?? "Don't have any bio 😢"}</p>
                            </div>
                        </div>`
        document.querySelector('.profile-data').innerHTML = userInfo

        getUserRepositories(userName)
    })
}

function getUserRepositories(userName) {
    repositories(userName).then(reposData => {
        let repositoriesItems = ""
        reposData.forEach(repo => {
            repositoriesItems += `<li><a href="${repo.html_url}" target=_blank>${repo.name}</li>`
        })
        document.querySelector('.profile-data').innerHTML += `
                                                                <div class="repositories section">
                                                                    <h2>Repositories</h2>
                                                                    <ul>${repositoriesItems}</ul>
                                                                </div>`
    })
}