const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                            <img src="${user.avatarUrl}" alt="Profile photo" />
                            <div class="data">
                              <h1>${user.name ?? "This user don't have a registered name 😢"}</h1>
                              <p>${user.bio ?? "This user don't have any bio 😢"}</p>
                              <span>👥 Followers: ${user.followers ?? "This user don't have any follower"}</span>
                              <span>👥 Following: ${user.following ?? "This user don't follow anyone"}</span>
                            </div>
                        </div>`

        let repositoriesItems = ''
        user.repositories.forEach(repo => repositoriesItems += `<li><a href="${repo.html_url}" target="_blank">${repo.name}
        <div class="about-repo">
        <span class="forks">🍴${repo.forks_count ?? ''}  </span>
        <span class="stars">⭐${repo.stargazers_count ?? ''}  </span>
        <span class="watchers">👀${repo.watchers_count ?? ''}  </span>
        <span class="language">📚${repo.language ?? ''}  </span>
        </div></a></li>`)

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Last 10 Repositories</h2>
                                                <ul>${repositoriesItems}</ul>
                                            </div>`
        }

        if (user.events.length > 0) {
            let eventsItens = ''
            user.events.forEach(event => {
                if (event.type === 'PushEvent' || 'CreateEvent') {
                    if (event.payload) {
                        if (event.payload.commits) {
                            const commits = [event.payload.commits]
                            const commitsList = commits.map(commit => `<span>${commit[0].message}</span>`)
                            eventsItens += `<li><strong>${event.repo.name} : - &nbsp</strong>  ${commitsList}</li>`
                        }
                    }
                }
            })

            this.userProfile.innerHTML += `<div class="events-section">
                                            <h2>Lastest activities</h2>
                                            <ul>${eventsItens}</ul>
                                           </div>`
        }

    },

    renderNotFound() {
        this.userProfile.innerHTML = "<h3>User not found</h3>"
    }
}

export { screen }