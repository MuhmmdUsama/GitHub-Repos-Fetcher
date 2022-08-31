let input = document.querySelector('.get-repos input'),
  getButton = document.querySelector('.get-button'),
  reposData = document.querySelector('.show-data');

getButton.addEventListener('click', getRepos);

//   Get Repos

function getRepos() {
  if (input.value == '') {
    console.log('Value Cannot Be Empty');
    reposData.innerHTML = '<span>Please Write Github Username</span>';
  } else {
    console.log(input.value);
    fetch(`https://api.github.com/users/${input.value}/repos`)
      .then((res) => res.json())
      .then((repos) => {

        reposData.innerHTML = '';
        repos.forEach((repo) => {
            let repoDiv = document.createElement('div')
            let repoName = document.createTextNode(repo.name) // Get form api
            repoDiv.appendChild(repoName)

            let repoUrl = document.createElement('a') // Repos Links
            let repoUrlText = document.createTextNode('Visit')
            repoUrl.appendChild(repoUrlText)
            repoUrl.href = `https://github.com/${input.value}/${repo.name}`
            repoUrl.target = '_blank'
            repoDiv.appendChild(repoUrl)

            let starCount = document.createElement('span')
            let starText = document.createTextNode(`Stars ${repo.stargazers_count}`)
            starCount.appendChild(starText)
            repoDiv.appendChild(starCount)

            repoDiv.className = 'repo-box'
            reposData.appendChild(repoDiv)
        });

      });
  }
}

// https://api.github.com/users/MuhmmdUsama/repos
