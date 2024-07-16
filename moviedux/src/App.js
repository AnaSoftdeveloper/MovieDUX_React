import { useState, useEffect } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MoviesGrid from './components/MovieGrid';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Watchlist from './components/Watchlist';

function App() {
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    fetch("movies.json")
    .then(response => response.json())
    .then(data => setMovies(data));
},[]);

const ToggleWatchlist= (movieId)=>{ 
  setWatchlist(prev => 
     prev.includes(movieId)? prev.filter((id) => id !== movieId) 
     : [...prev, movieId]
   )

}

console.log("watchlist " + watchlist)

  return (
    <div className="App">
      <div className='container'>
         <Header></Header> 

         <Router>
           <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>           
              </li>
              <li>
                <Link to="/watchlist">Watchlist</Link>
              </li>
            </ul>
           </nav>

           <Routes>
            <Route path="/" element={<MoviesGrid movies={movies} watchlist={watchlist} ToggleWatchlist={ToggleWatchlist} />}/>
            <Route path="/watchlist" element={<Watchlist movies={movies} watchlist={watchlist} ToggleWatchlist={ToggleWatchlist}/>}/>    
             </Routes>  
           </Router>
      </div> 
      <Footer></Footer>
    </div>
  );
}

export default App;
