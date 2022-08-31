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
    fetch('https://api.github.com/users/MuhmmdUsama/repos')
      .then((res) => res.json())
      .then((repos) => {
        // console.log(repos);
        reposData.innerHTML = ''
      });
  }
}

// https://api.github.com/users/MuhmmdUsama/repos
