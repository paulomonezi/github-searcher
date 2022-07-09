const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                            <img src="${user.avatarUrl}" alt="Profile photo" />
                            <div class="data">
                              <h1>${user.name ?? "This user don't have a registered name 😢"}</h1>
                              <p>${user.bio ?? "This user don't have any bio 😢"}</p>
                              <span>👥 Followers: ${user.followers ?? "This user don't have any follower"}</span>
                              <span>👥 Following: ${user.following ?? "This user don't follow anyone"}
                            </div>
                        </div>`

        let repositoriesItems = ''
        user.repositories.forEach(repo => repositoriesItems += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`)

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Last 10 Repositories</h2>
                                                <ul>${repositoriesItems}</ul>
                                            </div>`
        }
    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h3>User not found</h3>"
    }
}

export { screen }