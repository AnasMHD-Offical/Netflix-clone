import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Card from "./Components/Card/Card";
import Requests from "./Request/Request";
function App() {
  return (
    <>
      <Hero/>
      <Card
        title="NETFLIX ORIGINALS"
        fetchUrl={Requests.fetchNetflixOrginals}
        IsLargeRow={true}
      />
      <Card title="Trending Now" fetchUrl={Requests.fetchTrending} />
      <Card title="Top Rated Movies" fetchUrl={Requests.fetchTopRatedMovies} />
      <Card
        title="Action & Adventuries Movies"
        fetchUrl={Requests.fetchActionMovies}
      />
      <Card
        title="Top Rated TV Show"
        fetchUrl={Requests.fetchTopRatedTvSeries}
      />
      <Card title="Comedy Movies" fetchUrl={Requests.fetchComedyMovies} />
      <Card
        title="Horror & Triller Movies"
        fetchUrl={Requests.fetchHorrorMovies}
      />
      <Card title="Comic Movies" fetchUrl={Requests.fetchComic} />
      <Card title="Romantic Movies" fetchUrl={Requests.fetchRomanticMovies} />
      <Card title="Documentaries" fetchUrl={Requests.fetchDocumentaries} />
    </>
  );
}

export default App;
