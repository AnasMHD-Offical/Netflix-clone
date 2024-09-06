const API_KEY = "867e83bad56b6a4e06e0a48a6536e3d8";



const Requests = {
    fetchTrending : `/trending/all/week?api_key=${API_KEY}&language=en`,
    fetchNetflixOrginals : `/discover/tv?api_key=${API_KEY}&include_adult=false&language=en-US&page=1&sort_by=popularity.desc&with_networks=213`,
    fetchTopRatedMovies : `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchTopRatedTvSeries : `/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchActionMovies : `/discover/movie?api_key=${API_KEY}&language=en&sort_by=popularity.desc&with_genres=80`,
    fetchComedyMovies : `/discover/movie?api_key=${API_KEY}&language=en&sort_by=popularity.desc&with_genres=35`,
    fetchHorrorMovies : `/discover/movie?api_key=${API_KEY}&language=en&sort_by=popularity.desc&with_genres=27`,
    fetchRomanticMovies : `/discover/movie?api_key=${API_KEY}&language=en&sort_by=popularity.desc&with_genres=10749`,
    fetchDocumentaries : `/discover/movie?api_key=${API_KEY}&language=en&sort_by=popularity.desc&with_genres=99`,
    fetchComic : `/discover/movie?api_key=${API_KEY}&language=en&sort_by=popularity.desc&with_genres=12`,
}

export default Requests