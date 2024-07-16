import React, { useEffect, useState } from 'react';

// Tip 1: Remember to use the useState hook to create your state.
// Tip 2: Initialize your state with a list of 3(!) book titles as strings.

export default function Books() {
  // Tip 3: Define your state here using useState.
  const [books, setBooks]= useState([]);
  
  useEffect(()=> {
    const booklist =[ {"id":1, "title":"title 1"}, {"id":2, "title":"title 2"}]; 
    setBooks(booklist);
  },[]);

  
  return (
    <div>
      {/* Tip 4: Use the map function to render your list of books within a <ul>. */
      <ul>
       {books.map(book => (
           <li key={book.id}>
             {book.title}
           </li>
           ))
        }
      </ul>
          
      }
    </div>
  );
}
