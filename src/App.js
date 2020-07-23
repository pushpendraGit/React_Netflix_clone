import React from 'react';

import './App.css';
import Row from './Row';
import requests from './requests';


function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <Row 

      isLargeRow = {true}
      title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginls}/>
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title='Action Movies' fetchUrl={requests.fetchActonMovies} />
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Rommance Movies' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Documentries' fetchUrl={requests.fetchDocumentarMovies} />
 
    </div>
  );
}

export default App;
