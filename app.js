const github = new Github;
const ui = new UI;
const searchUser = document.getElementById('search-user')

searchUser.addEventListener('keyup', (e) => {
    const searchText = e.target.value;
    if (searchText) {

        github.getUser(searchText).then(
            data => {
                if (data.profileData.message === "Not Found") {
                    ui.showAlert('user not found', 'alert alert-danger');
                } else {
                    ui.showProfile(data.profileData);
                    ui.showRepos(data.reposData);
                }
            }
        ).catch(err => console.log(err));
    } else {
        ui.clearProfile()
    }
    e.preventDefault();
})