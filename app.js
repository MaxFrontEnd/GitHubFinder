const github = new GitHub;
const ui = new UI;
// Search input

const searchUser = document.getElementById('searchUser');

//Search input event listener
searchUser.addEventListener('keyup', (e) => {
  //Get input text
  const userText = e.target.value;

  if(userText !== '') {
    // make http call
    github.getUser(userText)
    .then(data => {
      if(data.profile.message === 'Not Found') {
        // alert
        ui.showAllert('User not found', 'alert alert-danger' )
      } else {
        //show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    })
  } else {
    // Clear Profile
    ui.clearProfile();
  }
});
