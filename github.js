class Github {

    constructor() {
        this.client_id = '43a008c3337a2212f0c0';
        this.client_secret = '25fc99133a7ecfe4c8cd9fde3081e390a86a746d';
        this.url = "https://api.github.com/users/";
        this.repos_sort = 'created: asc';
        this.repos_count = 5;

    }

    async getUser(user) {
        const profileResponse = await fetch(this.url + user + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profileData = await profileResponse.json();
        const reposData = await repoResponse.json();
        return {
            profileData,
            reposData

        }
    }


}