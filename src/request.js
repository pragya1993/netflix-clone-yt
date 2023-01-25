const API_KEY="9231f0b995798068043afe7c39d25ae4";

const userrequests={
      fetchTrending : `/trending/all/week?api_key=${API_KEY}&languages=en-US`,
      fetchNetflixOriginals : `/discover/tv?api_key=${API_KEY}&with_network=231`,
      fetchTopRated : `/movie/top_rated?api_key=${API_KEY}&languages=en-US`,
      fetchActionMovies : `/discover/movie?api_key=${API_KEY}&with_generes=28`,
      fetchComedyMovies : `/discover/movie?api_key=${API_KEY}&sort_by=vote_average.desc&vote_count.gte=10`,
      fetchHorrorMovies : `/discover/movie?api_key=${API_KEY}&with_cast=23659&sort_by=revenue.desc`,
      fetchRomanceMovies : `/discover/movie?api_key=${API_KEY}&certification.lte=G&sort_by=popularity.desc`,
      fetchTDocumentraies : `/discover/movie?api_key=${API_KEY}&certification=R&sort_by=vote_average.desc`,

}

export default userrequests