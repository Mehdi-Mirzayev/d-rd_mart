const apiKey = '4cc43c9591f08a993e37d3de55e50a72';

fetch(
  `https://api.themoviedb.org/3/movie/popular?language=tr-TR&page=1&api_key=${apiKey}`
  )
  .then(response => response.json())
  .then(data => {
    const movies = data.results;
    console.log("Türk Dublajli Məşhur Filmlər:");
    movies.forEach(movie => {
      console.log(movie.title);
    });
  })
  .catch(error => console.log("Xeta!!!:", error));

