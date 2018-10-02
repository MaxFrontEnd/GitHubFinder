class GitHub {
  constructor() {
    this.client_id = 'c490e8788b6cf9ec78a2';
    this.client_secret = '30cc0c3f7dfb37ab5bb3fbb5de03be9b59d155d7';
    this.repos_coutn = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}
      ?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profileRepos = await fetch(`https://api.github.com/users/${user}
      /repos?per_page=${this.repos_coutn}&sort=${this.repos_sort}
      &client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await profileRepos.json();

    return {
      profile: profile,
      repos: repos
    }
  }
}
