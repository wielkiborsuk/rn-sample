class MovieService {
  getMovies() {
    return fetch('http://api.tvmaze.com/shows')
      .then((response) => response.json());
  }
}

export { MovieService };
export default new MovieService();
