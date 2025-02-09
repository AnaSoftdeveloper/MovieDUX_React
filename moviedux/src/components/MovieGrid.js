import React, {useState} from "react";
import '../styles.css';  
import MovieCard from './MovieCard';


export default function MoviesGrid({movies, watchlist ,ToggleWatchlist})
{
   

    const [searchTerm, setSearchTerm] = useState("");
    const [genre, setGenre] = useState("All Genres");
    const [rating, setRating] = useState("All");

    const hangleSearchChange = (e) => {
     setSearchTerm(e.target.value);
     console.log("Handle  search");
    }

    const hangleGenreChange = (e) => {
        setGenre(e.target.value);
        console.log("Handle genre");
       }

    const hangleRatingChange =(e)=> {
        setRating(e.target.value);
        console.log("Handle rating");
       }

    const matchesGenre = (movie, genre) => {
       return genre === "All Genres" || movie.genre.toLowerCase() === genre.toLowerCase();
       }

    const matchesRating = (movie, rating) => {       
        switch(rating){
         case "All":
            return true;

          case "Good":
            return movie.rating >= 8;

          case "Ok":
            return movie.rating >= 5 && movie.rating < 8;
         
            case "Bad":
            return movie.rating < 5;
         
            default:
            return false;    
        }   
    };

    const matchesSearchTerm = (movie, searchTerm) => {
        return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    }
       
    const filteredMovies = movies.filter(
    (movie) => 
     matchesGenre(movie, genre) &&
     matchesRating(movie, rating) &&
     matchesSearchTerm(movie, searchTerm)
    );
    
    return (
        <div>
              <input type="text" className="search-input"
               placeholder="Search movies..."
                value={searchTerm}  
                onChange={hangleSearchChange}></input>

             <div className="filter-bar">
                <div className="filter-slot">
                   <label>Genre</label>
                   <select className="filter-dropdown" value={genre} onChange={hangleGenreChange}>
                    <option>All Genres</option>
                    <option>Action</option>
                    <option>Drama</option>
                    <option>Fantasy</option>
                    <option>Horror</option>
                   </select>
                </div>

                <div className="filter-slot">
                   <label>Rating</label>
                   <select className="filter-dropdown" value={rating} onChange={hangleRatingChange}>
                    <option>All</option>
                    <option>Good</option>
                    <option>Ok</option>
                    <option>Bad</option>
                   </select>
                </div>
             </div> 

              <div className='movies-grid'>
               {
                filteredMovies.map(movie => (
                    <MovieCard 
                    movie={movie} key={movie.id} 
                    isWatchlisted={watchlist.includes(movie.id)} 
                    ToggleWatchlist={ToggleWatchlist}/>                   
                ))
              }
              </div>
        </div>

    )
};