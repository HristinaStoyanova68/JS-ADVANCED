function loadCommits() {
    let usernameElement = document.getElementById('username');
    let repoElement = document.getElementById('repo');
    let username = usernameElement.value;
    let repo = repoElement.value;
    let ul = document.getElementById('commits');
    // const commits = commitsElement.value;
    let url = `https://api.github.com/repos/${username}/${repo}/commits`;

    fetch(url)
        .then(response => response.json())
        .then(data => data.forEach(element => {
           //console.log(element);
            let li = createLi(element.commit.author.name, element.commit.message);
            ul.appendChild(li);
        }));    
}

function createLi(author, message) {
    let li = document.createElement('li');
    li.textContent = `${author}: ${message}`;

    return li;
}