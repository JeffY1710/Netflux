const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NGJlNzFhNjk3YzFkNjlkZjAzMzllYTgzM2U2NzQzYyIsInN1YiI6IjY1NmYyNTA3ODg2MzQ4MDBhZGU1NTc5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sGp5gU76UQzrK3beEWnUewa8YzCQRCLjhOVBNyOaWE8'
    }
  };

export async function getMovies(){

    const response = await fetch("https://api.themoviedb.org/3/discover/movie", options)
    let movies = await response.json()
    return movies;
}