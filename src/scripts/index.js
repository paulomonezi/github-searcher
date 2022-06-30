async function user() {
    const response = await fetch('https://api.github.com/users/paulomonezi')
    return await response.json()
}

function getUserProfile() {
    user().then((userData) => {
        console.log(userData)
        let userInfo = `<img src="${userData.avatar_url}" alt="Profile photo" />
                       <div class="data">
                            <h1>${userData.name ?? "Don't have any registered name 😢"}</h1>
                            <p>${userData.bio ?? "Don't have any bio"}</p>
                       </div>`
        document.querySelector('.profile-data').innerHTML = userInfo
    })
}

getUserProfile()