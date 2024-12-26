import { Component } from "react";

class Moviecard extends Component {
  // addStar() {
  //   // console.log("this:", this);
  //   // this.state.stars += 1;
  //   if (this.state.stars >= 5) {
  //     return;
  //   }
  //   this.setState({
  //     stars: this.state.stars + 0.5,
  //   });
  // }

  // decStar = () => {
  //   if (this.state.stars <= 0) {
  //     return;
  //   }
  //   this.setState((prevstate) => {
  //     return {
  //       stars: prevstate.stars - 0.5,
  //     };
  //   });
  // };

  // handleFav = () => {
  //   this.setState({
  //     fav: !this.state.fav,
  //   });
  // };

  // handleAddCart = () => {
  //   this.setState({
  //     isIncart: !this.state.isIncart,
  //   });
  // };

  render() {
    //deStructuring
    const { movies, addStars, decStars, toggleFavBtn, toggleCartBtn } =
      this.props;
    const { title, plot, rating, price, star, fav, isInCart, poster } =
      this.props.movies;
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img
              alt="poster"
              // src="https://cdn.marvel.com/content/1x/avengersendgame_lob_crd_05.jpg"
              src={poster}
            />
          </div>
          <div className="right">
            <div className="title">{title}</div>
            <div className="plot">{plot}</div>
            <div className="price">{price}</div>

            <div className="footer">
              <div className="rating">{rating}</div>
              <div className="star-dis">
                <img
                  className="str-btn"
                  alt="Decrease"
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828899.png"
                  onClick={() => {
                    decStars(movies);
                  }}
                />

                <img
                  alt="star"
                  src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                  className="stars"
                />
                <img
                  className="str-btn"
                  alt="Increase"
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828919.png"
                  onClick={() => {
                    addStars(movies);
                  }}
                />
                <span className="starCount">{star}</span>
              </div>

              {fav ? (
                <button
                  className="unfavourite-btn"
                  onClick={() => {
                    toggleFavBtn(movies);
                  }}
                >
                  Un-favourite
                </button>
              ) : (
                <button
                  className="favourite-btn"
                  onClick={() => {
                    toggleFavBtn(movies);
                  }}
                >
                  Favourite
                </button>
              )}
              {/* <button className="favourite-btn">Favourite</button>
              <button className="unfavourite-btn">Un-favourite</button> */}

              {/* {isIncart ? (
                <button
                  className="unfavourite-btn"
                  onClick={() => {
                    toggleCartBtn(movies);
                  }}
                >
                  Remove From cart
                </button>
              ) : (
                <button
                  className="cart-btn"
                  onClick={() => {
                    toggleCartBtn(movies);
                  }}
                >
                  Add to cart
                </button>
              )} */}

              <button
                className={isInCart ? "unfavourite-btn" : "cart-btn"}
                onClick={() => {
                  toggleCartBtn(movies);
                }}
              >
                {isInCart ? "Remove from cart" : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Moviecard;
