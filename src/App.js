import Moviecard from "./moviecrad";
import Movielist from "./MovieList";
import Navbar from "./Navbarstyled";
import { Component } from "react";
import { movies } from "./moiveData";

class App extends Component {
  constructor() {
    super();
    //Creating the state object
    this.state = {
      movies: movies,
      cartCount: 0,
    };
  }
  handleIncStar = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);
    if (movies[mid].star >= 5) {
      return;
    }
    movies[mid].star += 0.5;
    this.setState({
      movies: movies,
    });
  };
  handleDecStar = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);
    if (movies[mid].star <= 0) {
      return;
    }
    movies[mid].star -= 0.5;
    this.setState({
      movies: movies,
    });
  };

  toggleFav = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);

    movies[mid].fav = !movies[mid].fav;
    this.setState({
      movies: movies,
    });
  };

  toggleCart = (movie) => {
    let { movies, cartCount } = this.state;
    const mid = movies.indexOf(movie);

    movies[mid].isInCart = !movies[mid].isInCart;
    console.log(movies[mid].isInCart);
    if (movies[mid].isInCart) {
      cartCount += 1;
    } else {
      cartCount -= 1;
    }

    this.setState({
      movies: movies,
      cartCount,
    });
  };

  render() {
    let { movies, cartCount } = this.state;
    return (
      <>
        <Navbar cartCount={cartCount} />
        <Movielist
          movies={movies}
          addStars={this.handleIncStar}
          decStars={this.handleDecStar}
          toggleFavBtn={this.toggleFav}
          toggleCartBtn={this.toggleCart}
        />
      </>
    );
  }
}
export default App;
