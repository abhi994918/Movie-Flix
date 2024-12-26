import { Component } from "react";
import Moviecard from "./moviecrad";
import { movies } from "./moiveData";

class Movielist extends Component {
  render() {
    // const { title, plot, rating, price, stars, fav, isIncart, poster } =
    //   this.state.movies;
    const { movies, addStars, decStars, toggleFavBtn, toggleCartBtn } =
      this.props;
    return (
      <>
        {movies.map((movie) => (
          <Moviecard
            movies={movie}
            addStars={addStars}
            decStars={decStars}
            toggleFavBtn={toggleFavBtn}
            toggleCartBtn={toggleCartBtn}
            key={movie.id}
          />
        ))}
      </>
    );
  }
}

export default Movielist;
