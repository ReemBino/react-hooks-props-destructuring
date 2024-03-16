import React from "react";
import MovieCard from "./MovieCard";

function App() {
  const title = "Mad Max";
  
  const genresArr = ["Action", "Adventure", "Science Fiction", "Thriller"];

  return (
    <div className="App">
      {/* Omitting the posterSrc prop to see the default poster image */}
      <MovieCard title={title} genres={genresArr} />
    </div>
  );
}

export default App;
